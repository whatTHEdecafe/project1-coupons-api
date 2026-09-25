const { handler } = require('./index');

test('Validate status code', async () => {
    const response = await handler({});
    expect(response.statusCode).toBe(200);
});

test('Validate message output', async () => {
    const response = await handler({});
    const body = JSON.parse(response.body);

    expect(body.message).toBe('Coupons API is working successfully');
});