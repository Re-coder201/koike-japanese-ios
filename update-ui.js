/* Visible, bounded application update checks. */
const KoikeUpdate = (() => {
 const VERSION='0.3.1';
 let busy=false,view={kind:'idle',text:'点击检查是否有新版本',detail:'当前版本 '+VERSION,button:'检查应用更新'},sequence=0;
 function mount(){let status=document.querySelector('#app-update-status');const button=document.querySelector('[data-action="update-app"]');if(!button)return;
  if(!status){status=document.createElement('div');status.id='app-update-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.setAttribute('aria-atomic','true');button.insertAdjacentElement('afterend',status);}paint();
 }
 function paint(){const button=document.querySelector('[data-action="update-app"]'),status=document.querySelector('#app-update-status');if(!button||!status)return;button.disabled=busy;button.setAttribute('aria-busy',String(busy));button.textContent=view.button;status.className='app-update-status '+view.kind;status.replaceChildren();
  const title=document.createElement('strong');if(busy){const spinner=document.createElement('span');spinner.className='update-spinner';spinner.setAttribute('aria-hidden','true');title.append(spinner);}title.append(document.createTextNode(view.text));status.append(title);const detail=document.createElement('div');detail.className='update-detail';detail.textContent=view.detail;status.append(detail);
 }
 function set(kind,text,detail,button){view={kind,text,detail,button};paint();}
 async function check(){if(busy)return;busy=true;const run=++sequence;set('checking','正在连接服务器检查更新…','请稍候，检查期间无需重复点击。','正在检查…');
  const cleanups=[];let done=false,lastCompleted=-1;
  function finish(kind,text,detail,button='重新检查'){if(done||run!==sequence)return;done=true;busy=false;for(const clean of cleanups)clean();set(kind,text,detail,button);}
  function on(target,event,fn){target.addEventListener(event,fn);cleanups.push(()=>target.removeEventListener(event,fn));}
  const timeout=setTimeout(()=>finish('error','检查超时，请重试','网络或资源下载耗时较长，本次未能确认是否为最新版本。','重试检查'),45000);cleanups.push(()=>clearTimeout(timeout));
  try{
   if(!('serviceWorker'in navigator))return finish('error','当前浏览器不支持应用更新','请在 iPhone Safari 中打开软件后重试。','重试检查');
   let reg=await navigator.serviceWorker.getRegistration();if(done)return;
   const ready=()=>finish('ready','✓ 更新已下载完成','请关闭本软件的所有 Safari 标签页和桌面应用窗口，再重新打开；收藏与学习记录会保留。','再次检查');
   if(reg?.waiting)return ready();
   if(navigator.onLine===false)return finish('error','当前没有网络，无法检查更新','离线词库和内置文章仍可使用。联网后再点击检查。','联网后重试');
   const seen=new WeakSet();
   function watch(worker){if(!worker||seen.has(worker)||done)return;seen.add(worker);
    const change=()=>{if(done)return;switch(worker.state){case'installing':set('downloading','发现资源更新，正在下载…','下载过程中请保持联网。','正在下载…');break;case'installed':if(reg.active||navigator.serviceWorker.controller)ready();else set('downloading','资源已下载，正在准备应用…','即将完成，请稍候。','正在准备…');break;case'activated':finish('latest','✓ 应用资源已就绪','当前版本 '+VERSION+'。可进入阅读页确认离线文章已就绪。','再次检查');break;case'redundant':finish('error','更新未完成，请重试','部分资源可能下载失败。本次未确认最新版本，原有学习数据保留。','重试检查');break;}};
    on(worker,'statechange',change);change();
   }
   on(navigator.serviceWorker,'message',event=>{if(done||!event.data||event.data.type!=='KOIKE_UPDATE_PROGRESS')return;const source=event.source;if(source!==reg?.installing&&source!==reg?.waiting)return;const {completed,total}=event.data;if(!Number.isInteger(completed)||!Number.isInteger(total)||total<=0||completed<0||completed>total||completed<lastCompleted)return;lastCompleted=completed;set('downloading',`正在下载更新资源 ${completed} / ${total}`,Math.round(completed/total*100)+'% · 请保持联网，下载完成后会提示。','正在下载…');});
   if(!reg){set('downloading','正在准备应用与离线资源…','这是首次建立缓存，请保持联网。','正在准备…');reg=await navigator.serviceWorker.register('./sw.js');if(done)return;on(reg,'updatefound',()=>watch(reg.installing));watch(reg.installing);if(reg.waiting)return ready();if(reg.active&&!reg.installing)return finish('latest','✓ 应用资源已就绪','当前版本 '+VERSION+'，离线资源已安装。','再次检查');return;}
   on(reg,'updatefound',()=>watch(reg.installing));
   if(reg.installing){watch(reg.installing);return;}
   await reg.update();if(done)return;
   if(reg.waiting)return ready();
   if(reg.installing){watch(reg.installing);return;}
   finish('latest','✓ 已经是最新版本','当前版本 '+VERSION+' · 本次已成功检查服务器，无需更新。','再次检查');
  }catch(error){finish('error','检查更新失败，请重试','请检查网络连接。未能确认是否为最新版本；现有收藏与学习记录不受影响。','重试检查');}
 }
 const style=document.createElement('style');style.textContent='.app-update-status{margin:12px 0 18px;padding:14px 16px;border-radius:15px;background:var(--pale);font-size:13px;line-height:1.9}.app-update-status strong{display:flex;align-items:center;gap:9px;font-weight:500}.app-update-status.error{background:var(--pink)}.update-detail{font-size:12px;color:var(--muted);margin-top:5px}.update-spinner{width:15px;height:15px;border:2px solid #bdcbb8;border-top-color:var(--green);border-radius:50%;animation:koike-spin .8s linear infinite;flex-shrink:0}@keyframes koike-spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.update-spinner{animation:none}}';document.head.append(style);
 return {mount,check};
})();
