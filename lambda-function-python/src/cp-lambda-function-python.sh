#!/bin/bash
zip -r lambda-function-python.zip .
aws s3 cp lambda-function-python.zip s3://wangrob-lambda-function-python

