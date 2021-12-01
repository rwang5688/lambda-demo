#!/bin/bash
rm -rf ./dist && mkdir dist
cp -r ./src/* ./dist
cp package.json package-lock.json ./dist
rm ./dist/*.test.js
cd ./dist
npm install --only-prod
zip -r lambda-function-nodejs.zip .
aws s3 cp lambda-function-nodejs.zip s3://wangrob-lambda-function-nodejs
cd ..

cd templates
./update-lambda-function-nodejs.sh

cd ..

