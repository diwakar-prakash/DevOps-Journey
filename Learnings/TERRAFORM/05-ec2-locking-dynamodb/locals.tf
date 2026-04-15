locals {
  server_name = "${var.environment}-locking-server"

  common_tags = {
    Environment = var.environment
    Owner       = "Diwakar"
  }
}

