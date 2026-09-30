const fs=require('node:fs');const path=require('node:path');
const root=__dirname;const source=path.join(root,'public');const output=path.join(root,'dist');
fs.mkdirSync(output,{recursive:true});fs.cpSync(source,output,{recursive:true});
const manifest=JSON.parse(fs.readFileSync(path.join(source,'release.json'),'utf8'));
const base=process.env.RELEASE_BASE_URL?.replace(/\/$/,'');
if(base){const url=new URL(base);if(url.protocol!=='https:'||url.username||url.password||url.search||url.hash)throw Error('RELEASE_BASE_URL must be a plain public HTTPS release folder URL.');}
for(const file of Object.values(manifest.files)){
 if(base)file.url=base+'/'+encodeURIComponent(file.filename);
 else if(!fs.existsSync(path.join(source,'downloads',file.filename)))throw Error(`Missing ${file.filename}. Add local downloads or set RELEASE_BASE_URL to the published release folder.`);
}
if(base&&process.env.RENDER){for(const file of Object.values(manifest.files)){const local=path.join(output,'downloads',file.filename);if(fs.existsSync(local))fs.unlinkSync(local);}}
fs.writeFileSync(path.join(output,'release.json'),JSON.stringify(manifest,null,2));
console.log('Built Velocinder website. Download source: '+(base||'bundled local release files'));
