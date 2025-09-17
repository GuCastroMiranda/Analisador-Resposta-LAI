import express = require('express');
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Initialize Gemini AI Client
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable not set.');
}
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('API is running!');
});

app.post('/api/analyze', async (req: express.Request, res: express.Response) => {
  const { pedido, resposta } = req.body;

  if (!pedido || !resposta) {
    return res.status(400).send({ message: 'Missing "pedido" or "resposta" in request body' });
  }

  try {
    const formularioBasePath = path.resolve(__dirname, '../../../docs/formulario_base.txt');
    const formularioBase = fs.readFileSync(formularioBasePath, 'utf-8');

    const prompt = `
      Você é um analista da Lei de Acesso à Informação (LAI) no Ministério da Educação (MEC). Sua tarefa é analisar o Pedido e a Resposta transcritos abaixo e preencher o formulário de decisão conforme os critérios definidos.

      Formulário Base:
      ---
      ${formularioBase}
      ---
      Pedido:
      ---
      ${pedido}
      ---
      Resposta:
      ---
      ${resposta}
      ---
    `;

    const result = await model.generateContent(prompt);
    const analysis = await result.response.text();
    
    res.send({ analysis });

  } catch (error) {
    console.error('Error during AI analysis:', error);
    res.status(500).send({ message: 'Internal Server Error: Failed to analyze content.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
