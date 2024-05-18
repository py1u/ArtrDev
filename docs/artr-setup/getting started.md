---
sidebar_label: 'Getting Started'
sidebar_position: 4
id: start
---

# Getting Set Up For Development
This will show you how to set up our technology stack from scratch.

Here is a list of prerequisites that should be installed:

Every technology mentioned, I will add a note explaining it.

1. **Node.js and npm**:
   - **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side.
   - **npm (Node Package Manager)**: Comes with Node.js and is essential for managing packages required for the MERN stack.
   - Installation: You can download Node.js from the [official Node.js website](https://nodejs.org/). The npm is installed automatically with Node.js.

2. **MongoDB**:
   - A NoSQL database that stores data in JSON-like documents.
   - Installation: You can download MongoDB from the [MongoDB official website](https://www.mongodb.com/try/download/community) or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

3. **MongoDB Shell (Optional but recommended)**:
   - A command-line tool to interact with your MongoDB database.
   - Installation: It can be downloaded from the [MongoDB Shell official page](https://www.mongodb.com/try/download/shell).

4. **Code Editor**:
   - A good code editor is essential for development. Some popular choices include:
     - [Visual Studio Code](https://code.visualstudio.com/): A free, open-source code editor from Microsoft.
     - [Atom](https://atom.io/): A free, open-source code editor from GitHub.
     - [Sublime Text](https://www.sublimetext.com/): A proprietary code editor with a free evaluation version.

5. **Git**:
   - A version control system to track changes in your code.
   - Installation: You can download Git from the [official Git website](https://git-scm.com/).

6. **Node Version Manager (nvm) (Optional but recommended)**:
   - Allows you to manage multiple versions of Node.js on the same machine.
   - Installation: Instructions are available on the [nvm GitHub repository](https://github.com/nvm-sh/nvm).

7. **Create React App**:
   - A tool to set up a new React project with a sensible default configuration.
   - Installation: It is installed via npm. You can install it globally using the command:
     ```sh
     npm install -g create-react-app
     ```

Once these technologies are installed, you can start setting up your MERN stack application:

1. **Set up the Backend**:
   - Initialize a new Node.js project and install Express.js.
     ```sh
     mkdir backend
     cd backend
     npm init -y
     npm install express mongoose
     ```
   - Create server files and set up Express server and MongoDB connection.

2. **Set up the Frontend**:
   - Create a new React application.
     ```sh
     npx create-react-app frontend
     ```
   - Develop your React components.

3. **Connecting Frontend and Backend**:
   - Set up API routes in Express to serve data to the React frontend.
   - Use Axios or Fetch API in React to make HTTP requests to your backend.

Following these steps ensures you have all necessary technologies installed and properly configured to develop and deploy a MERN stack application.