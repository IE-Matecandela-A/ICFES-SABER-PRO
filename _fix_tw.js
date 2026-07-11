const fs=require('fs');
const path=require('path');
const MAP={
 'slate-350':'slate-300','slate-355':'slate-400','slate-450':'slate-400','slate-550':'slate-500',
 'slate-650':'slate-600','slate-655':'slate-700','slate-750':'slate-700','slate-850':'slate-800','slate-855':'slate-900',
 'sky-350':'sky-300','sky-650':'sky-600','sky-655':'sky-700','sky-850':'sky-800',
 'emerald-450':'emerald-400','rose-450':'rose-400','amber-450':'amber-400',
 'scale-98':'scale-95','scale-101':'scale-105','scale-102':'scale-105',
 'duration-350':'duration-300','duration-355':'duration-300'
};
function listFiles(dir){let out=[];for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())out=out.concat(listFiles(p));else if(e.name.endsWith('.js'))out.push(p);}return out;}
const files=['index.html',...listFiles('js')];
let total=0;
for(const f of files){
  let s=fs.readFileSync(f,'utf8');let before=s;let n=0;
  for(const [k,v] of Object.entries(MAP)){
    const re=new RegExp(k.replace(/[-]/g,'\\-'),'g');
    s=s.replace(re,()=>{n++;return v;});
  }
  if(s!==before){fs.writeFileSync(f,s);console.log(n+'\t'+f);total+=n;}
}
console.log('TOTAL reemplazos:',total);
