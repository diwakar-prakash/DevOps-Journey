resource "aws_vpc" "main_vpc" {
    cidr_block = "10.0.0.0/16"

    tags = {
        Name = "my-first-vpc"
    }
}

resource "aws_subnet" "public_subnet" {
    vpc_id = aws_vpc.main_vpc.id
    cidr_block = "10.0.1.0/24"
    map_public_ip_on_launch = true

    tags = {
        Name = "public-subnet"
    }
}

resource "aws_subnet" "private_subnet" {
    vpc_id = aws_vpc.main_vpc.id
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
    subnet_id = aws_subnet.public_subnet.id
    route_table_id = aws_route_table.public_rt.id
}

resource "aws_eip" "nat_eip" {
    domain = "vpc"
}

resource "aws_nat_gateway" "nat" {
    allocation_id = aws_eip.nat_eip.id
    subnet_id = aws_subnet.public_subnet.id

    depends_on = [aws_internet_gateway.igw]

    tags = {
        Name = "my-nat"
    }
}

resource "aws_route_table" "private_rt" {
    vpc_id = aws_vpc.main_vpc.id

    route {
        cidr_block = "0.0.0.0/0"
        nat_gateway_id = aws_nat_gateway.nat.id
    }

    tags = {
        Name = "private-rt"
    }
}

resource "aws_route_table_association" "private_assoc" {
    subnet_id = aws_subnet.private_subnet.id
    route_table_id = aws_route_table.private_rt.id
}

resource "aws_instance" "public_server" {
    ami = "ami-0c02fb55956c7d316"
    instance_type = "t2.micro"
    subnet_id = aws_subnet.public_subnet.id
    associate_public_ip_address = true

    tags = {
        Name = "public-server"
    }
}

resource "aws_instance" "private_server" {
    ami = "ami-0c02fb55956c7d316"
    instance_type = "t2.micro"
    subnet_id = aws_subnet.private_subnet.id

    tags = {
        Name = "private-server"
    }
}

