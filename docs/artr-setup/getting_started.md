---
sidebar_label: 'Getting Started'
sidebar_position: 2
id: start
---

# Getting Set Up For Development

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

## Step 3: Set Up NextJS
1. **Create a projeect directory to store your work locally**
   ```markdown
   mkdir project-name
   cd project-name
   ```

2. **Git clone the artr repo**
   ```markdown
   git clone https://github.com/ArtrSpace/Artr.git
   ```
- This contains a README.md from the repo. Delete or copy the markdown content since installing NextJs will create a file directory with a README.md

3. **Installing NextJS**
   Have [NodeJS 18.17 or later](https://nodejs.org/) before installing.
   ```markdown
   npx create-next-app@latest
   ```
   The following prompts are asked in terminal
   ```
   What is your project named? my-app
   Would you like to use TypeScript? No / Yes
   Would you like to use ESLint? No / Yes
   Would you like to use Tailwind CSS? No / Yes
   Would you like to use `src/` directory? No / Yes
   Would you like to use App Router? (recommended) No / Yes
   Would you like to customize the default import alias (@/*)? No / Yes
   What import alias would you like configured? @/*
   ```

   NextJS is now set up with React and Tailwind.

4. **Connecting NextJS To MongoDB**
   We have to connect NextJS with a database
