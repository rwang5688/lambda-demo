const index = require('./index');

test('has size 5', () => {
    const result = index.getList();
    expect(result.size).toBe(5);
});

test('handler responds correctly', async () => {
    const response = await index.handler();
    expect(response.body).toBe("{\"Greeting\":\"Hello World!!! from NodeJS handler, version: 2021-06-20.\",\"result\":[1,2,3,4,5]}");
});

