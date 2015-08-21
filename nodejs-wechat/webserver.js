/*parse http request
http://localhost:8008/?answer=4&b=2&c=3
*/
var http=require ('http');
var fs=require('fs');
var url=require('url');

var HELLO=1;
var RAW=2;
var FILE=3;

var answer=4;



var server = http.createServer(function(request, response){
		//console.log(request);
		var urlObj = url.parse(request.url);
		var q=urlObj.query;
		
		
		console.log(q);
		if (q != null && q.length >=1){
			var argArray=q.split('&');
			for (var i=0; i<argArray.length; i++){
				console.log('parsing'+argArray[i]);
				var nvPair=argArray[i].split('=');
				console.log("NV Pair"+ nvPair);
				if (nvPair[0]=='answer'){
					answer=parseInt(nvPair[1])
				}
				break;
				
			}
		}
			
		switch (answer){
			case FILE:
				var buf=fs.readFileSync('./hello.html',"utf-8");
				//console.log(buf);
				response.end(buf);
				break;
				
			case RAW:
				response.end('<html><body><h2>Hi, Buddy </h2></body></html>');
				break;
			case HELLO:
				response.end('Hello,World');
				break;
				
			default:
				response.writeHead(404);
				response.end('Try Again Please, No target');
		}
});

server.listen(7777);