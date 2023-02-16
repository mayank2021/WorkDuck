const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

//setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

//chat GPT

app.post("/chat", async (req, res) => {
  const { text } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: text,
  });

  res.send(completion.data.choices[0].text);
});

const port = 8000;
app.listen(port, () => console.log(`App is up and running on port ${port}`));
