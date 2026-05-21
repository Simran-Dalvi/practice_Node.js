const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    if (req.url === "/" || req.url === "/Home"){
        res.setHeader('Content-type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<title>Home - Myntra</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<header>');
        res.write('<nav>');
        res.write('<ul>');
        res.write('<li><a href="/Home">Home</a></li> <br>');
        res.write('<li><a href="/Men">Men</a> </li> <br>');
        res.write('<li><a href="/Women">Women</a> </li> <br>');
        res.write('<li><a href="/Kids">Kids</a> </li> <br>');
        res.write('<li><a href="/Cart">Cart</a></li> <br>');
        res.write('</ul>');
        res.write('</nav>');
        res.write('</header>');
        res.write('<main>');
        res.write('<h1> This is the Home Page</h1>');
        res.write('</main>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === "/Men"){
        res.setHeader('Content-type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<title>Men - Myntra</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<main>');
        res.write("<h1> Welcome to Men's Wear.</h1>");
        res.write('</main>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === "/Women"){
        res.setHeader('Content-type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<title>Women - Myntra</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<main>');
        res.write("<h1> Welcome to Women's Wear.</h1>");
        res.write('</main>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === "/Kids"){
        res.setHeader('Content-type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<title>Kids - Myntra</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<main>');
        res.write("<h1> Welcome to Kids' Wear.</h1>");
        res.write('</main>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === "/Cart"){
        res.setHeader('Content-type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<title>Cart - Myntra</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<main>');
        res.write("<h1> Welcome to your Cart.</h1>");
        res.write('</main>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<title>Myntra</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<main>');
    res.write('<h1> This is a default page bro.</h1>');
    res.write('</main>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
});

const PORT = 2026;

server.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});