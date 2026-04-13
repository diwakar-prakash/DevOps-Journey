output "instance_id" {
    value = aws_instance.my_server_2.id
}

output "public_ip" {
    value = aws_instance.my_server_2.public_ip
}
