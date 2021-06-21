const {List} = require('immutable');

function getList() {
    const list1 = List([1, 2]);
    const result =  list1.push(3, 4, 5);

    console.log("result = ", result);
    return result;
};

exports.getList = getList;

exports.handler = async(event) => {
    console.log("event = ", event);

    // simulate workload
    const result = getList();

    console.log("ERROR: Simulate error in NodeJS handler.")
    
    const response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "Greeting": "Hello World!!! from NodeJS handler, version: 2021-06-20.",
            "result": result,
            "Version": "0.1"
        })
    };

    console.log("response = ", response);
    return response;
};

