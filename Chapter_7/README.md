NPM & Tools

7.1 Install Material Icons
In Extensions Search for Material Icon Theme.

7.2 npm

NPM stands for Node Package Manager. It is the default package manager that comes installed with Node.js. NPM is used to install, manage, and share packages or libraries in Node.js projects.

Packages are reusable pieces of code created by developers to perform specific tasks like routing, database handling, authentication, and more.

```bash
npm init
```

npm init is a command used to initialize a new Node.js project. It creates a package.json file, which stores the project's metadata and dependency information.

7.3 npm Scripts

NPM scripts are commands stored inside the scripts section of the package.json file. They help automate common tasks and allow developers to run commands using simple names instead of typing long terminal commands repeatedly.

start is a special npm script. If a start script exists in package.json, it can be executed using:

`npm start`
Developers can also create their own scripts by adding new entries inside the scripts object.

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "chalu_ho" : "node app.js",
    "greet" : "echo Hello"
  }
```
These scripts are executed using npm run.
```bash
Simran@Jasmine MINGW64 /d/Project/practice_Node.js/Chapter_7 (main)
$ npm run greet

> npm_test@1.0.0 greet
> echo Hello

Hello

Simran@Jasmine MINGW64 /d/Project/practice_Node.js/Chapter_7 (main)
$ npm run chalu_ho

> npm_test@1.0.0 chalu_ho
> node app.js

Server listening at http://localhost:3000
```



7.4 npm Packages

Packages save development time by providing ready-made solutions for common tasks. Instead of writing complex code yourself, you can install a package and use its functionality directly in your project.

1. npm: Node.js package manager for code sharing.
2. Package: Reusable code or library
3. package.json: Defines package metadata and dependencies.
4. Versioning:Manages different package versions.
5. Local/Global: Install packages locally or globally.
6. Registry: Public storage for open-source packages.
7. Examples: Express, React, Lodash.

7.5 Installing Packages

```bash
npm install <package-name>
```
1. -save: Adds the package to the project's dependencies in package.json
2. -save-dev: Adds the package to the project's devDependencies (used only in devlopment) in package.json.
3. -g: Installs the package globally, making it available system-wide, not just in a specific project.
4. -save-exact: Installs the exact version specified without updating for newer versions.
5. -force: Force npm to fetch and install packages even if they are already installed.

7.6 Installing nodemon

During development, code changes are frequent. Normally, after editing a file, the application must be restarted using node app.js. Nodemon watches project files and automatically restarts the application whenever a change is detected.

`npm install -g nodemon`

After installation, the nodemon command becomes available from any terminal location on the system, as it is installed globally.

`npm install nodemon --save-dev`

The --save-dev flag adds nodemon to the devDependencies section of package.json because it is only needed during development.


7.7 Using nodemon

A common practice is to create a script in package.json:

```javascript
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

The application can then be started with:

`npm run dev`

This launches nodemon and enables automatic restarts whenever the code changes.

