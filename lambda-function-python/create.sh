#!/bin/bash
cd src
./cp-lambda-function-python.sh

cd ../templates
./create-lambda-function-python.sh

cd ..

