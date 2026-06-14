const stages=['Eagle','Vulture','Buzzard','Hawk','Sparrow','Raven'];
const coords={Eagle:[65,31],Vulture:[48,26],Buzzard:[86,39],Hawk:[16,31],Sparrow:[24,42],Raven:[7,39],Entrada:[50,58],'Food court':[39,45],Biergarten:[31,38],Baños:[78,47],Merch:[63,35],Lockers:[62,55],Camping:[19,66]};
const services=['Entrada','Food court','Biergarten','Baños','Merch','Lockers','Camping'];
const walk={Eagle:{Vulture:2,Buzzard:2,Hawk:4,Sparrow:4,Raven:5},Vulture:{Buzzard:4,Hawk:3,Sparrow:3,Raven:4},Buzzard:{Hawk:5,Sparrow:5,Raven:6},Hawk:{Sparrow:2,Raven:1},Sparrow:{Raven:2}};
let servicesVisible=true;
const initialSelected=['Boundaries','Speedway','Dying Wish','Ways Away','Domain','Whispers','Quicksand','Bury Tomorrow','Fiddlehead','Alexisonfire','The Ataris','Pennywise','Madball','The Menzingers','Rise Against','Converge','NØFX','NEUFX','Architects','Basement','Allt','Heriot','Belvedere','Gridiron','Ho99o9','Haywire','Thrown','The Baboon Show','Ignite','Suicidal Tendencies','Grade 2','A Day To Remember','Authority Zero','Malevolence','The Offspring','Trash Talk','Even If We Lose','Torn From Oblivion','Sugar Spine','Combust','Initiate','ten56.','Ten56.','Desolated','La Dispute','Trash Boat','Distant','RONKER','Ronker','Imminence','Free Throw','End It','Talco','Zeke','We Came As Romans','Hatebreed','Bob Vylan','Papa Roach','Get the Shot','Get The Shot'];
const rows=`Jueves|June 25|Architects|Eagle|00:00|01:00
Jueves|June 25|Basement|Hawk|00:00|01:00
Jueves|June 25|Boundaries|Eagle|15:00|15:30
Jueves|June 25|Speedway|Hawk|15:00|15:30
Jueves|June 25|Dynamo Heavy Bingo|Raven|15:00|18:00
Jueves|June 25|Ways Away|Buzzard|15:30|16:00
Jueves|June 25|Rotzak|Sparrow|15:30|16:00
Jueves|June 25|Dying Wish|Vulture|15:30|16:00
Jueves|June 25|Decapitated|Eagle|16:00|16:50
Jueves|June 25|Nevertel|Hawk|16:00|16:50
Jueves|June 25|Domain|Sparrow|16:30|17:00
Jueves|June 25|Whispers|Buzzard|17:00|17:45
Jueves|June 25|Wargasm|Vulture|17:00|17:50
Jueves|June 25|Feels Like Heaven|Sparrow|17:45|18:15
Jueves|June 25|Set It Off|Eagle|18:00|18:50
Jueves|June 25|Quicksand|Hawk|18:00|18:50
Jueves|June 25|Emo Night Mainland|Raven|18:00|01:00
Jueves|June 25|The Smith Street Band|Sparrow|18:45|19:30
Jueves|June 25|Fiddlehead|Buzzard|19:00|19:50
Jueves|June 25|Bury Tomorrow|Vulture|19:00|19:50
Jueves|June 25|Alexisonfire|Eagle|20:00|20:50
Jueves|June 25|The Ataris|Hawk|20:00|20:50
Jueves|June 25|TSS|Sparrow|20:15|21:00
Jueves|June 25|Madball|Buzzard|21:00|21:50
Jueves|June 25|Pennywise|Vulture|21:00|21:50
Jueves|June 25|Aurorawave|Sparrow|21:45|22:30
Jueves|June 25|Trivium|Eagle|22:00|22:50
Jueves|June 25|The Menzingers|Hawk|22:00|22:50
Jueves|June 25|De Rooie Jager|Sparrow|22:45|23:50
Jueves|June 25|Converge|Buzzard|23:00|23:50
Jueves|June 25|Rise Against|Vulture|23:00|23:50
Jueves|June 25|NØFX|Sparrow|23:50|01:00
Viernes|June 26|The Offspring|Eagle|00:00|01:00
Viernes|June 26|Trash Talk|Hawk|00:00|01:00
Viernes|June 26|ELLE RICH|Raven|00:00|01:00
Viernes|June 26|Paceshifters play Nirvana|Sparrow|00:15|01:00
Viernes|June 26|The Viper|Raven|01:00|02:00
Viernes|June 26|De Rooie Jager|Sparrow|01:00|02:00
Viernes|June 26|Curselifter|Buzzard|12:00|12:40
Viernes|June 26|Heriot|Vulture|12:00|12:40
Viernes|June 26|ILÆNDER|Sparrow|12:30|13:00
Viernes|June 26|Allt|Eagle|12:45|13:25
Viernes|June 26|Belvedere|Hawk|12:45|13:25
Viernes|June 26|Gridiron|Buzzard|13:30|14:10
Viernes|June 26|Dwarves|Sparrow|13:30|14:00
Viernes|June 26|Melrose Avenue|Vulture|13:30|14:10
Viernes|June 26|Real Paradise Group|Raven|14:00|14:45
Viernes|June 26|TX2|Eagle|14:15|14:55
Viernes|June 26|Magnolia Park|Hawk|14:15|14:55
Viernes|June 26|Politie Warnsveld|Sparrow|14:30|15:00
Viernes|June 26|Q'n|Raven|14:45|15:30
Viernes|June 26|Haywire|Buzzard|15:00|15:50
Viernes|June 26|Ho99o9|Vulture|15:00|15:50
Viernes|June 26|Upchuck|Sparrow|15:30|16:15
Viernes|June 26|Annisokay|Eagle|16:00|16:50
Viernes|June 26|The Flatliners|Hawk|16:00|16:50
Viernes|June 26|Andy & the Antichrist|Raven|16:00|16:30
Viernes|June 26|Kings of Schrobbeler|Sparrow|16:45|17:30
Viernes|June 26|King 810|Buzzard|17:00|17:50
Viernes|June 26|LeBlanc|Raven|17:00|17:30
Viernes|June 26|Thrown|Vulture|17:00|17:50
Viernes|June 26|Alkaline Trio|Eagle|18:00|18:50
Viernes|June 26|The Baboon Show|Hawk|18:00|18:50
Viernes|June 26|Fresku|Raven|18:00|18:30
Viernes|June 26|Captain Kaiser|Sparrow|18:15|19:00
Viernes|June 26|Ignite|Buzzard|19:00|19:50
Viernes|June 26|DeathbyRomy|Raven|19:00|19:30
Viernes|June 26|Periphery|Vulture|19:00|19:50
Viernes|June 26|Geishas of Doom ft. Rudeboy|Sparrow|19:45|20:30
Viernes|June 26|Hollywood Undead|Eagle|20:00|20:50
Viernes|June 26|Jaya the Cat|Hawk|20:00|20:50
Viernes|June 26|Code: Pandorum|Raven|20:00|21:00
Viernes|June 26|Destroy Boys|Buzzard|21:00|21:50
Viernes|June 26|Suicidal Tendencies|Vulture|21:00|21:50
Viernes|June 26|Grade 2|Sparrow|21:15|22:00
Viernes|June 26|TDC INC.|Raven|21:30|22:30
Viernes|June 26|A Day To Remember|Eagle|22:00|22:50
Viernes|June 26|Bad Nerves|Hawk|22:00|22:50
Viernes|June 26|Authority Zero|Sparrow|22:45|23:30
Viernes|June 26|Malevolence|Buzzard|23:00|23:50
Viernes|June 26|Parrish Smith LIVE|Raven|23:00|00:00
Viernes|June 26|Ice Nine Kills|Vulture|23:00|23:50
Sábado|June 27|Papa Roach|Eagle|00:00|01:00
Sábado|June 27|Get the Shot|Hawk|00:00|01:00
Sábado|June 27|ALIIENMIA|Raven|00:00|01:00
Sábado|June 27|Alle Kleuren|Sparrow|00:15|01:00
Sábado|June 27|Panic|Raven|01:00|02:00
Sábado|June 27|De Rooie Jager|Sparrow|01:00|02:00
Sábado|June 27|Even If We Lose|Buzzard|12:00|12:40
Sábado|June 27|Torn From Oblivion|Sparrow|12:00|12:30
Sábado|June 27|Mouth Culture|Vulture|12:00|12:40
Sábado|June 27|Rain City Drive|Eagle|12:45|13:25
Sábado|June 27|Sugar Spine|Hawk|12:45|13:25
Sábado|June 27|Wijf|Sparrow|13:00|13:30
Sábado|June 27|Combust|Buzzard|13:30|14:10
Sábado|June 27|Our Mirage|Vulture|13:30|14:10
Sábado|June 27|Real Paradise Group|Raven|14:00|14:45
Sábado|June 27|Initiate|Sparrow|14:00|14:30
Sábado|June 27|Catch Your Breath|Eagle|14:15|14:55
Sábado|June 27|Have Mercy|Hawk|14:15|14:55
Sábado|June 27|Clitteband|Raven|14:45|15:30
Sábado|June 27|Desolated|Buzzard|15:00|15:50
Sábado|June 27|TAXITAXI|Sparrow|15:00|15:30
Sábado|June 27|ten56.|Vulture|15:00|15:50
Sábado|June 27|La Dispute|Eagle|16:00|16:50
Sábado|June 27|Trash Boat|Hawk|16:00|16:50
Sábado|June 27|Lola Doppelspitze|Raven|16:00|16:30
Sábado|June 27|The JB Conspiracy|Sparrow|16:00|16:45
Sábado|June 27|Doodseskader|Buzzard|17:00|17:50
Sábado|June 27|End It|Buzzard|17:00|17:50
Sábado|June 27|Zalm|Raven|17:00|17:30
Sábado|June 27|Distant|Vulture|17:00|17:50
Sábado|June 27|RONKER|Sparrow|17:15|18:00
Sábado|June 27|Imminence|Eagle|18:00|18:50
Sábado|June 27|Free Throw|Hawk|18:00|18:50
Sábado|June 27|Youth Code|Raven|18:00|18:45
Sábado|June 27|Gabbertje|Sparrow|18:15|18:45
Sábado|June 27|End It|Buzzard|19:00|19:50
Sábado|June 27|Ray Fuego|Raven|19:00|19:45
Sábado|June 27|unpeople|Sparrow|19:00|19:45
Sábado|June 27|Kanonenfieber|Vulture|19:00|19:50
Sábado|June 27|All Time Low|Eagle|20:00|20:50
Sábado|June 27|Talco|Hawk|20:00|20:50
Sábado|June 27|Jawat!|Raven|20:00|20:45
Sábado|June 27|Zeke|Sparrow|20:15|21:00
Sábado|June 27|We Came As Romans|Buzzard|21:00|21:50
Sábado|June 27|Turbonegro|Vulture|21:00|21:50
Sábado|June 27|Kleine Crack & Slagter|Raven|21:30|22:00
Sábado|June 27|Het Goede Doel|Sparrow|21:30|22:15
Sábado|June 27|Viagra Boys|Eagle|22:00|22:50
Sábado|June 27|Dog Eat Dog|Hawk|22:00|22:50
Sábado|June 27|Gierboys|Raven|22:15|22:45
Sábado|June 27|Bob Vylan|Buzzard|23:00|23:50
Sábado|June 27|The Aggrolites|Sparrow|23:00|23:45
Sábado|June 27|Hatebreed|Vulture|23:00|23:50
Sábado|June 27|KABOUTERTJE PUTLUCHT|Raven|23:15|00:00`;
const allData=rows.split('\n').map((r,i)=>{const x=r.split('|');return{id:i,day:x[0],date:x[1],band:x[2],stage:x[3],start:x[4],end:x[5],prio:initialSelected.includes(x[2])?3:1}});
const days=[...new Set(allData.map(x=>x.day))];
const mins=t=>{let [h,m]=t.split(':').map(Number);if(h<4)h+=24;return h*60+m};
const star=n=>'★'.repeat(n)+'☆'.repeat(3-n);
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const initialIds=allData.filter(e=>initialSelected.includes(e.band)).map(e=>e.id);
let selected=JSON.parse(localStorage.jeraSelected||'null')||Object.fromEntries(initialIds.map(id=>[id,true]));
const seen=JSON.parse(localStorage.jeraSeen||'{}');
const activeData=()=>allData.filter(e=>selected[e.id]);
function dist(a,b){if(a===b)return 0;return walk[a]?.[b]??walk[b]?.[a]??3}
function sorted(arr=activeData()){return [...arr].sort((a,b)=>days.indexOf(a.day)-days.indexOf(b.day)||mins(a.start)-mins(b.start)||stages.indexOf(a.stage)-stages.indexOf(b.stage))}
function overlap(a,b){return a.day===b.day&&mins(a.start)<mins(b.end)&&mins(b.start)<mins(a.end)&&a.id!==b.id}
function clashesFor(e,arr=activeData()){return arr.filter(x=>overlap(e,x))}
function save(){localStorage.jeraSeen=JSON.stringify(seen);localStorage.jeraSelected=JSON.stringify(selected)}
function init(){document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>show(b.dataset.tab));daySelect.innerHTML=days.map(d=>`<option>${d}</option>`).join('');bandDay.innerHTML='<option value="all">Todos los días</option>'+days.map(d=>`<option>${d}</option>`).join('');daySelect.onchange=renderSchedule;showOnly.onchange=renderSchedule;bandSearch.oninput=renderBands;bandDay.onchange=renderBands;resetSelection.onclick=()=>{selected=Object.fromEntries(initialIds.map(id=>[id,true]));save();renderAll()};markCurrent.onclick=()=>{let n=nextEvent();if(n){seen[n.id]=true;save();renderAll()}};whereNow.onclick=renderMapAdvice;toggleServices.onclick=()=>{servicesVisible=!servicesVisible;renderMap()};renderAll()}
function show(id){document.querySelectorAll('.tab,.tabs button').forEach(e=>e.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelector(`[data-tab=${id}]`).classList.add('active')}
function nextEvent(){return sorted().find(e=>!seen[e.id])||sorted()[0]||allData[0]}
function renderAll(){renderHome();renderBands();renderSchedule();renderRoute();renderQuick();renderFestival();renderMap()}
function renderHome(){const data=activeData();const top=Object.entries(data.reduce((a,g)=>(a[g.stage]=(a[g.stage]||0)+1,a),{})).sort((a,b)=>b[1]-a[1])[0]||['-',0];cards.innerHTML=`<div><b>${data.length}</b><span>bandas marcadas</span></div><div><b>${allData.length}</b><span>bandas disponibles</span></div><div><b>${data[0]?.start||'-'}</b><span>primer concierto</span></div><div><b>${data.filter(e=>clashesFor(e).length).length}</b><span>con solape</span></div><div><b>${top[0]}</b><span>escenario más visitado</span></div>`;let n=nextEvent();nextBox.innerHTML=card(n,true)+`<p class="routeHint">Usa la pestaña <b>Bandas</b> para cambiar la ruta si descubres algo nuevo.</p>`;let groups={};sorted().forEach(e=>{let c=clashesFor(e);if(c.length){let k=e.day+' '+e.start;groups[k]=groups[k]||[];groups[k].push(e)}});clashes.innerHTML=Object.entries(groups).slice(0,18).map(([k,v])=>{const unique=[...new Map(v.map(x=>[x.band,x])).values()];const names=unique.map(x=>`${x.band} <small>(${x.stage})</small>`).join(' · ');return `<div class="clash"><b>⚠️ ${k}</b><span>${names}</span></div>`}).join('')||'<p class="muted">Sin solapes en tu selección.</p>'}
function card(e){let c=clashesFor(e).length?' clashMark':'';return `<article class="gig ${c} p${e.prio} ${selected[e.id]?'':'unselected'} ${seen[e.id]?'seen':''}" data-id="${e.id}"><strong>${e.band}</strong><small>${e.start}-${e.end} · ${e.stage}</small><em>${selected[e.id]?'En mi ruta':'Sin marcar'} · ${star(e.prio)}</em>${clashesFor(e).length?'<i>⚠️</i>':''}</article>`}
function renderBands(){const q=norm(bandSearch.value||'');const day=bandDay.value||'all';const list=sorted(allData).filter(e=>(day==='all'||e.day===day)&&(!q||norm(e.band).includes(q)));selectionSummary.textContent=`${activeData().length} marcadas de ${allData.length} actuaciones`;bandList.innerHTML=list.map(e=>`<label class="bandPick ${selected[e.id]?'isSelected':''}"><input type="checkbox" data-pick="${e.id}" ${selected[e.id]?'checked':''}><span><b>${e.band}</b><small>${e.day} · ${e.start}-${e.end} · ${e.stage}</small></span></label>`).join('');document.querySelectorAll('[data-pick]').forEach(ch=>ch.onchange=()=>{selected[ch.dataset.pick]=ch.checked;if(!ch.checked)delete seen[ch.dataset.pick];save();renderAll()})}
function renderSchedule(){let d=daySelect.value||days[0];const base=12*60,end=26*60,step=30,slots=(end-base)/step;let html='<div class="timeline"><div class="corner">Hora</div>'+stages.map(s=>`<div class="stageHead">${s}</div>`).join('');for(let i=0;i<slots;i++){let m=base+i*step,hh=Math.floor(m/60)%24,mm=m%60;html+=`<div class="timeLabel ${mm?'half':''}" style="grid-row:${i+2};grid-column:1">${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}</div>`;stages.forEach((s,idx)=>html+=`<div class="slot ${mm?'half':''}" style="grid-row:${i+2};grid-column:${idx+2}"></div>`)}const source=showOnly.checked?activeData():allData;sorted(source.filter(e=>e.day==d&&stages.includes(e.stage))).forEach(e=>{let st=Math.max(0,(mins(e.start)-base)/step),en=Math.min(slots,(mins(e.end)-base)/step),rowStart=Math.floor(st)+2,rowEnd=Math.max(rowStart+1,Math.ceil(en)+2),col=stages.indexOf(e.stage)+2;html+=`<div class="eventWrap" style="grid-column:${col};grid-row:${rowStart}/${rowEnd}">${card(e)}</div>`});scheduleGrid.innerHTML=html+'</div>';bindCards()}
function renderRoute(){let data=activeData(),done=data.filter(e=>seen[e.id]).length;progressText.textContent=`${done}/${data.length} conciertos vistos`;progressBar.style.width=(data.length?done/data.length*100:0)+'%';routeList.innerHTML=days.map(d=>`<h3>${d}</h3>`+sorted(data.filter(e=>e.day==d)).map(e=>`<div class="routeItem"><input type="checkbox" ${seen[e.id]?'checked':''} data-check="${e.id}"><span>${e.start}</span>${card(e)}</div>`).join('')).join('');document.querySelectorAll('[data-check]').forEach(ch=>ch.onchange=()=>{seen[ch.dataset.check]=ch.checked;save();renderAll()});bindCards()}
function renderQuick(){const data=activeData();quickList.innerHTML=days.map(d=>`<h3>${d}</h3><div class="quickgrid">`+stages.map(s=>`<div><h4>${s}</h4>${sorted(data.filter(e=>e.day==d&&e.stage==s)).map(e=>`<p><b>${e.band}</b><br><small>${e.start}-${e.end}</small></p>`).join('')||'<p class="muted">—</p>'}</div>`).join('')+'</div>').join('')}
function renderFestival(){let n=nextEvent();const all=sorted(),idx=all.findIndex(e=>e.id===n.id),prev=idx>0&&all[idx-1].day===n.day?all[idx-1]:null;festivalNow.innerHTML=`<h2>${n.band}</h2><p>${n.day} · ${n.start}-${n.end}</p><p>${n.stage}</p>${prev?`<p class="walkNow">🚶 Desde ${prev.stage}: ${dist(prev.stage,n.stage)} min aprox.</p>`:'<p class="walkNow">Primer destino del día.</p>'}<div>${selected[n.id]?'En mi ruta':'Sin marcar'}</div>`}
function renderMap(){mapMarkers.innerHTML='';const mk=(name,cls)=>{const c=coords[name];if(!c)return;const el=document.createElement('div');el.className='marker '+cls;el.style.left=c[0]+'%';el.style.top=c[1]+'%';el.innerHTML=cls.includes('stage')?`<img src="mascot.png" alt=""> <b>${name}</b>`:`<span>${name}</span>`;mapMarkers.appendChild(el)};stages.forEach(s=>mk(s,'stageMarker'));if(servicesVisible)services.forEach(s=>mk(s,'serviceMarker'));distanceList.innerHTML=[['Eagle','Vulture'],['Eagle','Buzzard'],['Hawk','Raven'],['Hawk','Sparrow'],['Buzzard','Hawk'],['Buzzard','Raven'],['Vulture','Hawk']].map(([a,b])=>`<span><b>${a}</b> → <b>${b}</b>: ${dist(a,b)} min</span>`).join('')}
function renderMapAdvice(){const n=nextEvent();const all=sorted(),idx=all.findIndex(e=>e.id===n.id),prev=idx>0&&all[idx-1].day===n.day?all[idx-1]:null;mapAdvice.innerHTML=`<h3>Jera Scout dice:</h3><p>Ahora toca ir a <b>${n.stage}</b> para ver <b>${n.band}</b> (${n.day}, ${n.start}-${n.end}).</p>${prev?`<p>Si vienes de <b>${prev.stage}</b>, calcula <b>${dist(prev.stage,n.stage)} min andando</b>.</p>`:'<p>Es el primer destino de esta ruta.</p>'}<p class="muted">Referencia basada en el mapa 2025.</p>`}
function bindCards(){document.querySelectorAll('.gig').forEach(el=>el.onclick=()=>{let id=el.dataset.id;selected[id]=!selected[id];if(!selected[id])delete seen[id];save();renderAll()})}
init();
