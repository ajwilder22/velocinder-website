const http=require('node:http');const fs=require('node:fs');const path=require('node:path');
const root=path.join(__dirname,'dist');if(!fs.existsSync(root))throw Error('Run npm run build first.');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.txt':'text/plain; charset=utf-8','.exe':'application/octet-stream','.zip':'application/zip'};
http.createServer((req,res)=>{let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);return res.end('Invalid URL');}
 if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);return res.end();}
 let relative=pathname==='/'?'index.html':pathname.slice(1);if(!path.extname(relative))relative+='.html';const file=path.resolve(root,relative);
 if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
 fs.stat(file,(err,stat)=>{if(err||!stat.isFile()){res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});return fs.createReadStream(path.join(root,'404.html')).pipe(res);}
 const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream','Content-Length':stat.size,'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'"};
 if(pathname.startsWith('/downloads/'))headers['Content-Disposition']=`attachment; filename="${path.basename(file)}"`;
 res.writeHead(200,headers);if(req.method==='HEAD')return res.end();const stream=fs.createReadStream(file);stream.on('error',()=>res.destroy());stream.pipe(res);});
}).listen(Number(process.env.PORT)||4173,'127.0.0.1',()=>console.log('Velocinder website: http://127.0.0.1:'+(process.env.PORT||4173)));
