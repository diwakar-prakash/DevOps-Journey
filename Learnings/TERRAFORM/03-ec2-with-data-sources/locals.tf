locals {
    server_name = "${var.environment}-discovery-server"

    common_tags = {
        Environment = var.environment
        Owner = var.owner
    }
}

