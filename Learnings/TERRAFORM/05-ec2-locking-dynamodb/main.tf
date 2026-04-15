data "aws_ami" "latest_amazon_linux" {
  most_recent = true

  owners = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*"]
  }
}

resource "aws_instance" "locking_server" {
  ami           = data.aws_ami.latest_amazon_linux.id
  instance_type = var.instance_type

  tags = merge(
    local.common_tags,
    {
      Name = local.server_name
    }
  )
}

