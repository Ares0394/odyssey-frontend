const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const { OpenAI } = require('openai');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/plan', async (req, res) => {
  const userInput = req.body.message;

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'Tu es un expert en organisation de voyage personnalisé.' },
        { role: 'user', content: userInput }
      ],
      model: 'gpt-3.5-turbo',
    });

    const response = chatCompletion.choices[0].message.content;
    res.json({ response });
  } catch (error) {
    console.error('Erreur OpenAI:', error.response?.data || error.message || error);
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
