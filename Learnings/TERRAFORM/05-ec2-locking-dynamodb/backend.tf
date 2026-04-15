terraform {
  backend "s3" {
    bucket         = "diwakar-terraform-state-1092"
    key            = "project2/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock-table"
  }
}
