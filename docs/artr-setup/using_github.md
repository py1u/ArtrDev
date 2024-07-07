---
sidebar_label: 'Git and Github'
sidebar_position: 3
id: github
---

We use Github to monitor and track changes in our development. Here you can see our code base and entire development for Artr.
Below is a also quick guide on Git commands and how to perform common github actions as a developer. 

A table of contents has been added!

---

# How to Github

## Table of Contents
1. [Introduction](#introduction)
2. [GitHub Setup](#github-setup)
   - [Installing Git](#installing-git)
   - [Configuring Git](#configuring-git)
3. [Repository Management](#repository-management)
   - [Creating a Repository](#creating-a-repository)
   - [Cloning a Repository](#cloning-a-repository)
4. [Basic Git Commands](#basic-git-commands)
   - [Adding Changes](#adding-changes)
   - [Committing Changes](#committing-changes)
   - [Pushing Changes](#pushing-changes)
   - [Pulling Changes](#pulling-changes)
5. [Branch Management](#branch-management)
   - [Creating a Branch](#creating-a-branch)
   - [Switching Branches](#switching-branches)
   - [Merging Branches](#merging-branches)
   - [Deleting a Branch](#deleting-a-branch)
6. [Advanced Commands](#advanced-commands)
   - [Stashing Changes](#stashing-changes)
   - [Viewing History](#viewing-history)
   - [Reverting Changes](#reverting-changes)
   - [Resetting Commits](#resetting-commits)
7. [Collaboration Commands](#collaboration-commands)
   - [Forking a Repository](#forking-a-repository)
   - [Creating a Pull Request](#creating-a-pull-request)
   - [Reviewing a Pull Request](#reviewing-a-pull-request)
   - [Merging a Pull Request](#merging-a-pull-request)
8. [Resources](#resources)

## Introduction

#### What is Github
GitHub is a web-based platform that uses Git for version control. It allows our developers to work on projects simultaneously. This documentation provides a comprehensive guide to using GitHub commands.

Currently we have three Repos:

1. Artr: The main platform we are developing 
2. ArtrDev: The documentation and tracking platform for developers
3. ArtrSpaceAI: The AI agent for Artr's fraud detection system


#### What is our Github

Here is the direct link to Artr: https://github.com/ArtrSpace/Artr
## GitHub Setup

### Installing Git
To install Git, follow the instructions on the [official Git website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

For link to windows: https://git-scm.com/download/win

Here you should download the 64 bit version for windows. 

Check if git is installed: 

```
git -v
```

### Configuring Git
After installing Git, configure it with your name and email address:

```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Check if the email you are using for git configuration is the same as your github account email because it does affect how git and github perform authentication checks. 

```
git config --list
```

## Repository Management

Learning to manage repositories and begin development is important for getting online for development. The following chapter will 
show some common steps to working with repositories with git commands. 

### Creating a Repository
To create a new repository on GitHub:

1. Go to [GitHub](https://github.com) and log in.
2. Click on the `+` icon in the top right corner and select `New repository`.
3. Fill in the repository name, description, and choose the visibility.
4. Click `Create repository`.

### Cloning a Repository
To clone a repository to your local machine:

```sh
git clone https://github.com/username/repository-name.git
```

## Basic Git Commands

### Adding Changes
To add changes to the staging area:

```sh
git add .
```

To add a single file change to staging area:
```sh
git add filename
```

To unstage a file or files:
```
git restore --staged .
```

### Committing Changes
To commit changes with a message:

```sh
git commit -m "Your commit message"
```

### Pushing Changes
To push changes to the remote repository:

```sh
git push origin branch-name
```

### Pulling Changes
To pull changes from the remote repository:

```sh
git pull origin branch-name
```

## Branch Management

It is very important that you never push changes to the main branch. Always create your own branch. Good practice is to name your branch in this format: name/feature or type of development. Ex: peter/homepage this branch focuses on developing the homepage. For starters, 1 frontend and 1 backend development branch is good.

### Creating a Branch
To create a new branch:

```sh
git branch branch-name
```

### Switching Branches
To switch to a different branch:

```sh
git checkout branch-name
```

### Merging Branches
To merge a branch into the current branch:

```sh
git merge branch-name
```

### Deleting a Branch
To delete a branch locally:

```sh
git branch -d branch-name
```

To delete a branch remotely:

```sh
git push origin --delete branch-name
```

## Advanced Commands

### Stashing Changes

This is meant to stash a dirty working directory and go back to a clean directory usually the HEAD commit. 
To stash changes:

```sh
git stash
```

To apply stashed changes:

```sh
git stash apply
```

### Viewing History
To view commit history:

```sh
git log
```

### Reverting Changes
To revert a commit by creating a new commit:

```sh
git revert commit-id
```

### Resetting Commits
To reset to a specific commit:

```sh
git reset --hard commit-id
```

## Collaboration Commands

### Forking a Repository
To fork a repository, navigate to the repository on GitHub and click the `Fork` button in the top right corner.

### Creating a Pull Request
To create a pull request:

1. Push your changes to your forked repository.
2. Navigate to the original repository.
3. Click `New pull request` and follow the instructions.

### Reviewing a Pull Request
To review a pull request:

1. Go to the `Pull requests` tab in the repository.
2. Select the pull request you want to review.
3. Use the `Files changed` tab to review changes and leave comments.

### Merging a Pull Request
To merge a pull request:

1. Go to the `Pull requests` tab in the repository.
2. Select the pull request you want to merge.
3. Click `Merge pull request` and confirm.

## Resources
- [GitHub Docs](https://docs.github.com/en)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

