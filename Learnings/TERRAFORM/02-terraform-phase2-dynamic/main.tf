resource "aws_instance" "my_server_2" {
    instance_type = var.server_size
    ami           = "ami-0c02fb55956c7d316"

    tags = {
        Name = var.server_name
    }
}
