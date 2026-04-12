provider "aws" {
    region = "us-east-1"
}

resource "aws_instance" "my_server" {
    count         = 3
    ami           = "ami-0c02fb55956c7d316"
    instance_type = "t2.micro"

    tags = {
        Name        = "Pehla"
        Environment = "dev"
        Owner       = "Diwakar"
    }
}

resource "aws_s3_bucket" "my_basket" {
    bucket = "diwakar-first-bucket-111"

    tags = {
        Name        = "welcome"
        Environment = "dev"
        Owner       = "Diwakar"
    }
}
