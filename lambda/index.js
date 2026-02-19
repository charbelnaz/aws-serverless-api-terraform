exports.handler = async (event) => {
  console.log("Event:", JSON.stringify(event));
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ message: "Hello from serverless-tasks Lambda" }),
  };
};
