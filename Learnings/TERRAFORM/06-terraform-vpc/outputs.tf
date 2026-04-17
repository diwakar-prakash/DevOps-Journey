output "public_instance_ip" {
  value = aws_instance.public_server.public_ip
}

output "private_instance_ip" {
  value = aws_instance.private_server.private_ip
}

output "nat_gateway_id" {
  value = aws_nat_gateway.nat.id
}

output "vpc_id" {
  value = aws_vpc.main_vpc.id
}

