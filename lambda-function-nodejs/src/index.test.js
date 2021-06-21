const index = require('./index');

test('has size 5', () => {
    const result = index.getList();
    expect(result.size).toBe(5);
});

test('handler responds correctly', async () => {
    const response = await index.handler();
    expect(response.body).toBe(expect.anything());
});

