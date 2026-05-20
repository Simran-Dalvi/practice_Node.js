Request & Response

4.1 Node Lifecycle and Event Loop

![image](../images/img4.png)

Node.js is a single-threaded, asynchronous runtime environment. It handles multiple client requests efficiently using the Event Loop and a Thread Pool.

Working / Lifecycle of Node.js
1. A client sends requests to the Node.js server.
2. All incoming requests are placed in the Event Queue.
3. The Event Loop continuously checks this queue.
4. The Event Loop takes one request at a time and processes it.
5. If the task is simple, it is executed directly by the main thread.
6. If the task is time-consuming like:

* File System operations
* Database queries
* Network requests
* Cryptographic operations

then Node.js sends it to the Thread Pool managed by libuv.

7. Worker threads in the thread pool complete the task in the background.
8. After completion, a callback function is returned to the Event Loop.
9. The Event Loop executes the callback and sends the response back to the client.

Event Loop

The Event Loop is the core mechanism that allows Node.js to perform non-blocking I/O operations. It continuously monitors:

* Event Queue
* Callback Queue
* Thread Pool results

It ensures that requests are handled efficiently without creating a new thread for every request.

Advantages
* Fast and scalable
* Handles many concurrent requests
* Efficient memory usage
* Suitable for real-time applications like chats and streaming

Conclusion

Thus, Node.js uses the Event Loop and Thread Pool architecture to handle asynchronous operations efficiently even though it is single-threaded. This makes it highly suitable for modern web applications and APIs.

4.2 How to exit Event Loop

```javascript
const htttp = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    process.exit(); // Stop event loop

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})
})
```

4.3 Understand Request Object

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers

```javascript
url: '/',
method: 'GET',
httpVersion: '1.1',
```


```javascript
Symbol(kHeaders): {
  host: 'localhost:3000',
  connection: 'keep-alive',
  'user-agent': 'Mozilla/5.0 ...',
  accept: 'text/html...',
}
```

| Header          | Meaning                               |
| --------------- | ------------------------------------- |
| host            | Which server user requested           |
| user-agent      | Browser details                       |
| accept-language | Preferred language                    |
| cookie          | Stored cookies                        |
| accept          | What response formats browser accepts |

```javascript
const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url, req.method, req.headers);
})

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})
```


4.4 Sending Response


4.5 Routing Requests

4.6 Taking User Input

4.7 Redirecting Requests