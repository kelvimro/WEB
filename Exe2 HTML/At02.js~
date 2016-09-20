	var http = require('http')
		,fs = require('fs'),
		file = fs.readFileSync('contatos.html'),
		fileindex = fs.readFileSync('index.html'); 

	var server = http.createServer(function(req, res){
		res.writeHead(200,{"Content-type": "text/html"});
		if(req.url == "/"){
					res.write(fileindex);			
		}else if(req.url == "/user"){
			res.write(file);
		}
		else{
			res.write("pagina nao encontrada");
		}
		res.end();
		});

	server.listen(3000, function(){
		console.log('Servidor rodando em localhost:3000')
	});