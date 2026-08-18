/* 单篇日记/专题页的主题同步与切换（与首页共享 localStorage 'sc-theme'） */
(function(){
  var root=document.documentElement;
  var btn=document.createElement('button');
  btn.className='float-btn theme-toggle';
  btn.title='切换日间 / 夜间';
  document.body.appendChild(btn);
  function apply(t){
    root.setAttribute('data-theme',t);
    btn.textContent=(t==='dark'?'☀️':'🌙');
    try{localStorage.setItem('sc-theme',t);}catch(e){}
  }
  var saved=null;
  try{saved=localStorage.getItem('sc-theme');}catch(e){}
  var sysDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(saved||(sysDark?'dark':'light'));
  btn.addEventListener('click',function(){
    apply(root.getAttribute('data-theme')==='dark'?'light':'dark');
  });
})();
