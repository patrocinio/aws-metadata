import got from 'got'

const GET_URL = process.env.ECS_CONTAINER_METADATA_URI_V4;

export class metadata {
  async run () {
    console.log ("Running...");
    console.log ("URL: " + GET_URL)
  
    try {
      const response = await got(GET_URL)
      console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
      console.log("response: ", response)
      return response
    } catch (e) {
      console.log ("Error getting metadata " + e)
    }
  }

  async get (res) {
    const response = await this.run()
    res.send (response)
  }
}
