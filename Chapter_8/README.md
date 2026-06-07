Errors and Debugging

8.1 Types of Errors

1. Syntax Error: An error in the code's structure, causing it to not compile or run (e.g., missing semicolon).
2. Logical Error: The code runs but produces incorrect results due to faulty logic (e.g., wrong formula).
3. Runtime Error: An error that occurs while the program is running, often due to invalid operations.

8.2 Syntax Errors

```javascript
    // Missing parenthesis in function call
    console.log("I am inside testing syntax"

    // Unclosed string literal
    let message = "Welcome to Node.js;

    // Improper use of reserved keywords
    let new = 5;
    
    // Incorrect variable declaration (const needs an initial value)
    const myVar;
```

8.3 Runtime Errors

```javascript
    // Reference Error (x is not defined)
    console.log(x);

    // Type error (num is not a function)
    let num = 10;
    num();

    // Invalid Json parse (Syntax Error)
    let jsonString = {name : 'john'} //Invalid JSON (single quotes)
    JSON.parse(jsonString);

    // File not found error (fs module)
    const fs = require('fs');
    fs.readFileSync('nonexistentFile.txt'); //Throws error: ENOENT (file not found)

```

8.4 Logical Errors

```javascript
    let x = 5;
    if (x = 10) { //assignment intead of comparision
        console.log("x is 10") // incorrectly prints this
    }

    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]); //Prints undefined at the end of the loop
    }

    let num = "10";
    console.log(num + 5); //Expected result :15, prints 105
```

8.5 Using the Debugger

click on script u want to debug:

Then:

![image](/images/img19.png)

![image](/images/img20.png)

![image](/images/img21.png)

![image](/images/img22.png)

![image](/images/img23.png)

![image](/images/img24.png)

![image](/images/img25.png)

8.6 Debugger with Async Code

Debugging asynchronous code is slightly different from debugging synchronous code because asynchronous operations do not execute immediately. Instead, they are completed later, often through callbacks, promises, or async/await.

When debugging asynchronous code, remember that the callback or promise handler does not execute immediately. The debugger pauses execution only when that asynchronous task is actually picked up by the Event Loop and starts running.

Also notice that, since the code is run through debugger and not npm or nodemon, user.txt file gets saved to path it's relative path. Or the the path from which the code was run from. In this case it get's save to root folder practice_node.js

8.7 Restart Debug with nodemon 

not the most common method 
but u can add configurations to use nodemon with debugger.

![image](/images/img26.png)