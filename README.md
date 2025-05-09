# Vappy Pizza Voice Assistant

A fun, casual voice ordering assistant for a fictional online pizza shop, powered by [Vapi.ai](https://vapi.ai), OpenAI GPT-4, Deepgram, and PlayHT.

## 🧠 Features
- Voice-enabled pizza ordering simulation.
- Witty and casual AI persona.
- Uses GPT-4 with a strict ordering-focused prompt.
- Only allows one item per menu category (Pizza, Side, Drink).

## 📁 Project Structure
```
/vappy-assistant
├── .env                  # Store Vapi key
├── index.js              # Entry point
├── config/
│   ├── assistantConfig.js
│   └── systemPrompt.txt
├── utils/
│   └── loadPrompt.js
└── README.md
```

## 🚀 Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/vappy-assistant.git
   cd vappy-assistant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your VAPI API key to a `.env` file:
   ```env
   VAPI_KEY=your-api-key-here
   ```

4. Run the assistant:
   ```bash
   node index.js
   ```

## 🛠 Tech Stack
- [Vapi.ai](https://vapi.ai)
- [OpenAI GPT-4](https://platform.openai.com/)
- [Deepgram](https://deepgram.com/)
- [PlayHT](https://play.ht/)

## 📜 License
MIT
