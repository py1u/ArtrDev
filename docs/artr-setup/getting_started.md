---
sidebar_label: 'Getting Started'
sidebar_position: 2
id: start
---

# Getting Set Up For Development

Lets set up our technology stack. We build Artr from scratch!

Published: 5/21/24

Updated: 5/28/24

<!-- ## 1. Set Up A Project Directory
Create a new directory for your project and navigate into it. You can name the folder whatever you like so long as you can recognize it. I suggest "artr-name-dev" and replace 'name' with your first name'

```bash
mkdir artr-name-dev
cd artr-name-dev
```

## 2. Initialize Node.js 
Initialize a new Node.js project by running:

```
npm init -y
```

## 3. Setting up Express
```
npm install express body-parser cors firebase-admin
```

## 4. Create a Server Directory
```
mkdir server
cd server
touch index.js
```

add this to the index.js file:
```
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-service-account-file.json');

const app = express();
const port = process.env.PORT || 5000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com"
});

const db = admin.firestore();

app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const snapshot = await db.collection('your-collection').get();
  const data = snapshot.docs.map(doc => doc.data());
  res.send(data);
});

// Define other routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

``` -->

This guide will walk you through the process of setting up a powerful stack for developing full-stack web applications. This includes using a document-based database, a server-side framework, a popular front-end library, and a runtime environment for executing JavaScript on the server.

## Prerequisites

Before you start, ensure you have the following installed:
- Node.js and npm (Node package manager)
- Git (optional, for cloning repositories)

## Step 1: Setting Up the Backend

### Install MongoDB
1. Download MongoDB from [MongoDB official site](https://www.mongodb.com/try/download/community).
2. Follow the installation instructions for your operating system.

### Set Up Express and Node.js
1. Create a new directory for your project and navigate into it:
   ```bash
   mkdir myproject
   cd myproject
   ```
2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
3. Install Express and other necessary packages:
   ```bash
   npm install express mongoose body-parser cors dotenv
   ```
4. Create a file named `server.js`:
   ```bash
   touch server.js
   ```
5. Open `server.js` and set up a basic Express server:
   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   const cors = require('cors');

   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 5000;

   // Middleware
   app.use(cors());
   app.use(bodyParser.json());

   // MongoDB connection
   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
   const connection = mongoose.connection;
   connection.once('open', () => {
       console.log("MongoDB database connection established successfully");
   })

   app.listen(PORT, () => {
       console.log(`Server is running on port: ${PORT}`);
   });
   ```

## Step 2: Setting Up the Frontend

### Install React
1. Navigate back to the root of your project directory:
   ```bash
   cd ..
   ```
2. Create a React application:
   ```bash
   npx create-react-app client
   ```
3. Move into the client directory and start the development server to test:
   ```bash
   cd client
   npm start
   ```

## Step 3: Integrating the Frontend with Backend
1. In your React application (inside the `client` directory), install Axios for making API calls:
   ```bash
   npm install axios
   ```
2. Use Axios in your components to connect to the Express backend.

## Step 4: Environment Configuration
1. In the root of your backend project, create a `.env` file to store environment variables such as your database URL:
   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/mydatabase
   PORT=5000
   ```

## Conclusion

You now have a basic setup for a full-stack web application using Node.js, Express, MongoDB, and React. This setup is ideal for building Artr!