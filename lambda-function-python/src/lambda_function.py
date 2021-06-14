import os
import json
        
def lambda_handler(event, context):
    region = os.environ['AWS_REGION']

    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "Greeting": "Hello World from Python Lambda Function version: 2021-06-13!!!",
            "Region": region,
            "Version": "0.1"
        })
    }
    
    print("log entry: response=%s" % (response))

    return response

