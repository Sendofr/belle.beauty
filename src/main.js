import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
const arrow = '<svg class="icon-arrow" aria-hidden="true" viewBox="0 0 24 24"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const services = [
 { title:'Dermatocosmiatría avanzada', category:'facial', label:'CUIDADO FACIAL', image:'facial', text:'Un cuidado personalizado para acompañar las necesidades de tu piel.', detail:'La piel de cada persona es única. En Belle te escuchamos y evaluamos tus necesidades para orientarte hacia un cuidado facial personalizado. Consultanos qué opciones son adecuadas para vos.' },
 { title:'Masajes profesionales', category:'corporal', label:'BIENESTAR CORPORAL', image:'details', text:'Una pausa para soltar tensiones y reconectar con tu bienestar.', detail:'Regalate una pausa en tu rutina. Consultá con nuestro equipo sobre las opciones de masajes profesionales y encontrá el momento de relajación que estás buscando.' },
 { title:'Depilación láser', category:'laser', label:'TECNOLOGÍA & CUIDADO', image:'facial', text:'Comodidad y cuidado, con atención adaptada a vos.', detail:'Te acompañamos con asesoramiento personalizado sobre depilación láser. La evaluación previa permite conversar sobre tu tipo de piel, las zonas a tratar y los cuidados necesarios antes y después de cada sesión.' },
 { title:'Vacumterapia', category:'corporal', label:'CUIDADO CORPORAL', image:'details', text:'Un tratamiento corporal que empieza por conocer tus necesidades.', detail:'Conocé nuestra propuesta de vacumterapia. Nuestro equipo te orientará sobre el procedimiento, su adecuación a tus necesidades y los cuidados que requiere. La indicación se define mediante una evaluación individual.' },
 { title:'Maderoterapia & linfoescultura', category:'corporal', label:'RITUALES CORPORALES', image:'details', text:'Técnicas corporales y atención en cada detalle.', detail:'Consultá por nuestras sesiones de maderoterapia o linfoescultura. Son tratamientos distintos: te ayudamos a conocer cada propuesta y a elegir según tus necesidades, previa evaluación profesional.' },
 { title:'Pulido corporal', category:'corporal', label:'RENOVACIÓN & BIENESTAR', image:'facial', text:'Un ritual de cuidado para una piel suave y renovada.', detail:'Un espacio de cuidado dedicado a la piel del cuerpo. Consultanos por el pulido corporal, los productos utilizados y las recomendaciones para tu tipo de piel.' }
];
const grid = document.querySelector('#treatment-grid');
function renderServices(filter = 'all') {
 grid.innerHTML = services.map((s,i) => ({...s,i})).filter(s=>filter==='all'||s.category===filter).map(s=>`<article class="treatment-card"><div class="card-image"><img src="/images/${s.image}.png" alt="${s.image==='facial'?'Cuidado facial ilustrativo':'Detalles de un ritual de spa ilustrativo'}" loading="lazy" style="object-position:${s.i%2?'45%':'65%'} center"/><span class="badge">${s.label}</span><span class="card-no">0${s.i+1}</span></div><h3>${s.title}</h3><p>${s.text}</p><div class="card-bottom"><span>ATENCIÓN PERSONALIZADA</span><button data-service="${s.i}" aria-label="Conocer ${s.title}">Conocer más <b>${arrow}</b></button></div></article>`).join('');
}
renderServices();
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
 button.classList.add('active');button.setAttribute('aria-pressed','true');renderServices(button.dataset.filter);
}));
const details=document.querySelector('#detail-dialog');
grid.addEventListener('click',e=>{const button=e.target.closest('[data-service]');if(!button)return;const s=services[Number(button.dataset.service)];document.querySelector('#detail-content').innerHTML=`<span class="eyebrow">${s.label}</span><h2>${s.title}</h2><p>${s.detail}</p><p>La disponibilidad y los detalles de cada sesión se confirman con nuestro equipo.</p><a class="button" href="https://wa.me/595976734429?text=${encodeURIComponent('Me gustaría consultar por '+s.title+'.')}" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <span>${arrow}</span></a>`;details.showModal()});
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()})});
const gallery=document.querySelector('#gallery-dialog');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{const img=document.querySelector('#gallery-image');img.src=button.dataset.image;img.alt=button.dataset.caption;document.querySelector('#gallery-caption').textContent=button.dataset.caption;gallery.showModal()}));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú')}});
document.querySelector('#reserva').addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#name').value.trim();if(!name){document.querySelector('#name').setCustomValidity('Escribí tu nombre para continuar.');document.querySelector('#name').reportValidity();return}const service=document.querySelector('#service').value;const message=`Soy ${name}. Me gustaría consultar disponibilidad para: ${service}. ¿Me pueden ayudar a coordinar un turno?`;window.open('https://wa.me/595976734429?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');const status=document.querySelector('#booking-status');status.replaceChildren();const a=document.createElement('a');a.href='https://wa.me/595976734429?text='+encodeURIComponent(message);a.target='_blank';a.rel='noopener noreferrer';a.textContent='Si WhatsApp no se abrió, continuá aquí.';status.append(a)});
document.querySelector('#name').addEventListener('input',e=>e.target.setCustomValidity(''));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#map-link').href='https://www.google.com/maps/place/Belle+Beauty+%26+Skin/@-27.3243005,-55.8655893,17z/data=!3m1!4b1!4m6!3m5!1s0x945795c0b6d41813:0x989d8b6985b253ef!8m2!3d-27.3243005!4d-55.8655893!16s%2Fg%2F11xhbbgjwy?entry=ttu';
