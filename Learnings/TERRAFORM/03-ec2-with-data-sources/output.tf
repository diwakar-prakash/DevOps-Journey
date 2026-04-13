output "instance_id" {
    value = aws_instance.discovery_server.id
}

output "public_ip" {
    value = aws_instance.discovery_server.public_ip
}

output "ami_used" {
    value = data.aws_ami.ubuntu_latest.id
}