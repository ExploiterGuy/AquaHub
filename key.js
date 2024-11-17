// netlify/functions/key.js
exports.handler = async function(event, context) {
  if (event.httpMethod === "POST") {
    const requestBody = JSON.parse(event.body);
    const key = requestBody.key;  // Get the key from the POST request

    // You can add logic to store/retrieve the key here (e.g., using a database)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Key updated successfully", key: key })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Key Function" })
  };
};
