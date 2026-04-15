output "instance_id" {
  value = aws_instance.locking_server.id
}

output "public_ip" {
  value = aws_instance.locking_server.public_ip
}

output "ami_used" {
  value = data.aws_ami.latest_amazon_linux.id
}

