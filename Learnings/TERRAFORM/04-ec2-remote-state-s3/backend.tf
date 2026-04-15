terraform {
    backend "s3" {
        bucket = "diwakar-terraform-state-1092"
        key    = "project1/terraform.tfstate"
        region = "us-east-1"
    }
}
