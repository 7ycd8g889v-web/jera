const stages=['Eagle','Vulture','Buzzard','Hawk','Sparrow','Raven'];
const coords={Eagle:[65,31],Vulture:[48,26],Buzzard:[86,39],Hawk:[16,31],Sparrow:[24,42],Raven:[7,39],Entrada:[50,58],'Food court':[39,45],Biergarten:[31,38],Baños:[78,47],Merch:[63,35],Lockers:[62,55],Camping:[19,66]};
const services=['Entrada','Food court','Biergarten','Baños','Merch','Lockers','Camping'];
const walk={Eagle:{Vulture:2,Buzzard:2,Hawk:4,Sparrow:4,Raven:5},Vulture:{Buzzard:4,Hawk:3,Sparrow:3,Raven:4},Buzzard:{Hawk:5,Sparrow:5,Raven:6},Hawk:{Sparrow:2,Raven:1},Sparrow:{Raven:2}};
let servicesVisible=true;
function dist(a,b){if(a===b)return 0;return walk[a]?.[b]??walk[b]?.[a]??3}
const data=[
['Jueves','June 25','Boundaries','Eagle','15:00','15:30',3],['Jueves','June 25','Speedway','Hawk','15:00','15:30',1],['Jueves','June 25','Dying Wish','Vulture','15:30','16:00',2],['Jueves','June 25','Ways Away','Buzzard','15:30','16:00',2],['Jueves','June 25','Domain','Sparrow','16:30','17:00',1],['Jueves','June 25','Whispers','Buzzard','17:00','17:45',2],['Jueves','June 25','Quicksand','Hawk','18:00','18:50',2],['Jueves','June 25','Bury Tomorrow','Vulture','19:00','19:50',3],['Jueves','June 25','Fiddlehead','Buzzard','19:00','19:50',1],['Jueves','June 25','Alexisonfire','Eagle','20:00','20:50',3],['Jueves','June 25','The Ataris','Hawk','20:00','20:50',2],['Jueves','June 25','Pennywise','Vulture','21:00','21:50',3],['Jueves','June 25','Madball','Buzzard','21:00','21:50',2],['Jueves','June 25','The Menzingers','Hawk','22:00','22:50',2],['Jueves','June 25','Rise Against','Vulture','23:00','23:50',3],['Jueves','June 25','Converge','Buzzard','23:00','23:50',2],['Jueves','June 25','NEUFX','Sparrow','23:50','01:00',1],['Jueves','June 25','Architects','Eagle','00:00','01:00',3],['Jueves','June 25','Basement','Hawk','00:00','01:00',1],
['Viernes','June 26','Allt','Eagle','12:45','13:25',2],['Viernes','June 26','Heriot','Vulture','12:00','12:40',2],['Viernes','June 26','Belvedere','Hawk','12:45','13:25',2],['Viernes','June 26','Gridiron','Buzzard','13:30','14:10',2],['Viernes','June 26','Ho99o9','Vulture','15:00','15:50',2],['Viernes','June 26','Haywire','Buzzard','15:00','15:50',2],['Viernes','June 26','Thrown','Vulture','17:00','17:50',2],['Viernes','June 26','The Baboon Show','Hawk','18:00','18:50',3],['Viernes','June 26','Ignite','Buzzard','19:00','19:50',2],['Viernes','June 26','Suicidal Tendencies','Vulture','21:00','21:50',2],['Viernes','June 26','Grade 2','Sparrow','21:15','22:00',2],['Viernes','June 26','A Day To Remember','Eagle','22:00','22:50',3],['Viernes','June 26','Authority Zero','Sparrow','22:45','23:30',2],['Viernes','June 26','Malevolence','Buzzard','23:00','23:50',2],['Viernes','June 26','The Offspring','Eagle','00:00','01:00',3],['Viernes','June 26','Trash Talk','Hawk','00:00','01:00',2],
['Sábado','June 27','Even If We Lose','Buzzard','12:00','12:40',1],['Sábado','June 27','Torn From Oblivion','Sparrow','12:00','12:30',1],['Sábado','June 27','Sugar Spine','Hawk','12:45','13:25',2],['Sábado','June 27','Combust','Buzzard','13:30','14:10',2],['Sábado','June 27','Initiate','Sparrow','14:00','14:30',2],['Sábado','June 27','Ten56.','Vulture','15:00','15:50',2],['Sábado','June 27','Desolated','Buzzard','15:00','15:50',2],['Sábado','June 27','La Dispute','Eagle','16:00','16:50',3],['Sábado','June 27','Trash Boat','Hawk','16:00','16:50',2],['Sábado','June 27','Distant','Vulture','17:00','17:50',2],['Sábado','June 27','Ronker','Sparrow','17:15','18:00',1],['Sábado','June 27','Imminence','Eagle','18:00','18:50',3],['Sábado','June 27','Free Throw','Hawk','18:00','18:50',2],['Sábado','June 27','End It','Buzzard','19:00','19:50',2],['Sábado','June 27','Talco','Hawk','20:00','20:50',2],['Sábado','June 27','Zeke','Sparrow','20:15','21:00',2],['Sábado','June 27','We Came As Romans','Buzzard','21:00','21:50',3],['Sábado','June 27','Hatebreed','Vulture','23:00','23:50',3],['Sábado','June 27','Bob Vylan','Buzzard','23:00','23:50',2],['Sábado','June 27','Papa Roach','Eagle','00:00','01:00',3],['Sábado','June 27','Get The Shot','Hawk','00:00','01:00',2]
].map((x,i)=>({id:i,day:x[0],date:x[1],band:x[2],stage:x[3],start:x[4],end:x[5],prio:x[6]}));
const days=[...new Set(data.map(x=>x.day))];
const mins=t=>{let [h,m]=t.split(':').map(Number); if(h<4)h+=24; return h*60+m};
const star=n=>'★'.repeat(n)+'☆'.repeat(3-n);
const seen=JSON.parse(localStorage.jeraSeen||'{}');
function sorted(arr=data){return [...arr].sort((a,b)=>days.indexOf(a.day)-days.indexOf(b.day)||mins(a.start)-mins(b.start)||stages.indexOf(a.stage)-stages.indexOf(b.stage))}
function overlap(a,b){return a.day===b.day && mins(a.start)<mins(b.end) && mins(b.start)<mins(a.end) && a.id!==b.id}
function clashesFor(e){return data.filter(x=>overlap(e,x))}
function init(){document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>show(b.dataset.tab));daySelect.innerHTML=days.map(d=>`<option>${d}</option>`).join('');daySelect.onchange=renderSchedule;showOnly.onchange=renderSchedule;markCurrent.onclick=()=>{let n=nextEvent(); if(n){seen[n.id]=true; save(); renderAll();}}; if(typeof whereNow!=='undefined') whereNow.onclick=renderMapAdvice; if(typeof toggleServices!=='undefined') toggleServices.onclick=()=>{servicesVisible=!servicesVisible;renderMap();}; renderAll()}
function show(id){document.querySelectorAll('.tab,.tabs button').forEach(e=>e.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelector(`[data-tab=${id}]`).classList.add('active')}
function save(){localStorage.jeraSeen=JSON.stringify(seen)}
function nextEvent(){let now=new Date(), day=days[0], cur=15*60; return sorted().find(e=>!seen[e.id]) || sorted()[0]}
function renderAll(){renderHome();renderSchedule();renderRoute();renderQuick();renderFestival();renderMap()}
function renderHome(){
  const top=Object.entries(data.reduce((a,g)=>(a[g.stage]=(a[g.stage]||0)+1,a),{})).sort((a,b)=>b[1]-a[1])[0];
  cards.innerHTML=`<div><b>${data.length}</b><span>bandas marcadas</span></div><div><b>${data[0].start}</b><span>primer concierto</span></div><div><b>01:00</b><span>último concierto</span></div><div><b>${data.filter(e=>clashesFor(e).length).length}</b><span>con solape</span></div><div><b>${top[0]}</b><span>escenario más visitado</span></div>`;
  let n=nextEvent();nextBox.innerHTML=card(n,true)+`<p class="routeHint">🦅 Jera Scout: usa la pestaña <b>Mapa</b> para ver dónde está el escenario y cuánto podrías tardar andando.</p>`;
  let groups={};sorted().forEach(e=>{let c=clashesFor(e); if(c.length){let k=e.day+' '+e.start; groups[k]=groups[k]||[]; groups[k].push(e)}});
  clashes.innerHTML=Object.entries(groups).slice(0,18).map(([k,v])=>{
    const unique=[...new Map(v.map(x=>[x.band,x])).values()];
    const names=unique.map(x=>`${x.band} <small>(${x.stage})</small>`).join(' · ');
    let note='';
    if(unique.length>1){ const max=Math.max(...unique.flatMap(a=>unique.map(b=>dist(a.stage,b.stage)))); note=`<em>🚶 cambio aprox. hasta ${max} min</em>`; }
    return `<div class="clash"><b>⚠️ ${k}</b><span>${names}${note}</span></div>`
  }).join('')}
function card(e,big=false){let c=clashesFor(e).length?' clashMark':'';return `<article class="gig ${c} p${e.prio} ${seen[e.id]?'seen':''}" data-id="${e.id}"><strong>${e.band}</strong><small>${e.start}-${e.end} · ${e.stage}</small><em>${star(e.prio)}</em>${clashesFor(e).length?'<i>⚠️</i>':''}</article>`}
function renderSchedule(){
  let d=daySelect.value||days[0];
  const startBase=12*60, endBase=26*60, step=30;
  const slots=(endBase-startBase)/step;
  let html='<div class="timeline">';
  html+='<div class="corner">Hora</div>'+stages.map(s=>`<div class="stageHead">${s}</div>`).join('');
  for(let i=0;i<slots;i++){
    let m=startBase+i*step, hh=Math.floor(m/60)%24, mm=m%60;
    html+=`<div class="timeLabel ${mm?'half':''}" style="grid-row:${i+2};grid-column:1">${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}</div>`;
    stages.forEach((s,idx)=>html+=`<div class="slot ${mm?'half':''}" style="grid-row:${i+2};grid-column:${idx+2}"></div>`);
  }
  sorted(data.filter(e=>e.day==d)).forEach(e=>{
    let st=Math.max(0,(mins(e.start)-startBase)/step);
    let en=Math.min(slots,(mins(e.end)-startBase)/step);
    let rowStart=Math.floor(st)+2;
    let rowEnd=Math.max(rowStart+1,Math.ceil(en)+2);
    let col=stages.indexOf(e.stage)+2;
    html+=`<div class="eventWrap" style="grid-column:${col};grid-row:${rowStart}/${rowEnd}">${card(e)}</div>`;
  });
  html+='</div>';
  scheduleGrid.innerHTML=html;
  bindCards();
}
function renderRoute(){let done=data.filter(e=>seen[e.id]).length;progressText.textContent=`${done}/${data.length} conciertos vistos`;progressBar.style.width=(done/data.length*100)+'%';routeList.innerHTML=days.map(d=>`<h3>${d}</h3>`+sorted(data.filter(e=>e.day==d)).map(e=>`<div class="routeItem"><input type="checkbox" ${seen[e.id]?'checked':''} data-check="${e.id}"><span>${e.start}</span>${card(e)}</div>`).join('')).join('');document.querySelectorAll('[data-check]').forEach(ch=>ch.onchange=()=>{seen[ch.dataset.check]=ch.checked;save();renderAll()});bindCards()}
function renderQuick(){quickList.innerHTML=days.map(d=>`<h3>${d}</h3><div class="quickgrid">`+stages.map(s=>`<div><h4>${s}</h4>${sorted(data.filter(e=>e.day==d&&e.stage==s)).map(e=>`<p><b>${e.band}</b><br><small>${e.start}-${e.end}</small></p>`).join('')||'<p class="muted">—</p>'}</div>`).join('')+'</div>').join('')}
function renderFestival(){
  let n=nextEvent();
  const all=sorted();
  const idx=all.findIndex(e=>e.id===n.id);
  const prev=idx>0 && all[idx-1].day===n.day ? all[idx-1] : null;
  const walkTxt=prev?`<p class="walkNow">🚶 Desde ${prev.stage}: ${dist(prev.stage,n.stage)} min aprox.</p>`:'<p class="walkNow">Primer destino del día.</p>';
  festivalNow.innerHTML=`<h2>${n.band}</h2><p>${n.day} · ${n.start}-${n.end}</p><p>${n.stage}</p>${walkTxt}<div>${star(n.prio)} ${clashesFor(n).length?' · ⚠️ solape':''}</div>`
}
function renderMap(){
  if(typeof mapMarkers==='undefined') return;
  mapMarkers.innerHTML='';
  const mk=(name,cls)=>{const c=coords[name]; if(!c)return; const el=document.createElement('div'); el.className='marker '+cls; el.style.left=c[0]+'%'; el.style.top=c[1]+'%'; el.innerHTML=cls.includes('stage')?`<img src="mascot.png" alt=""> <b>${name}</b>`:`<span>${name}</span>`; mapMarkers.appendChild(el)};
  stages.forEach(s=>mk(s,'stageMarker'));
  if(servicesVisible) services.forEach(s=>mk(s,'serviceMarker'));
  if(typeof distanceList!=='undefined'){
    const pairs=[['Eagle','Vulture'],['Eagle','Buzzard'],['Hawk','Raven'],['Hawk','Sparrow'],['Buzzard','Hawk'],['Buzzard','Raven'],['Vulture','Hawk']];
    distanceList.innerHTML=pairs.map(([a,b])=>`<span><b>${a}</b> → <b>${b}</b>: ${dist(a,b)} min</span>`).join('');
  }
}
function renderMapAdvice(){
  const n=nextEvent();
  if(typeof mapAdvice==='undefined') return;
  const all=sorted(); const idx=all.findIndex(e=>e.id===n.id); const prev=idx>0 && all[idx-1].day===n.day?all[idx-1]:null;
  mapAdvice.innerHTML=`<h3>🦅 Jera Scout dice:</h3><p>Ahora toca ir a <b>${n.stage}</b> para ver <b>${n.band}</b> (${n.day}, ${n.start}-${n.end}).</p>${prev?`<p>Si vienes de <b>${prev.stage}</b>, calcula <b>${dist(prev.stage,n.stage)} min andando</b>.</p>`:'<p>Es el primer destino de esta ruta.</p>'}<p class="muted">Referencia basada en el mapa 2025; ajústalo cuando tengamos el mapa oficial 2026.</p>`;
}
function bindCards(){document.querySelectorAll('.gig').forEach(el=>el.onclick=()=>{let id=el.dataset.id;seen[id]=!seen[id];save();renderAll()})}
init();
