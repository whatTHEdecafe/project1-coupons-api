exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Coupons API is working successfully"
        })
    };
};