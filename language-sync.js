/* BEFOR9 shared language preference: loaded after each page's own controller. */
(()=>{'use strict';
const KEY='befor9.language';
const switchIds=['language','tool-lang','ac-lang','s-lang','gp-lang','iv-lang','fp-lang','tm-lang'];
const switcher=switchIds.map(id=>document.getElementById(id)).find(Boolean);
function get(){try{return localStorage.getItem(KEY)==='en'?'en':'ar'}catch{return 'ar'}}
function save(v){try{localStorage.setItem(KEY,v)}catch{}}
function extras(){
 const lang=document.documentElement.lang==='en'?'en':'ar';
 document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]').forEach(el=>{el.placeholder=el.dataset['placeholder'+(lang==='ar'?'Ar':'En')]});
 document.querySelectorAll('[data-title-ar][data-title-en]').forEach(el=>{el.title=el.dataset['title'+(lang==='ar'?'Ar':'En')]});
 const titles={
 'index.html':['BEFOR9 — قبل أول يوم عمل','BEFOR9 — Before Your First Day'],
 'corporate.html':['BEFOR9 | برامج الشركات','BEFOR9 | Business Programs'],
 'toolkit.html':['BEFOR9 | أدوات الطلاب','BEFOR9 | Student Tools'],
 'accounts.html':['BEFOR9 | التسجيل التجريبي','BEFOR9 | Account Preview'],
 'surveys.html':['BEFOR9 | استبيانات الطلاب','BEFOR9 | Student Surveys'],
 'graduation.html':['BEFOR9 | مساعد مشروع التخرج','BEFOR9 | Graduation Project Planner'],
 'interview.html':['BEFOR9 | محاكي المقابلات','BEFOR9 | Interview Simulator'],
 'programs.html':['BEFOR9 | دليل برامج الخريجين','BEFOR9 | Graduate Programs Directory'],
 'tamheer.html':['BEFOR9 | دليل تمهير','BEFOR9 | Tamheer Guide']
 };
 const page=location.pathname.split('/').pop()||'index.html';
 if(titles[page])document.title=titles[page][lang==='en'?1:0];
}
if(!switcher)return;
switcher.addEventListener('click',()=>{save(document.documentElement.lang==='en'?'ar':'en')},true);
if(get()==='en'&&document.documentElement.lang!=='en'){switcher.click()}
extras();
const observer=new MutationObserver(()=>extras());
observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();