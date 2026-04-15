resource "aws_instance" "welcome" {
    ami = "ami-0c02fb55956c7d316"
    instance_type = "t2.small"

    tags = {
        Name = "Remove-Server-1"
    }
}
