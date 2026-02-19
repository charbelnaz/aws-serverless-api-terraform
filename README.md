# Serverless Hello API (Terraform)

This project deploys a minimal serverless API on AWS using:

- API Gateway (HTTP API)
- AWS Lambda (Node.js runtime)
- Terraform (Infrastructure as Code)

## Architecture

Client → API Gateway → Lambda → JSON response

## Endpoint

GET /hello

## Deploy

terraform init
terraform apply

## Test

API_URL=$(terraform output -raw api_base_url)
curl -i "$API_URL/hello"

Expected response:
HTTP 200 with JSON hello message.

## Cleanup

terraform destroy

## Example
After `terraform apply`:

```bash
API_URL=$(terraform output -raw api_base_url)
curl -i "$API_URL/hello"

