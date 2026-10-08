const illustratedPages=new Set(["D1_P01", "D1_P02", "D1_P05", "D1_P07", "D1_P14", "D1_P16", "D1_P22", "D1_P23", "D2_P15", "D2_P17", "D2_P20", "D2_P23"]);
function inlineBook(l){
 if(!illustratedPages.has(l.page))return '';
 return `<figure class="inline-book"><button data-figure="${esc(l.page)}" aria-label="Förstora figuren från kursboken"><img loading="lazy" src="figures/${esc(l.page)}.webp" alt="Figur från kursboken till lektionen ${esc(l.title)}"></button><figcaption>Figur från kursboken <span>Tryck för att förstora</span></figcaption></figure>`;
}
const rewardBadges=[{at:1,icon:'✦',title:'Första steget'},{at:10,icon:'✧',title:'10 lektioner'},{at:24,icon:'◆',title:'Halvvägs'},{at:47,icon:'★',title:'Hela Block 3'}];
const localDay=(date=new Date())=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
function studyStreak(){
 const days=saved.studyDays||{},cursor=new Date();if(!days[localDay(cursor)])cursor.setDate(cursor.getDate()-1);
 let count=0;while(days[localDay(cursor)]){count++;cursor.setDate(cursor.getDate()-1)}return count;
}
function gameStats(){const done=chapters.reduce((n,c)=>n+lessonDone(c),0);return {done,xp:done*10,streak:studyStreak()}}
function gameStrip(){let g=gameStats();return `<div class="game-strip"><div><strong>${g.xp}</strong><span>lektionspoäng</span></div><div><strong>${g.streak}</strong><span>studiedagar i följd</span></div><div><strong>${rewardBadges.filter(b=>g.done>=b.at).length}/${rewardBadges.length}</strong><span>milstolpar</span></div></div>`}
function badgePanel(){let g=gameStats();return `<div class="badge-panel">${rewardBadges.map(b=>`<div class="badge ${g.done>=b.at?'unlocked':''}"><span aria-hidden="true">${b.icon}</span><strong>${b.title}</strong><small>${g.done>=b.at?'Upplåst':`Vid ${b.at} lektioner`}</small></div>`).join('')}</div>`}

const lessonSpeech={key:null,utterance:null,status:''};
function swedishVoices(){return typeof speechSynthesis==='undefined'?[]:speechSynthesis.getVoices().filter(v=>/^sv(?:-|$)/i.test(v.lang))}
function canSpeakSwedish(){if(typeof speechSynthesis==='undefined'||typeof SpeechSynthesisUtterance==='undefined')return false;const allVoices=speechSynthesis.getVoices();return !allVoices.length||swedishVoices().length>0}
function stopLessonSpeech(){
 if(typeof speechSynthesis!=='undefined')speechSynthesis.cancel();
 lessonSpeech.key=null;lessonSpeech.utterance=null;lessonSpeech.status='';
}
function speechControls(c,n,l){
 if(typeof speechSynthesis==='undefined'||typeof SpeechSynthesisUtterance==='undefined')return '<p class="speech-note">Uppläsning stöds inte i den här webbläsaren.</p>';
 const voices=swedishVoices(),allVoices=speechSynthesis.getVoices(),key=c.id+'-'+n,active=lessonSpeech.key===key,paused=active&&speechSynthesis.paused;
 if(allVoices.length&&!voices.length)return '<p class="speech-note">Ingen svensk röst hittades på enheten. Lägg till en svensk talsyntesröst i enhetens inställningar och öppna sidan igen.</p>';
 const selected=saved.speechVoice||'';
 return `<div class="speech-panel"><div><strong>Lyssna på lektionen</strong><p>Uppläsning med enhetens svenska röst</p></div><div class="speech-buttons"><button class="secondary mini" data-speech="${active?(paused?'resume':'pause'):'play'}">${active?(paused?'▶ Fortsätt':'Ⅱ Pausa'):'▶ Läs upp'}</button>${active?'<button class="pill-button mini" data-speech="stop">Stoppa</button>':''}</div><div class="speech-options"><label>Röst <select data-speech-setting="voice" aria-label="Svensk röst">${voices.length?voices.map(v=>`<option value="${esc(v.voiceURI)}" ${v.voiceURI===selected?'selected':''}>${esc(v.name)}</option>`).join(''):'<option value="">Automatisk svensk röst</option>'}</select></label><label>Tempo <select data-speech-setting="rate" aria-label="Uppläsningstempo">${[['0.85','Lugnt'],['1','Normalt'],['1.15','Snabbare']].map(([v,t])=>`<option value="${v}" ${String(saved.speechRate||'1')===v?'selected':''}>${t}</option>`).join('')}</select></label></div>${lessonSpeech.status?`<p class="speech-note">${esc(lessonSpeech.status)}</p>`:''}</div>`;
}
function startLessonSpeech(){
 const c=chapter(state.chapter),n=state.lesson||0,l=LESSONS[c.id][n],voices=swedishVoices();
 if(!canSpeakSwedish()){lessonSpeech.status='Ingen svensk röst är tillgänglig på enheten.';render();return}
 stopLessonSpeech();const utterance=new SpeechSynthesisUtterance([l.title,...l.body,'Det viktigaste att minnas:',l.remember].join(' '));
 utterance.lang='sv-SE';utterance.rate=Number(saved.speechRate||1);
 utterance.voice=voices.find(v=>v.voiceURI===saved.speechVoice)||voices[0]||null;
 const key=c.id+'-'+n;lessonSpeech.key=key;lessonSpeech.utterance=utterance;
 utterance.onend=()=>{if(lessonSpeech.key===key){lessonSpeech.key=null;lessonSpeech.utterance=null;if(state.view==='chapter')render()}};
 utterance.onerror=e=>{if(lessonSpeech.key===key){lessonSpeech.key=null;lessonSpeech.utterance=null;lessonSpeech.status=e.error==='canceled'?'':'Uppläsningen avbröts. Försök igen.';if(state.view==='chapter')render()}};
 speechSynthesis.speak(utterance);render();
}
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-speech]');if(!t)return;
 const action=t.dataset.speech;
 if(action==='play')startLessonSpeech();
 else if(action==='pause'){speechSynthesis.pause();render()}
 else if(action==='resume'){speechSynthesis.resume();render()}
 else if(action==='stop'){stopLessonSpeech();render()}
});
document.addEventListener('click',e=>{if(e.target.closest('[data-tab]'))stopLessonSpeech()});
document.addEventListener('change',e=>{
 const t=e.target.closest('[data-speech-setting]');if(!t)return;
 if(t.dataset.speechSetting==='voice')saved.speechVoice=t.value;
 if(t.dataset.speechSetting==='rate')saved.speechRate=Number(t.value);
 persist();if(lessonSpeech.key)stopLessonSpeech();render();
});
if(typeof speechSynthesis!=='undefined'&&speechSynthesis.addEventListener){speechSynthesis.addEventListener('voiceschanged',()=>{if(state.view==='chapter'&&!lessonSpeech.key)render()})}
