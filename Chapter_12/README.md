Dynamic UI using EJS

12.1 Need for Dynamic UI

* Personalized Content : Tailors responses based on user profiles, preferences, or behaviors to enhance user experience.
* Dynamic Data Delivery: Provides real-time information that updates with each request, such as live scores or stock prices.
* Security and Access Control: Delivers different content based on user authentication and authorization levels.
* Localization and Internationalization: Adjusts responses to accomodate different languages, cultures, or regional settings.
* API Versatility : Supports multiple client types (web, mobile, IoT) by porviding appropriate data formats and structures.

12.2 Sharing using Global Varaible


We are trying to show homes that Host submit to our HomePage.

In hostRouter.js:

```javascript
const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) =>{
    console.log(`Home Registration successful for`,req.body, req.body.houseName);
    registeredHomes.push({houseName: req.body.houseName});
    res.sendFile(path.join(rootdir, 'views', 'registered.html'));

})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
```

which is used ny our home page using userRouter.js
```javascript
const {registeredHomes} = require('./hostRouter');

userRouter.get("/", (req, res, next) => {
    console.log('Hose name is:', registeredHomes);
    res.sendFile(path.join(rootdir, 'views', 'home.html'));
})
```

12.3 What is EJS (Embedded JavaScript)

* HTML with JS: EJS let's you embed JavaScript code within HTML.
* Simple Syntax: Uses `<% %>` for control flow and `<%= %>` for output.
* Easy to Learn: Familiar to those who know HTML and JavaScript.
* Template Reuse: Supports partials for reusing code snippets.
* Flexible Logic: Allows full JavaScript expressions in templates. 

12.4 Installing EJS

Install EJS dependencies:

`npm install --save ejs`



12.5 Using EJS Templates

12.6 Working with Partials