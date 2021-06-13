#!/bin/bash
aws cloudformation update-stack --stack-name lambda-function-python \
--template-body file://lambda-function-python.yaml \
--capabilities CAPABILITY_NAMED_IAM \
--parameters file://lambda-function-python-parameters.json \
--region us-east-1

