(function(){
  if(!window.StudyModules) return setTimeout(arguments.callee, 300);
  var sd = window.StudyModules.subjectsData;
  if(!sd) return;

  // Global quiz engine
  window._Quiz={
    _state:{},
    _init:function(id,qs,color){
      this._state[id]={questions:qs,color:color,idx:0,score:0,answered:false};
      this._render(id);
    },
    _render:function(id){
      var s=this._state[id],q=s.questions[s.idx],r=document.getElementById('qz-'+id);
      if(!r)return;
      var pct=(s.idx+1)/s.questions.length*100;
      r.innerHTML='<div class="mc-progress" style="background:#1e293b;border-radius:20px;padding:20px;margin-bottom:20px;">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">'+
      '<span style="background:'+s.color+'15;color:'+s.color+';padding:6px 16px;border-radius:20px;font-size:13px;font-weight:700;">Quiz</span>'+
      '<span style="color:#94a3b8;font-size:14px;">'+(s.idx+1)+'/'+s.questions.length+'</span></div>'+
      '<div style="width:100%;height:6px;background:#334155;border-radius:3px;">'+
      '<div style="width:'+pct+'%;height:100%;background:'+s.color+';border-radius:3px;transition:width .3s;"></div></div></div>'+
      '<div style="background:#1e293b;border:1px solid #334155;border-radius:20px;padding:28px;margin-bottom:20px;">'+
      '<h3 style="font-size:1.2rem;font-weight:700;color:#f1f5f9;margin-bottom:8px;">Pregunta '+(s.idx+1)+'</h3>'+
      '<p style="color:#cbd5e1;line-height:1.8;white-space:pre-line;font-size:15px;">'+q.q+'</p></div>'+
      '<div class="mc-opts" style="display:flex;flex-direction:column;gap:10px;">'+
      q.opts.map(function(o,i){return'<button onclick="window._Quiz._answer(\''+id+'\','+i+')" style="width:100%;text-align:left;padding:14px 18px;background:'+s.color+'08;border:1px solid #334155;border-radius:14px;color:#cbd5e1;font-size:14px;cursor:pointer;"><span style="display:inline-block;width:24px;height:24px;border:2px solid #475569;border-radius:50%;text-align:center;line-height:20px;margin-right:10px;font-size:12px;vertical-align:middle;">'+" ABCD"[i]+'</span>'+o+'</button>';}).join('')+
      '</div><div id="qz-fb-'+id+'" style="display:none;margin-top:16px;border-radius:14px;padding:16px 20px;font-size:14px;font-weight:600;"></div>'+
      '<button id="qz-next-'+id+'" onclick="window._Quiz._next(\''+id+'\')" disabled style="display:block;margin:20px 0 0 auto;padding:12px 28px;border-radius:12px;font-weight:700;border:none;cursor:pointer;background:#334155;color:#64748b;">'+(s.idx===s.questions.length-1?'Ver resultados':'Siguiente →')+'</button>';
    },
    _answer:function(id,i){
      var s=this._state[id];if(!s||s.answered)return;
      s.answered=true;var q=s.questions[s.idx],correct=i===q.c;
      if(correct)s.score++;
      var btns=document.querySelectorAll('#qz-'+id+' .mc-opts button');
      for(var b=0;b<btns.length;b++){
        var bi=b;btns[b].disabled=true;
        if(bi===q.c){btns[b].style.background='#065f46';btns[b].style.borderColor='#059669';btns[b].style.color='#d1fae5';}
        else if(bi===i){btns[b].style.background='#7f1d1d';btns[b].style.borderColor='#dc2626';btns[b].style.color='#fecaca';}
        else{btns[b].style.opacity='0.4';}
      }
      var fb=document.getElementById('qz-fb-'+id);
      fb.style.display='block';fb.style.background=correct?'#022c22':'#450a0a';
      fb.style.border='1px solid '+(correct?'#065f46':'#7f1d1d');fb.style.color=correct?'#6ee7b7':'#fca5a5';
      fb.textContent=(correct?'✓ ':'✗ ')+q.f;
      var nb=document.getElementById('qz-next-'+id);
      nb.disabled=false;nb.style.background=s.color;nb.style.color='white';
    },
    _next:function(id){
      var s=this._state[id];if(!s||!s.answered)return;
      if(s.idx<s.questions.length-1){s.idx++;s.answered=false;this._render(id);}
      else{
        var pct=Math.round(s.score/s.questions.length*100),r=document.getElementById('qz-'+id);
        r.innerHTML='<div style="text-align:center;padding:40px 20px;"><div style="width:100px;height:100px;background:'+s.color+'15;border:2px solid '+s.color+'30;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:40px;">🏆</div><h2 style="font-size:2rem;font-weight:800;color:#f1f5f9;margin-bottom:8px;">'+(pct>=80?'¡Excelente!':pct>=50?'¡Buen trabajo!':'¡Sigue practicando!')+'</h2><p style="color:#94a3b8;font-size:1.1rem;margin-bottom:24px;">'+s.score+' de '+s.questions.length+' correctas ('+pct+'%)</p><button onclick="window._Quiz._init(\''+id+'\',window._Quiz._state.'+id+'.questions,window._Quiz._state.'+id+'.color)" style="padding:12px 28px;background:'+s.color+';color:white;border:none;border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;">Reintentar quiz</button></div>';
      }
    }
  };

  function Q(id,qs,color){var s=JSON.stringify(qs);return'<div id="qz-'+id+'" style="max-width:800px;margin:0 auto;padding:0 16px 40px;"></div><script>window._Quiz._init("'+id+'",'+s+',"'+color+'");<\/script>';}
  function C(c,t,d){return'<div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:20px;"><h4 style="color:'+c+';font-weight:700;margin:0 0 8px;font-size:0.95rem;">'+t+'</h4><p style="color:#94a3b8;font-size:0.82rem;margin:0;line-height:1.6;">'+d+'</p></div>';}
  function H(c,icon,title,desc){return'<div style="background:linear-gradient(135deg,'+c+'20,'+c+'05);border:1px solid '+c+'30;border-radius:20px;padding:28px 32px;margin-bottom:28px;position:relative;overflow:hidden;"><div style="position:absolute;top:-40px;right:-40px;width:140px;height:140px;background:'+c+'10;border-radius:50%;"></div><div style="position:relative;z-index:1;"><div style="display:inline-block;background:'+c+'20;color:'+c+';padding:6px 16px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">'+icon+'</div><h2 style="font-size:1.5rem;font-weight:800;color:#f1f5f9;margin:0 0 8px;">'+title+'</h2><p style="color:#94a3b8;font-size:0.9rem;margin:0;">'+desc+'</p></div></div>';}
  function S(n,title){return'<div style="margin-bottom:28px;"><h2 style="font-size:1.3rem;font-weight:700;color:#f1f5f9;margin:0 0 4px;">'+n+'. '+title+'</h2><div style="width:40px;height:3px;background:#f43f5e;border-radius:2px;margin-bottom:12px;"></div>';}
  function E(t,d,good){return'<div style="background:'+(good?'#022c22':'#450a0a')+';border:1px solid '+(good?'#065f46':'#7f1d1d')+';border-radius:12px;padding:16px 20px;margin-bottom:12px;"><p style="color:'+(good?'#6ee7b7':'#fca5a5')+';font-weight:700;font-size:0.85rem;margin:0 0 4px;">'+(good?'✅':'⛔')+' '+t+'</p><p style="color:#94a3b8;font-size:0.85rem;margin:0;">'+d+'</p></div>';}
  function T(col,rows){var h='<table style="width:100%;border-collapse:collapse;font-size:0.88rem;">';rows.forEach(function(r,i){var isH=i===0;h+='<tr style="'+(isH?'background:#1e293b;':'border-bottom:1px solid #334155;')+'">';r.forEach(function(cell){h+='<td style="padding:12px 14px;'+(isH?'color:#f1f5f9;font-weight:700;':'color:#94a3b8;')+'">'+cell+'</td>';});h+='</tr>';});return h+'</table>';}
  function I(t,d){return'<div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:16px;margin-bottom:8px;"><span style="color:#f43f5e;font-weight:700;">'+t+'</span><span style="color:#94a3b8;"> '+d+'</span></div>';}

  // ===== SOCIALES =====
  // Los módulos de Sociales ahora se renderizan dinámicamente como componentes React en csModule1.js, csModule2.js, csModule3.js y csModule4.js.

  // ===== INGLÉS =====
  var ing=sd['ingles'];
  if(ing&&ing.modules){
    ing.modules[0].content='<div style="max-width:800px;margin:0 auto;padding:20px;color:#e2e8f0;">'+hdrs('#0ea5e9','📖','Reading Comprehension','The ICFES evaluates READING, not speaking. Skimming, scanning and inference.')+
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-bottom:24px;">'+
    cards('#0ea5e9','👀','Skimming','Quick reading for MAIN IDEA. 30 seconds.')+
    cards('#0ea5e9','🔍','Scanning','Search SPECIFIC info: names, dates.')+
    cards('#0ea5e9','🧠','Inference','Deduce from text clues.')+'</div>'+
    Q('ing1',[{q:'\"MIND THE GAP\" means:',opts:['Don\'t think','Be careful with the space','Train is late','Need a ticket'],c:1,f:'Mind=be careful. Gap=space.'},{q:'\"Recycling is an easy way to help.\" Main idea:',opts:['Charge for recycling','Recycling helps the environment','All waste to landfills','Only glass'],c:1,f:'Easy and helps = main idea.'},{q:'\"Tired of losing keys? SmartKey finds them!\" Purpose:',opts:['Inform','Persuade to buy','Entertain','Describe'],c:1,f:'Ad trying to sell a product.'}],'#0ea5e9')+'</div>';

    ing.modules[1].content='<div style="max-width:800px;margin:0 auto;padding:20px;color:#e2e8f0;">'+hdrs('#0ea5e9','⏰','Tenses & Connectors','Time signals tell the tense. Connectors show logic.')+
    '<div style="display:grid;gap:10px;margin-bottom:24px;">'+
    its('#0ea5e9','Simple Present','Routines: every day, usually. She works. (3rd +s)')+
    its('#0ea5e9','Simple Past','Completed: yesterday, ago. They visited.')+
    its('#0ea5e9','Present Perfect','Since, for. She has studied for 5 years.')+'</div>'+
    Q('ing2',[{q:'\"Sarah ___ to school every morning.\"',opts:['go','goes','went','going'],c:1,f:'Every morning=routine=Simple Present. 3rd person+s.'},{q:'\"They ___ to Cartagena last summer.\"',opts:['travel','travels','traveled','will travel'],c:2,f:'Last summer=completed=Simple Past.'},{q:'\"I wanted to go, ___ I had no money.\"',opts:['so','but','because','and'],c:1,f:'CONTRAST. But shows contrast.'}],'#0ea5e9')+'</div>';

    ing.modules[2].content='<div style="max-width:800px;margin:0 auto;padding:20px;color:#e2e8f0;">'+hdrs('#0ea5e9','🎯','Exam Strategies','7 parts, ~45 questions, 60 min. Strategy > vocabulary!')+
    '<div style="display:grid;gap:8px;margin-bottom:24px;">'+
    its('#0ea5e9','Part 1','Warning signs. Focus on PURPOSE (warn, prohibit, inform).')+
    its('#0ea5e9','Parts 4-5','Grammar. Look for TIME CLUES and CONNECTORS.')+
    its('#0ea5e9','Parts 6-7','Long texts. Read QUESTIONS FIRST.')+'</div>'+
    Q('ing3',[{q:'Stuck on a question?',opts:['Spend 5 min','Guess and move on','Leave blank','Ask teacher'],c:1,f:'No penalty for wrong answers.'},{q:'Part 1 focus:',opts:['Translate every word','PURPOSE of the sign','Grammar','Word count'],c:1,f:'Focus on communicative purpose.'},{q:'Many unknown words?',opts:['Give up','Use words you DO know','Translate each','Rewrite'],c:1,f:'40-50% is often enough.'}],'#0ea5e9')+'</div>';
  }

  function hdrs(c,icon,title,desc){return'<div style="background:linear-gradient(135deg,'+c+'20,'+c+'05);border:1px solid '+c+'30;border-radius:20px;padding:28px;margin-bottom:24px;"><h2 style="font-size:1.5rem;font-weight:800;color:'+c+';margin-bottom:8px;">'+icon+' '+title+'</h2><p style="color:#94a3b8;line-height:1.8;">'+desc+'</p></div>';}
  function cards(c,icon,title,desc){return'<div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:20px;"><span style="font-size:1.5rem;">'+icon+'</span><h4 style="color:'+c+';font-weight:700;margin:8px 0;">'+title+'</h4><p style="color:#94a3b8;font-size:0.85rem;line-height:1.5;">'+desc+'</p></div>';}
  function its(c,title,desc){return'<div style="background:#1e293b;border:1px solid #334155;border-radius:14px;padding:18px;"><strong style="color:'+c+';">'+title+': </strong><span style="color:#94a3b8;">'+desc+'</span></div>';}
  function tl(c,y,desc){return'<div style="background:#1e293b;border-left:3px solid '+c+';border-radius:0 14px 14px 0;padding:16px;"><strong style="color:'+c+';">'+y+': </strong><span style="color:#94a3b8;font-size:0.9rem;">'+desc+'</span></div>';}

  console.log("✓ moduleContent.js: 6 módulos LC + 4 Soc + 3 Ing cargados.");
})();
