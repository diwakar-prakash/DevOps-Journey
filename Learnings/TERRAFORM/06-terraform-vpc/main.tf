terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    tls = {
      source = "hashicorp/tls"
    }
    local = {
      source = "hashicorp/local"
    }
  }
}

resource "aws_vpc" "main_vpc" {
    cidr_block = "10.0.0.0/16"

    tags = {
        Name = "my-first-vpc"
    }
}

resource "aws_subnet" "public_subnet" {
    vpc_id                  = aws_vpc.main_vpc.id
    cidr_block              = "10.0.1.0/24"
    map_public_ip_on_launch = true

    tags = {
        Name = "public-subnet"
    }
}

resource "aws_subnet" "private_subnet" {
    vpc_id     = aws_vpc.main_vpc.id
    cidr_block = "10.0.2.0/24"
    
    tags = {
        Name = "private-subnet"
    }
}

resource "aws_internet_gateway" "igw" {
    vpc_id = aws_vpc.main_vpc.id

    tags = {
        Name = "my-igw"
    }
}

resource "aws_route_table" "public_rt" {
    vpc_id = aws_vpc.main_vpc.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.igw.id
    }

    tags = {
        Name = "public-rt"
    }
}

resource "aws_route_table_association" "public_assoc" {
    subnet_id      = aws_subnet.public_subnet.id
    route_table_id = aws_route_table.public_rt.id
}

resource "aws_eip" "nat_eip" {
    domain = "vpc"
}

resource "aws_nat_gateway" "nat" {
    allocation_id = aws_eip.nat_eip.id
    subnet_id     = aws_subnet.public_subnet.id

    depends_on    = [aws_internet_gateway.igw]

    tags = {
        Name = "my-nat"
    }
}

resource "aws_route_table" "private_rt" {
    vpc_id = aws_vpc.main_vpc.id

    route {
        cidr_block     = "0.0.0.0/0"
        nat_gateway_id = aws_nat_gateway.nat.id
    }

    tags = {
        Name = "private-rt"
    }
}

resource "aws_route_table_association" "private_assoc" {
    subnet_id      = aws_subnet.private_subnet.id
    route_table_id = aws_route_table.private_rt.id
}

resource "aws_instance" "public_server" {
    ami                         = "ami-0c02fb55956c7d316"
    instance_type               = "t2.micro"
    subnet_id                   = aws_subnet.public_subnet.id
    associate_public_ip_address = true
    vpc_security_group_ids      = [aws_security_group.public_sg.id]

    key_name                    = aws_key_pair.deployer_key.key_name

    tags = {
        Name = "public-server"
    }
}

resource "aws_instance" "private_server" {
    ami                    = "ami-0c02fb55956c7d316"
    instance_type          = "t2.micro"
    subnet_id              = aws_subnet.private_subnet.id
    vpc_security_group_ids = [aws_security_group.private_sg.id]

    key_name               = aws_key_pair.deployer_key.key_name

    tags = {
        Name = "private-server"
    }
}

resource "aws_security_group" "public_sg" {
    name = "public-sg"
    vpc_id = aws_vpc.main_vpc.id

    ingress {
        description = "SSH from anywhere"
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

    tags = {
        Name = "public-sg"
    }
}


resource "aws_security_group" "private_sg" {
    name   = "private-sg"
    vpc_id = aws_vpc.main_vpc.id
    
    ingress {
        description     = "SSH from Public EC2"
        from_port       = 22
        to_port         = 22
        protocol        = "tcp"
        security_groups = [aws_security_group.public_sg.id]
    }

    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

    tags = {
        Name = "private-sg"
    }
}

resource "tls_private_key" "ssh_key" {
    algorithm = "RSA"
    rsa_bits  = 4096
}

resource "aws_key_pair" "deployer_key" {
    key_name   = "diwakar-key"
    public_key = tls_private_key.ssh_key.public_key_openssh
}

resource "local_file" "private_key" {
    content  = tls_private_key.ssh_key.private_key_pem
    filename = "diwakar-key.pem"
}

