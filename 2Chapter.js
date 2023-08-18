var http = require('http'), 
     fs = require('fs'); 
  
  
 fs.readFile('./Chapter2.html', function (err, html) { 
     if (err) { 
         throw err;  
     }        
     http.createServer(function(request, response) {   
         response.writeHeader(200, {"Content-Type": "text/html"});   
         response.write(html);   
         response.end();   
     }).listen(8080,function(){ 
         console.log('server started'); 
     }); 
 });