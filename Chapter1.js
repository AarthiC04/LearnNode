var http=require('http'); 
 var server = http.createServer(function(req,res){ 
 res.writeHead(200,{'Content-Type':'text/html'}); 
 res.write("<h1>Welcome to Node.js</h1>"); 
 res.write("<h2>Features - Event driven,non-blocking,single threaded</h2>"); 
 res.write("<h2>Node JS is a Runtime Enironment</h2>"); 
 res.end(); 
 }); 
 server.listen(8181,function(){ 
     console.log('server started at 8181'); 
 })