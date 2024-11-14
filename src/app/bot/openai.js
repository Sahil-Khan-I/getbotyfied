import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { input } = req.body;
  if (!input || !Array.isArray(input)) {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: input,
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const output = response.data.choices?.[0]?.message?.content?.trim();
    if (!output) {
      return res.status(500).json({ error: 'Failed to generate response' });
    }

    res.status(200).json({ output });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
