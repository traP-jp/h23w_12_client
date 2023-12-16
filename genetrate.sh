#!/bin/sh

docker run --rm -v "${PWD}:/local" \
  openapitools/openapi-generator-cli:v6.0.0 generate \
  -i /local/openapi.yaml \
  -g typescript-fetch \
  -o /local/src/fetch-apis \
  --additional-properties=supportsES6=true
