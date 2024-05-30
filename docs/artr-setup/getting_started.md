---
sidebar_label: 'Getting Started'
sidebar_position: 2
id: start
---

# Getting Set Up For Development

Lets set up our technology stack. We build Artr from scratch!

```markdown
Published: 5/21/24
Updated: 5/28/24

## 1. Set Up A Project Directory
Create a new directory for your project and navigate into it. You can name the folder whatever you like so long as you can recognize it. I suggest "artr-name-dev" and replace 'name' with your first name'

```bash
mkdir artr-name-dev
cd artr-name-dev
```

This guide provides instructions for setting up the 4 basic components of the tech stack: MongoDB, Express.js, React, and Node.js.

## Step 1: Install Node.js and npm

Node.js is the runtime for the server-side application, and npm is the Node package manager.

### Installation:

1. **Download Node.js:**
   - Visit [Node.js website](https://nodejs.org/) and download the LTS version suitable for your OS.

2. **Install Node.js:**
   - Run the downloaded installer and follow the installation prompts.

3. **Verify Installation:**
   - Open a terminal or command prompt and check versions:
     ```bash
     node --version
     npm --version
     ```

## Step 2: Set Up MongoDB

You can install MongoDB locally or use MongoDB Atlas for a cloud-hosted solution.

### Local Installation:

1. **Download MongoDB:**
   - Go to [MongoDB Download Center](https://www.mongodb.com/try/download/community) and choose the version for your OS.

2. **Install MongoDB:**
   - Follow the MongoDB installation guide for your specific operating system.

3. **Start MongoDB:**
   - Typically, start MongoDB using `mongod` in the terminal.

### Using MongoDB Atlas:

1. **Create an Account and Setup:**
   - Register or log in at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2. **Create a Cluster:**
   - Follow the setup wizard to create a new cluster.

3. **Security Configuration:**
   - Configure network access and create database users.

4. **Connect to the Cluster:**
   - Use the provided connection string to connect your app to MongoDB Atlas.

## Step 3: Set Up Express.js and Node.js API

Express.js is used for routing and middleware functionality.

### Basic Express Setup:

1. **Create a Project Directory:**
   ```bash
   mkdir myproject
   cd myproject
   ```

2. **Initialize a Node.js Project:**
   ```bash
   npm init -y
   ```

3. **Install Express.js:**
   ```bash
   npm install express
   ```

4. **Create a Server File:**
   - Make a new file named `server.js` with the following content:
     ```javascript
     const express = require('express');
     const app = express();
     
     app.get('/', (req, res) => {
       res.send('Hello World!');
     });
     
     const PORT = process.env.PORT || 3000;
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
     ```

## Step 4: Set Up React

React will be used for the frontend of your application.

1. **Create a React App:**
   - Use Create React App to set up a new React project:
     ```bash
     npx create-react-app my-react-app
     cd my-react-app
     npm start
     ```

   - This sets up a new React project and starts the development server.

## Conclusion

You now have a basic setup for a full-stack web application using Node.js, Express, MongoDB, and React. This setup is ideal for building Artr!