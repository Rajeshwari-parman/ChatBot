# ChatBot

Complete, responsive, and interactive AI-based customer service chatbot step-by-step, including:

1. ✅ UI (HTML, CSS, JS)

2. ✅ Responsive Design

3. ✅ Backend using Node.js

4. ✅ AI using OpenAI GPT API

5. ✅ Testing on Localhost

6. ✅ Deploying online


# Prerequisites:

Install Node.js and npm (https://nodejs.org/)

Signup for an OpenAI API key (https://platform.openai.com/account/api-keys)
Make payments 5$

# STEP 1: Build a Responsive Chatbot UI
📁 Folder Structure:
chatbot-project/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json

# STEP 3: Setup package.json
Run these commands in the terminal:

bash
Copy code
npm init -y
npm install express openai dotenv body-parser

# STEP 4: Add .env file (in root)
Copy code
OPENAI_API_KEY=your_openai_api_key_here

 # Step 5: Install dotenv Package
In your project folder (terminal):
npm install dotenv

# Step 6: Install Dependencies
If not already done, install the needed packages:
npm install express openai dotenv cors

3Check your openai version
Run this in your terminal:
npm list openai
It will show which version is installed.

If it's older than 4.x.x, upgrade it.

# Upgrade the OpenAI package
Run this:
npm install openai@latest

You can check your version like this:

npm list openai
You should see:
openai@4.x.x

#Start Server
In terminal:

node server.js
You should see:

arduino
Copy code
✅ Server running at http://localhost:3000

# step7: Open index.html in Your Browser
Now just open your index.html file (you can double click it, or use Live Server if you're in VS Code) and start chatting!

