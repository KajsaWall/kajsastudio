const lessonCount=()=>chapters.reduce((n,c)=>n+(LESSONS[c.id]||[]).length,0);
const lessonDone=c=>(LESSONS[c.id]||[]).filter((_,i)=>saved.lessons?.[c.id]?.[i]).length;
function learningHome(){
 const total=lessonCount(),done=chapters.reduce((n,c)=>n+lessonDone(c),0);
 const next=chapters.find(c=>lessonDone(c)<(LESSONS[c.id]||[]).length)||chapters[0];
 const matches=state.search?all().filter(q=>(q.q+' '+q.a+' '+q.title).toLocaleLowerCase('sv').includes(state.search.toLocaleLowerCase('sv'))):[];
 shell(`${heading('Börja här','Lär dig grundmedicin','Du behöver inte ha läst boken. Börja med en lektion, kontrollera att du förstår och gå vidare i din egen takt.')}
 <div class="learn-hero"><div><span class="eyebrow">DIN NÄSTA LEKTION</span><h2>${esc(next.number)} ${esc(next.title)}</h2><p>${esc((LESSONS[next.id]||[]).find((_,i)=>!saved.lessons?.[next.id]?.[i])?.goal||'Repetera ett kapitel du redan gått igenom.')}</p><button class="primary" data-nav="chapter" data-id="${next.id}">${done?'Fortsätt lära dig':'Börja från grunden'}</button></div><div class="hero-progress"><strong>${done}<small> / ${total}</small></strong><span>lektioner genomgångna</span><div class="meter"><i style="width:${pct(done,total)}%"></i></div></div></div>
 ${gameStrip()}
 <div class="stat-row"><div class="stat"><strong>${chapters.length}</strong><span>kapitel i Block 3</span></div><div class="stat"><strong>${done}/${total}</strong><span>lektioner</span></div><div class="stat"><strong>${Object.keys(saved.attempts).length}</strong><span>frågor prövade</span></div></div>
 <div class="section-title"><h2>Alla kapitel</h2><span>Först lärande, sedan repetition</span></div>
 <div class="chapter-grid">${chapters.map(c=>`<button class="chapter-card" data-nav="chapter" data-id="${c.id}"><span class="tag">KAPITEL ${esc(c.number)}</span><h3>${esc(c.title)}</h3><p>${lessonDone(c)} av ${(LESSONS[c.id]||[]).length} lektioner · ${c.questions.length} frågor</p><div class="meter"><i style="width:${pct(lessonDone(c),(LESSONS[c.id]||[]).length)}%"></i></div></button>`).join('')}</div>
 <form id="searchform" class="actions" style="margin-top:30px"><input class="searchbox" name="term" type="search" placeholder="Sök i frågor och svar" value="${esc(state.search)}" aria-label="Sök i frågor och svar"><button class="secondary" type="submit">Sök</button></form>
 ${state.search?`<section class="panel" style="margin-top:14px"><h2>${matches.length} träffar</h2><div class="qa-list">${matches.slice(0,30).map(q=>`<details class="qa"><summary>${esc(q.q)} · ${esc(q.number)}</summary><p>${esc(q.a)}</p></details>`).join('')}</div></section>`:''}`);
}
function learningChapterView(){
 const c=chapter(state.chapter)||chapters[0];if(!c)return learningHome();state.chapter=c.id;
 const lessons=LESSONS[c.id]||[];
 if(state.lessonChapter!==c.id){state.lessonChapter=c.id;state.lesson=Math.max(0,lessons.findIndex((_,i)=>!saved.lessons?.[c.id]?.[i]));state.checkReveal=false}
 state.lesson=Math.max(0,Math.min(state.lesson||0,lessons.length-1));
 const n=state.lesson,l=lessons[n],complete=lessonDone(c);
 const supplement=l?.supplement;
 let body;
 if(state.tab==='learn'){
  body=`<div class="learning-grid"><aside class="lesson-menu"><div class="lesson-menu-head"><strong>Lektionsväg</strong><span>${complete}/${lessons.length} klara</span></div><div class="meter"><i style="width:${pct(complete,lessons.length)}%"></i></div><div class="lesson-links">${lessons.map((item,i)=>`<button data-teach="select" data-index="${i}" class="${i===n?'current':''}"><span class="lesson-number">${saved.lessons?.[c.id]?.[i]?'✓':String(i+1).padStart(2,'0')}</span><span>${esc(item.title)}</span></button>`).join('')}</div></aside>
  <article class="lesson-article"><div class="lesson-kicker">LEKTION ${n+1} AV ${lessons.length} · KAPITEL ${esc(c.number)}</div><h2>${esc(l.title)}</h2><p class="lesson-goal">Efter den här delen kan du: ${esc(l.goal)}</p>${speechControls(c,n,l)}<div class="lesson-body"><p>${esc(l.body[0])}</p>${inlineBook(l)}${l.body.slice(1).map(p=>`<p>${esc(p)}</p>`).join('')}</div>
  <div class="memory-box"><span>DET VIKTIGASTE ATT MINNAS</span><p>${esc(l.remember)}</p></div>
  <div class="checkpoint"><div class="checkpoint-label">KOLLA ATT DU FÖRSTÅTT</div><h3>${esc(l.check)}</h3>${state.checkReveal?`<p class="check-answer">${esc(l.answer)}</p>`:`<button class="secondary mini" data-teach="reveal">Visa förklaring</button>`}</div>
  <div class="lesson-footer"><div class="actions"><button class="pill-button" data-teach="previous" ${n===0?'disabled':''}>Föregående</button><button class="primary" data-teach="complete">${n===lessons.length-1?'Markera kapitlet klart':'Jag förstår – nästa del'}</button></div></div>
  <p class="source">Kursbok: Del ${l.page.slice(1,2)}, PDF-sida ${Number(l.page.slice(4))}. <button class="pill-button mini" data-book="${esc(l.page)}">Visa källsidan</button></p>
  ${supplement?`<p class="supplement">Kompletterande aktuell källa: <a href="${esc(supplement[1])}" target="_blank" rel="noopener noreferrer">${esc(supplement[0])}</a></p>`:''}
  ${complete===lessons.length?`<div class="completion"><strong>Alla lektioner i kapitlet är genomgångna.</strong><p>Nu kan du repetera med kort eller testa dig i provläget.</p><button class="secondary mini" data-action="chaptercards" data-id="${c.id}">Repetera kapitlet</button></div>`:''}</article></div>`;
 }else if(state.tab==='questions'){
  body=`<section class="panel"><h2>Öva utan att kika på svaret</h2><p class="subtle">Lektionerna ger grunden. Här kan du formulera svaret själv och sedan öppna facit.</p><div class="qa-list">${c.questions.map(q=>`<details class="qa"><summary><strong>${esc(q.q)}</strong></summary><p>${esc(q.a)}</p><div class="source">${esc(q.source)} · kapitel ${esc(c.number)}</div></details>`).join('')}</div></section>`;
 }else{
  body=`<section class="panel"><h2>Det här ska sitta</h2><div class="recap-list">${lessons.map((l,i)=>`<button data-teach="select" data-index="${i}"><span>${String(i+1).padStart(2,'0')}</span><div><strong>${esc(l.title)}</strong><p>${esc(l.remember)}</p></div></button>`).join('')}</div><div class="actions" style="margin-top:25px"><button class="primary" data-action="chaptercards" data-id="${c.id}">Repetera med kort</button><button class="secondary" data-action="chapterquiz" data-id="${c.id}">Gör ett prov</button></div></section>`;
 }
 shell(`${heading('Kapitel '+c.number,c.title)}<div class="tabs">${[['learn','Lär dig från grunden'],['questions','Övningsfrågor'],['summary','Sammanfattning']].map(([v,t])=>`<button data-tab="${v}" class="${state.tab===v?'active':''}">${t}</button>`).join('')}</div>${body}`);
}
function learningProgressView(){
 const total=lessonCount(),done=chapters.reduce((n,c)=>n+lessonDone(c),0),q=all(),attempts=q.filter(x=>saved.attempts[x.id]);
 shell(`${heading('Din utveckling','Min progress','Lektionsframsteg och provresultat sparas i den här webbläsaren.')}
 ${gameStrip()}
 <div class="stat-row"><div class="stat"><strong>${done}/${total}</strong><span>lektioner genomgångna</span></div><div class="stat"><strong>${chapters.filter(c=>lessonDone(c)===(LESSONS[c.id]||[]).length).length}/${chapters.length}</strong><span>kapitel klara</span></div><div class="stat"><strong>${attempts.length}</strong><span>frågor prövade</span></div></div>
 <div class="layout"><section class="panel"><h2>Lektionsvägen</h2>${chapters.map(c=>`<div class="progress-line"><span>${esc(c.number)} ${esc(c.title)}</span><div class="meter"><i style="width:${pct(lessonDone(c),(LESSONS[c.id]||[]).length)}%"></i></div><b>${lessonDone(c)}/${(LESSONS[c.id]||[]).length}</b></div>`).join('')}<h2 style="margin-top:30px">Sparade frågor</h2>${q.filter(x=>saved.bookmarks[x.id]).map(x=>`<details class="qa"><summary>${esc(x.q)}</summary><p>${esc(x.a)}</p></details>`).join('')||'<p class="subtle">Du har inte sparat några frågor ännu.</p>'}</section>
 <aside class="panel"><h2>Milstolpar</h2>${badgePanel()}<h2 style="margin-top:28px">Tidigare prov</h2>${saved.exams.length?saved.exams.slice(0,8).map(x=>`<p class="subtle">${new Date(x.date).toLocaleDateString('sv-SE')} · <b>${x.score}/${x.total}</b></p>`).join(''):'<p class="subtle">Inga prov ännu.</p>'}<p class="subtle">${q.filter(x=>saved.ratings[x.id]&&due(x)).length} kort är redo att repeteras.</p><button class="danger mini" data-action="reset">Återställ statistik</button></aside></div>`);
}
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-teach]');if(!t)return;
 const c=chapter(state.chapter),lessons=LESSONS[c.id],action=t.dataset.teach;
 if(action!=='reveal')stopLessonSpeech();
 if(action==='select'){state.lesson=Number(t.dataset.index);state.tab='learn';state.checkReveal=false}
 if(action==='previous'){state.lesson=Math.max(0,state.lesson-1);state.checkReveal=false}
 if(action==='reveal')state.checkReveal=true;
 if(action==='complete'){
  saved.lessons??={};
  saved.lessons[c.id]??={};const firstTime=!saved.lessons[c.id][state.lesson];saved.lessons[c.id][state.lesson]=true;
  if(firstTime){saved.studyDays??={};saved.studyDays[localDay()]=true}
  if(Object.keys(saved.lessons[c.id]).filter(i=>saved.lessons[c.id][i]).length===lessons.length)saved.read[c.id]=true;
  persist();state.lesson=Math.min(state.lesson+1,lessons.length-1);state.checkReveal=false;
 }
 render();if(action!=='reveal')window.scrollTo({top:0,behavior:'smooth'});
});
