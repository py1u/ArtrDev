---
sidebar_position: 2
---

# ArtrDev Build

How build **ArtrDev**.

**NOTE:** This page shows you how you can build a documentation website like ArtrDev, this does not actually run the development environment for contributing to Artr.

ArtrDev is powered by **Docusaurus** a API that handles building most of the website and allows us to focus on writing and reading our Artr documentation.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

## Development for ArtrDev

Artr developers can contribute to ArtrDev.

1. **Clone the repository** `git clone https://github.com/ArtrSpace/ArtrDev.git`
2. run `npm install`

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at `http://localhost:3000/`.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
