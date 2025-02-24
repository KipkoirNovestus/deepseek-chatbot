# **DeepSeek Chatbot Integration**

This project integrates a chatbot using the **DeepSeek AI API**. It includes a backend server built with Node.js and Express, and a frontend interface built with HTML, CSS, and JavaScript.

---

## **Table of Contents**

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Setup Instructions](#setup-instructions)
4. [Running the Project](#running-the-project)
5. [Testing with Postman](#testing-with-postman)
6. [Troubleshooting](#troubleshooting)
7. [Folder Structure](#folder-structure)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Features**

- **Backend**: Handles API requests to DeepSeek AI and serves the frontend.
- **Frontend**: Simple chat interface to interact with the chatbot.
- **DeepSeek AI Integration**: Sends user messages to DeepSeek AI and displays the chatbot's response.

---

## **Prerequisites**

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A valid **DeepSeek API key** (replace `API_KEY` in `server.js`)

---

## **Setup Instructions**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/deepseek-chatbot.git
   cd deepseek-chatbot
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Add Your DeepSeek API Key**:
   - Open `server.js` and replace `API_KEY` with your actual DeepSeek API key:
     ```javascript
     const API_KEY = "your_api_key_here";
     ```

---

## **Running the Project**

1. **Start the Backend Server**:

   ```bash
   node server.js
   ```

   - The server will start on `http://localhost:3000`.

2. **Open the Frontend**:

   - Open your browser and go to `http://localhost:3000`.
   - You should see the chat interface.

3. **Interact with the Chatbot**:
   - Type a message in the input box and click **Send**.
   - The chatbot's response will appear in the chat window.

---

## **Testing with Postman**

1. **Install Postman**: Download and install [Postman](https://www.postman.com/downloads/).

2. **Create a New Request**:

   - Set the request type to `POST`.
   - Enter the URL: `http://localhost:3000/get-chatbot-response`.

3. **Set Headers**:

   - Add a header with:
     - **Key**: `Content-Type`
     - **Value**: `application/json`

4. **Add Request Body**:

   - Select **raw** and **JSON**.
   - Add the following JSON payload:
     ```json
     {
       "message": "Hello, how are you?"
     }
     ```

5. **Send the Request**:
   - Click **Send**.
   - You should receive a response from the chatbot.

---

## **Troubleshooting**

### **1. Chatbot Response is `undefined`**

- **Cause**: The backend is not receiving or processing the response correctly.
- **Solution**:
  1. Check the backend logs for errors.
  2. Ensure the DeepSeek API key is correct.
  3. Verify the DeepSeek API URL and response structure in `server.js`.

### **2. Frontend Not Loading**

- **Cause**: The backend server is not running or the static files are not being served.
- **Solution**:
  1. Ensure the server is running:
     ```bash
     node server.js
     ```
  2. Check the browser console for errors (F12 → Console).

### **3. CORS Errors**

- **Cause**: The frontend and backend are running on different ports.
- **Solution**:
  1. Install the `cors` package:
     ```bash
     npm install cors
     ```
  2. Enable CORS in `server.js`:
     ```javascript
     const cors = require("cors");
     app.use(cors());
     ```

---

## **Folder Structure**

```
deepseek-chatbot/
├── node_modules/          # Node.js dependencies
├── index.html             # Frontend HTML file
├── server.js              # Backend server script
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Lock file for dependencies
└── README.md              # Project documentation
```

---

## **Contributing**

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Support**

If you have any questions or need further assistance, please open an issue on GitHub or contact the maintainer.

---

This README file provides all the necessary information to set up, run, and troubleshoot the project. Push it to your GitHub repository, and anyone cloning the repo will be able to follow these instructions easily! 🚀
