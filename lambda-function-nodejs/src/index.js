const {List} = require('immutable');

function getList() {
    const list1 = List([1, 2]);
    const list2 =  list1.push(3, 4, 5);

    console.log("list2 = ", list2);
    return list2;
};

exports.getList = getList;

exports.handler = async(event) => {
    console.log('event = ', event);

    const result = getList();
    
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "result": result
        }),
    };

    console.log("response = ", response);
    return response;
};
