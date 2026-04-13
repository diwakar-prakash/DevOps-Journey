data "aws_ami" "ubuntu_latest" {
    most_recent = true

    owners = ["099720109477"]

    filter {
        name = "name"
        values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
    }
}

resource "aws_instance" "discovery_server" {
    ami = data.aws_ami.ubuntu_latest.id
    instance_type = var.instance_type

    tags = merge(
        local.common_tags,
        {
            Name = local.server_name
        }
    )
}
