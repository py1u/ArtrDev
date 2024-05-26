---
sidebar_label: 'Getting Started'
sidebar_position: 2
id: start
---

# Getting Set Up For Development

This will show you how to set up our technology stack from scratch.

Here is a list of prerequisites that should be installed:

Every technology mentioned, I will add a note explaining it.


## 1. Set Up A Project Directory
Create a new directory for your project and navigate into it.

```bash
mkdir my-fern-project
cd my-fern-project
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

```