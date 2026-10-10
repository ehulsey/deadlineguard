import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]==='/'?'/index.html':req.url.split('?')[0]));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found');}res.setHeader('Content-Type',({'html':'text/html','css':'text/css','js':'text/javascript'})[file.split('.').pop()]||'text/plain');res.end(data);});}).listen(4173,'127.0.0.1',()=>console.log('DeadlineGuard: http://127.0.0.1:4173'));
