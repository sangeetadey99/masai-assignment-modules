# Understanding Project Management in NodeJS
## a. Package Managers
## What is a package manager?
**Answer:-**
A package manager is a tool that helps us install and manage libraries needed in a project. It saves us from writing everything from scratch.
## Why do we need package managers in backend development?
**Answer:-**
They help in:
* Installing required libraries easily
* Managing dependency versions
* Setting up projects faster
* Working smoothly in a team
## Problems faced if package managers are not used
**Answer:-**
* Manual handling of libraries
* Version conflicts
* Difficult project setup
* Hard to share projects with others
## b. NPM (Node Package Manager)
## What is NPM?
**Answer:-**
NPM is the default package manager used with Node.js. It helps in installing and managing packages for Node applications.
## Why is NPM important for Node.js applications?
**Answer:-**
* It provides ready-to-use libraries
* Keeps track of dependencies
* Helps run scripts like starting the server
## How NPM helps in managing dependencies
**Answer:-**
NPM stores dependency details in package.json and installs them inside the node_modules folder.
## c. Backend Project Initialization
## What is the command used to initialize a backend (Node.js) project?
**Answer:-**
npm init
## Explain what npm init and npm init -y do
**Answer:-**
Difference between npm init and npm init -y
* npm init asks questions before creating package.json
* npm init -y creates package.json with default values automatically
## d. Files and Folders Created After Project Initialization
## Explain the purpose and importance of:
## package.json
**Answer:-**
Stores project information, dependencies, and scripts.
## node_modules
**Answer:-**
Contains all installed packages. This folder is auto-generated.
## package-lock.json
**Answer:-**
Locks the exact version of dependencies to avoid mismatch issues.
## Also mention:
## Which files/folders should not be pushed to GitHub and why
**Answer:-**
node_modules (large and can be recreated)
## Which files must be committed and why
**Answer:-**
* package.json
* package-lock.json
* These help others install and run the project correctly.