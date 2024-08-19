exports.handler = async (event, context) => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
  
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers,
      };
    }
  
    const response = await fetch('http://www.rileyhoffman.000.pe/server.php');
  
    const data = await response.json();
  
    return {
      statusCode: response.status,
      headers,
      body: JSON.stringify(data),
    };
  };
  