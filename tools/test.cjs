const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const C=require('../core.js');
const context=vm.createContext({});vm.runInContext(fs.readFileSync(path.join(root,'data.js'),'utf8')+';globalThis.words=WORDS',context);const words=context.words;
assert(words.length>=90);assert.equal(new Set(words.map(w=>w.id)).size,words.length);
for(const w of words){assert(w.word&&w.kana&&w.meaning&&w.examples[0].jp&&w.examples[0].zh);}
const s=C.fresh(),card={id:'猫',answered:false};C.stat(s,'猫').favorite=true;
assert(C.answer(s,card,false));assert(!C.answer(s,card,false));assert.equal(s.stats['猫'].unknown,1);
assert(C.wrong(s,card));assert(!C.wrong(s,card));assert.equal(s.stats['猫'].wrong,1);
assert.equal(C.score(s,words[0]),.4);C.stat(s,'猫').searches=2;assert.equal(C.score(s,words[0]),1.4);
assert(C.matches(words[0],'ネコ'));assert(C.matches(words[0],'neko'));assert(C.matches(words[0],'猫'));
assert.equal(C.validate(JSON.parse(JSON.stringify(s))).stats['猫'].unknown,1);
assert.throws(()=>C.validate({version:1,stats:null}));assert.throws(()=>C.validate({version:7,stats:{}}));
const evil=JSON.parse('{"version":1,"stats":{"__proto__":{"searches":3}}}');assert(!({}).searches);const safe=C.validate(evil);assert(!({}).searches); // no global prototype mutation
assert(C.shuffle([1,2,3]).length===3);
for(const f of ['app.js','data.js','core.js','sw.js'])new vm.Script(fs.readFileSync(path.join(root,f),'utf8'),{filename:f});
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));for(const i of manifest.icons)assert(fs.existsSync(path.join(root,i.src)));
const articles=JSON.parse(fs.readFileSync(path.join(root,'articles.json'),'utf8'));assert(articles.items.length>10);for(const a of articles.items){assert(a.title&&a.url.startsWith('https://'));assert(['幽默','时政','历史','文化','生活'].includes(a.category));}
console.log(`PASS: ${words.length} words, ${articles.items.length} articles; scoring, duplicate answers, backup validation, kana search, scripts, manifest`);
