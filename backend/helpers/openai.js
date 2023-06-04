const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

async function createAIImage(prompt) {
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt,
    n: 1,
    size: "256x256"
  });
  const url = response.data.data[0].url;
  console.log(`Created image for prompt: ${prompt}, url: ${url}`);
  return url;
}

module.exports = {
  createAIImage,
}