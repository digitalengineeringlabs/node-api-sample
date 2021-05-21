const http = require('http');

//create a server object:
http.createServer(function (req, res) {
    console.log(req.method)
    console.log(req.url)
    if(req.method === 'GET') {
        if(req.url === '/books') {
            //call books.add
            //return results
            res.write('Great Warrior'); 
            res.end(); 
            return
        }
    }
  res.write('Hello World!'); 
  res.end(); 
}).listen(5000); 