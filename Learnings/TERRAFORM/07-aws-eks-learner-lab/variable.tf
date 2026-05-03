variable "region" {
    default = "us-east-1"
}

variable "cluster_name" {
    default = "diwakar-eks"
}

variable "node_instance_type" {
    default = "t3.large"
}

variable "desired_size" {
    default = 2
}

variable "max_size" {
    default = 2
}

variable "min_size" {
    default = 1
}

variable "lab_role_arn" {
    description = "LabRole ARN from AWS Learner Lab"
}
