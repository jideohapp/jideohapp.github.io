const screens = [
  ['記得歐_即將到期_1080x1920.png','記得歐即將到期畫面','期限提醒','先看今天需要注意的事'],
  ['記得歐_所有物品_1080x1920.png','記得歐所有物品畫面','物品整理','搜尋物品、分類或位置'],
  ['記得歐_空間_1080x1920.png','記得歐空間畫面','存放位置','從房間一路找到櫃子'],
  ['記得歐_補貨清單_1080x1920.png','記得歐補貨清單畫面','補貨清單','用完、待補貨、最近買到'],
  ['記得歐_設定_1080x1920.png','記得歐設定畫面','個人設定','主題、備份與提醒都在這裡']
];
let active = 0;
const image = document.querySelector('#app-screen');
const options = [...document.querySelectorAll('.screen-option')];
function show(index) {
  active = (index + screens.length) % screens.length;
  const [src, alt, kicker, title] = screens[active];
  image.animate([{opacity:.15,transform:'scale(.985)'},{opacity:1,transform:'scale(1)'}],{duration:260});
  image.src=src; image.alt=alt;
  document.querySelector('#screen-kicker').textContent=kicker;
  document.querySelector('#screen-title').textContent=title;
  document.querySelector('#slide-current').textContent=String(active+1).padStart(2,'0');
  options.forEach((option,i)=>option.classList.toggle('active',i===active));
}
options.forEach(option=>option.addEventListener('click',()=>show(Number(option.dataset.index))));
document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>show(active+(button.dataset.direction==='next'?1:-1))));
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.site-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent=new Date().getFullYear();
