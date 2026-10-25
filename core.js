'use strict';
const KoikeCore = (() => {
 const fresh=()=>({version:1,stats:{},recent:[],savedArticles:[],settings:{history:true,weights:[.5,.3,.2],speechRate:.8}});
 function validate(x){if(!x||x.version!==1||typeof x.stats!=='object'||Array.isArray(x.stats)||x.stats===null)throw Error('备份格式不正确');const s=fresh();for(const [k,v]of Object.entries(x.stats)){if(k.length>120||!v||typeof v!=='object')continue;Object.defineProperty(s.stats,k,{value:{favorite:v.favorite===true,added:Number.isFinite(v.added)?Math.max(0,v.added):0,searches:safe(v.searches),unknown:safe(v.unknown),wrong:safe(v.wrong)},enumerable:true,writable:true,configurable:true});}s.recent=Array.isArray(x.recent)?x.recent.filter(v=>typeof v==='string'&&v.length<120).slice(0,30):[];s.savedArticles=Array.isArray(x.savedArticles)?x.savedArticles.filter(v=>typeof v==='string'&&v.startsWith('https://')).slice(0,1000):[];if(x.settings){s.settings.history=x.settings.history!==false;const w=x.settings.weights;if(Array.isArray(w)&&w.length===3&&w.every(v=>Number.isFinite(v)&&v>=0)&&w.reduce((a,b)=>a+b,0)>0){const n=w.reduce((a,b)=>a+b,0);s.settings.weights=w.map(v=>v/n);}s.settings.speechRate=[.6,.8,1].includes(x.settings.speechRate)?x.settings.speechRate:.8;}return s;}
 const safe=n=>Number.isSafeInteger(n)&&n>=0?n:0;
 function stat(s,id){if(!Object.hasOwn(s.stats,id))Object.defineProperty(s.stats,id,{value:{favorite:false,added:0,searches:0,unknown:0,wrong:0},enumerable:true,writable:true,configurable:true});return s.stats[id];}
 const score=(s,w)=>{const v=stat(s,w.id),p=s.settings.weights;return v.searches*p[0]+(w.frequency||0)*p[1]+(v.unknown+v.wrong)*p[2];};
 function answer(s,card,known){if(card.answered)return false;card.answered=true;card.known=known;if(!known)stat(s,card.id).unknown++;return true;}
 function wrong(s,card){if(!card.answered||card.corrected)return false;card.corrected=true;stat(s,card.id).wrong++;return true;}
 function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 const katakana=s=>s.normalize('NFKC').replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-96));
 const matches=(w,q)=>[w.word,w.kana,w.romaji,w.meaning,...(w.aliases||[])].some(x=>katakana(x||'').toLowerCase().includes(katakana(q).toLowerCase()));
 return {fresh,validate,stat,score,answer,wrong,shuffle,matches};
})();
if(typeof module!=='undefined')module.exports=KoikeCore;
