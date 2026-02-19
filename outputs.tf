output "region" {
  value = var.aws_region
}

output "api_base_url" {
  value = aws_apigatewayv2_stage.prod.invoke_url
}
