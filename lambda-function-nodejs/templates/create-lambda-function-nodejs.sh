#!/bin/bash
aws cloudformation create-stack --stack-name lambda-function-nodejs \
--template-body file://lambda-function-nodejs.yaml \
--capabilities CAPABILITY_NAMED_IAM \
--parameters file://lambda-function-nodejs-parameters.json \
--region us-east-1

