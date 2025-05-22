variable "region" {
  default = "us-east-1"
}
variable "public_key" {
  description = "Public key for SSH access"
  type        = string
}
variable "private_key" {
  description = "Private"
}
variable "key_name" {
  description = "Name of the key pair"
  type        = string  
}