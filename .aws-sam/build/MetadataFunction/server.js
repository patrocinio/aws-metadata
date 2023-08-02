import got from 'got'

const GET_URL = "http://169.254.170.2/v2/metadata"

export async function run (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false

	console.log ("Running...");
	console.log ("URL: " + GET_URL)

  try {
    const response = await got(RESET_URL)
    console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
    console.log("response: ", response)
    return response
  } catch (e) {
    console.log ("Error getting metadata " + e)
  }
}

