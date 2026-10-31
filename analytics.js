/* First-party consent controller. No tag or Google request before opt-in. */
(() => {
  'use strict';
  const cfg = window.SITE_ANALYTICS;
  if (!cfg) return;
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || location.protocol === 'file:';
  const simulated = local;
  const allowed = simulated || (cfg.enabled && location.origin === cfg.origin);
  const key = cfg.key;
  const lifetime = 180 * 86400000;
  const disable = `ga-disable-${cfg.id}`;
  let choice = null, started = false, active = false, scrolled = false;
  window[disable] = true;
  const copy = {
    ca: {title:'Analítica opcional', text:'Amb el teu permís, Google Analytics mesura visites, origen general i clics per millorar aquesta web. Pots continuar sense acceptar.', accept:'Acceptar', reject:'Rebutjar', settings:'Privacitat i analítica', close:'Tancar', details:'Com funciona', saved:'Preferència desada.', preview:'Previsualització local: les dades es simulen i no s’envien a Google.', policy:"Només carreguem Google Analytics amb el teu consentiment. Pots rebutjar-lo i continuar utilitzant la web. Recull identificadors de cookies i dades tècniques de navegació; no és una mesura anònima. La configuració no activa publicitat, Google Signals ni User-ID. Els nostres esdeveniments exclouen correus, contingut de formularis, informació de salut, consultes i fragments d’URL.", statusOn:'Analítica acceptada.', statusOff:'Analítica rebutjada.', statusNone:'Encara no has triat.', google:'Privacitat de Google', meaning:cfg.kind === 'wc' ? 'Els clics a Maps i «Proposa un WC» indiquen només l’obertura d’un enllaç; no acrediten visites físiques ni propostes enviades.' : 'Els clics a projectes i contacte indiquen interès; no acrediten missatges enviats ni contractacions.'},
    es: {title:'Analítica opcional', text:'Con tu permiso, Google Analytics mide visitas, origen general y clics para mejorar esta web. Puedes continuar sin aceptar.', accept:'Aceptar', reject:'Rechazar', settings:'Privacidad y analítica', close:'Cerrar', details:'Cómo funciona', saved:'Preferencia guardada.', preview:'Vista previa local: los datos se simulan y no se envían a Google.', policy:"Solo cargamos Google Analytics con tu consentimiento. Puedes rechazarlo y seguir utilizando la web. Recoge identificadores de cookies y datos técnicos de navegación; no es una medición anónima. La configuración no activa publicidad, Google Signals ni User-ID. Nuestros eventos excluyen correos, contenido de formularios, información de salud, consultas y fragmentos de URL.", statusOn:'Analítica aceptada.', statusOff:'Analítica rechazada.', statusNone:'Todavía no has elegido.', google:'Privacidad de Google', meaning:cfg.kind === 'wc' ? 'Los clics en Maps y «Propón un baño» solo indican la apertura de un enlace; no acreditan visitas físicas ni propuestas enviadas.' : 'Los clics en proyectos y contacto indican interés; no acreditan mensajes enviados ni contrataciones.'},
    en: {title:'Optional analytics', text:'With your permission, Google Analytics measures visits, general referral sources and clicks to improve this website. You can continue without accepting.', accept:'Accept', reject:'Reject', settings:'Privacy and analytics', close:'Close', details:'How it works', saved:'Preference saved.', preview:'Local preview: data is simulated and is not sent to Google.', policy:"We only load Google Analytics with your consent. You can reject it and continue using the website. It collects cookie identifiers and technical browsing data; this measurement is not anonymous. This configuration does not enable advertising, Google Signals or User-ID. Our events exclude email addresses, form contents, health information, URL queries and fragments.", statusOn:'Analytics accepted.', statusOff:'Analytics rejected.', statusNone:'No choice made yet.', google:'Google privacy policy', meaning:cfg.kind === 'wc' ? 'Clicks on Maps and “Suggest a toilet” only indicate a link being opened; they do not confirm physical visits or submitted suggestions.' : 'Project and contact clicks indicate interest; they do not confirm sent messages or purchases.'}
  };
  Object.assign(copy.ca,{"controller": "Responsable: Marc Monferrer. Contacte: marcmonferrer.ai@gmail.com.", "retention": "Desem la preferència al navegador durant 180 dies i configurem les cookies d’analítica amb un màxim de 180 dies, sense renovar-les a cada visita. Hem configurat la retenció de dades d’usuari i esdeveniments de GA4 a 2 mesos, sense reinici per nova activitat. Google indica que els canvis de retenció tenen efecte al cap de 24 hores i que la supressió és periòdica. Aquest ajust no determina la conservació dels informes agregats estàndard.", "provider": "Els termes espanyols de Google Analytics identifiquen Google Ireland Limited com a proveïdor. Google pot tractar dades fora de l’EEE. Per als seus serveis d’analítica, declara l’ús del marc UE–EUA de privacitat de dades per a les transferències cobertes als EUA i de clàusules contractuals tipus quan correspongui. No es promet allotjament exclusiu a la UE.", "rights": "Pots retirar el consentiment aquí en qualsevol moment: aturarem GA4 i eliminarem les cookies d’analítica d’aquesta web. Això no esborra dades ja rebudes per Google ni afecta el tractament anterior a la retirada. Per exercir els drets d’accés, rectificació, supressió, limitació, oposició o portabilitat quan siguin aplicables, escriu al contacte indicat. També pots reclamar davant l’AEPD.", "partners": "Com Google utilitza les dades", "transfers": "Garanties de transferència de Google", "authority": "Drets i reclamacions a l’AEPD"});
  Object.assign(copy.es,{"controller": "Responsable: Marc Monferrer. Contacto: marcmonferrer.ai@gmail.com.", "retention": "Guardamos la preferencia en el navegador durante 180 días y configuramos las cookies de analítica con un máximo de 180 días, sin renovarlas en cada visita. Hemos configurado la retención de datos de usuario y eventos de GA4 en 2 meses, sin reinicio por nueva actividad. Google indica que los cambios de retención tienen efecto a las 24 horas y que la eliminación es periódica. Este ajuste no determina la conservación de los informes agregados estándar.", "provider": "Los términos españoles de Google Analytics identifican a Google Ireland Limited como proveedor. Google puede tratar datos fuera del EEE. Para sus servicios de analítica, declara el uso del marco UE–EE. UU. de privacidad de datos para las transferencias cubiertas a Estados Unidos y de cláusulas contractuales tipo cuando corresponda. No se promete alojamiento exclusivo en la UE.", "rights": "Puedes retirar el consentimiento aquí en cualquier momento: detendremos GA4 y eliminaremos las cookies de analítica de esta web. Esto no borra datos ya recibidos por Google ni afecta al tratamiento anterior a la retirada. Para ejercer los derechos de acceso, rectificación, supresión, limitación, oposición o portabilidad cuando sean aplicables, escribe al contacto indicado. También puedes reclamar ante la AEPD.", "partners": "Cómo utiliza Google los datos", "transfers": "Garantías de transferencia de Google", "authority": "Derechos y reclamaciones ante la AEPD"});
  Object.assign(copy.en,{"controller": "Controller: Marc Monferrer. Contact: marcmonferrer.ai@gmail.com.", "retention": "We store your preference in the browser for 180 days and configure analytics cookies for a maximum of 180 days, without renewal on each visit. We have configured GA4 user and event data retention to 2 months, without resetting on new activity. Google states that retention changes take effect after 24 hours and deletion is periodic. This setting does not determine retention of standard aggregated reports.", "provider": "The Spanish Google Analytics terms identify Google Ireland Limited as the provider. Google may process data outside the EEA. For its analytics services, Google states that it uses the EU–U.S. Data Privacy Framework for covered transfers to the United States and standard contractual clauses where applicable. EU-only hosting is not promised.", "rights": "You can withdraw consent here at any time: we will stop GA4 and delete this website’s analytics cookies. This does not erase data already received by Google or affect processing before withdrawal. To exercise applicable rights of access, rectification, erasure, restriction, objection or portability, write to the contact above. You can also complain to the Spanish Data Protection Agency (AEPD).", "partners": "How Google uses data", "transfers": "Google data transfer safeguards", "authority": "Rights and complaints at the AEPD"});
  copy.ca.cloudflare='La web publicada també incorpora Cloudflare Web Analytics per mesurar rendiment i ús. És un servei separat de Google Analytics i aquest selector no el controla. A la previsualització local no es carrega el beacon de Cloudflare.';
  copy.es.cloudflare='La web publicada también incorpora Cloudflare Web Analytics para medir rendimiento y uso. Es un servicio separado de Google Analytics y este selector no lo controla. En la vista previa local no se carga el beacon de Cloudflare.';
  copy.en.cloudflare='The published website also includes Cloudflare Web Analytics to measure performance and usage. It is separate from Google Analytics and this control does not manage it. The Cloudflare beacon is not loaded in the local preview.';
  function lang() { return copy[document.documentElement.lang] ? document.documentElement.lang : 'ca'; }
  function read() {
    try { const v=JSON.parse(localStorage.getItem(key)); return v && ['accepted','rejected'].includes(v.value) && v.expires > Date.now() && v.expires <= Date.now()+lifetime ? v.value : null; } catch { return null; }
  }
  function eraseCookies() {
    const names = document.cookie.split(';').map(x=>x.trim().split('=')[0]).filter(x=>x===`${cfg.prefix}_ga` || x.startsWith(`${cfg.prefix}_ga_`));
    const paths = ['/', cfg.cookiePath];
    const parts=location.hostname.split('.');
    const domains=['', ...parts.map((_,i)=>parts.slice(i).join('.'))];
    names.forEach(name=>paths.forEach(path=>domains.forEach(domain=>{
      document.cookie=`${name}=; Max-Age=0; path=${path}${domain ? `; domain=${domain}` : ''}; SameSite=Lax`;
    })));
  }
  function referrer() {
    try { const u=new URL(document.referrer); return ['www.google.com','www.google.es','www.bing.com','www.linkedin.com','monferrerlab.com','marcmonferrer.github.io'].includes(u.hostname) ? u.origin+'/' : ''; } catch { return ''; }
  }
  function page() { return cfg.origin + (cfg.kind === 'wc' ? '/wc-barcelona/' : ({ca:'/',es:'/es/',en:'/en/'}[lang()])); }
  function command(...args) {
    if (!active) return;
    if (simulated) { window.__analyticsPreviewEvents.push(args); return; }
    window.gtag(...args);
  }
  function event(name, params={}) {
    if (choice !== 'accepted' || !allowed || !active) return;
    command('event', name, {send_to:cfg.id, page_location:page(), page_referrer:referrer(), page_title:cfg.title, language:lang(), ...params});
  }
  function start() {
    if (!allowed || active) return;
    active=true; window[disable]=false;
    if (simulated) window.__analyticsPreviewEvents ||= [];
    else {
      window.dataLayer ||= [];
      window.gtag ||= function(){window.dataLayer.push(arguments);};
    }
    if (!started) {
      command('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      command('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      command('js',new Date());
      // Let the config generate the single initial page_view. Do not also send one manually.
      command('config',cfg.id,{send_page_view:true,allow_google_signals:false,allow_ad_personalization_signals:false,page_location:page(),page_referrer:referrer(),page_title:cfg.title,cookie_prefix:cfg.prefix,cookie_path:cfg.cookiePath,cookie_domain:'none',cookie_expires:lifetime/1000,cookie_update:false});
      started=true;
      if (!simulated) {
        const script=document.createElement('script');script.id='consented-analytics-tag';script.async=true;script.referrerPolicy='no-referrer';script.src=`https://www.googletagmanager.com/gtag/js?id=${cfg.id}`;document.head.append(script);
      }
      if (simulated) event('page_view'); // Model the library's automatic event only in local preview.
    }
  }
  function stop() {
    window[disable]=true;active=false;
    document.getElementById('consented-analytics-tag')?.remove();
    // Do not send a denied-consent ping: the opt-out flag blocks the loaded library.
    eraseCookies();
  }
  const banner=document.createElement('section');banner.className='analytics-banner';banner.setAttribute('aria-labelledby','analytics-banner-title');
  banner.innerHTML='<h2 id="analytics-banner-title" data-ac="title"></h2><p data-ac="text"></p><p class="analytics-preview" data-ac="preview"></p><div class="analytics-actions"><button type="button" data-choice="accepted" data-ac="accept"></button><button type="button" data-choice="rejected" data-ac="reject"></button><button type="button" data-open data-ac="details"></button></div>';
  const dialog=document.createElement('dialog');dialog.className='analytics-dialog';dialog.setAttribute('aria-labelledby','analytics-dialog-title');
  dialog.innerHTML='<h2 id="analytics-dialog-title" data-ac="settings"></h2><p data-consent-status></p><p data-ac="policy"></p><p data-ac="meaning"></p><p class="analytics-preview" data-ac="preview"></p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" data-ac="google"></a><div class="analytics-actions"><button type="button" data-choice="accepted" data-ac="accept"></button><button type="button" data-choice="rejected" data-ac="reject"></button><button type="button" data-close data-ac="close"></button></div>';
  for (const key of ['rights','provider','retention','controller']) {
    const paragraph=document.createElement('p');paragraph.dataset.ac=key;
    if(key==='controller')dialog.querySelector('[data-ac="policy"]').before(paragraph);
    else dialog.querySelector('[data-ac="policy"]').after(paragraph);
  }
  const sources=document.createElement('p');sources.className='analytics-sources';
  for(const [key,href] of [['partners','https://policies.google.com/technologies/partner-sites'],['transfers','https://business.safety.google/adsdatatransfers/'],['authority','https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos']]) {
    const link=document.createElement('a');link.href=href;link.target='_blank';link.rel='noopener noreferrer';link.dataset.ac=key;sources.append(link,document.createElement('br'));
  }
  dialog.querySelector('.analytics-actions').before(sources);
  if(cfg.kind==='lab') {const note=document.createElement('p');note.dataset.ac='cloudflare';dialog.querySelector('[data-ac="meaning"]').after(note);}
  const settings=document.createElement('button');settings.type='button';settings.className='analytics-settings';settings.dataset.ac='settings';
  const status=document.createElement('p');status.className='analytics-sr';status.setAttribute('role','status');
  (document.querySelector('header') || document.body.firstElementChild).after(banner);
  (document.querySelector('footer') || document.body).append(settings);document.body.append(dialog,status);
  function translate() {
    const t=copy[lang()];[banner,dialog,settings].forEach(root=>{if(root.dataset.ac) root.textContent=t[root.dataset.ac];root.querySelectorAll('[data-ac]').forEach(n=>n.textContent=t[n.dataset.ac]);});
    document.querySelectorAll('.analytics-preview').forEach(n=>n.hidden=!simulated);
    dialog.querySelector('[data-consent-status]').textContent=t[choice==='accepted'?'statusOn':choice==='rejected'?'statusOff':'statusNone'];
  }
  let opener=settings;
  function open(from) {
    opener=from;translate();dialog.showModal();
    const heading=dialog.querySelector('h2');heading.tabIndex=-1;heading.focus({preventScroll:true});dialog.scrollTop=0;
  }
  settings.addEventListener('click',()=>open(settings));banner.querySelector('[data-open]').addEventListener('click',e=>open(e.currentTarget));
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('keydown',e=>{
    if(e.key!=='Tab')return;
    const controls=[...dialog.querySelectorAll('a[href],button')];
    const first=controls[0],last=controls[controls.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  });
  dialog.addEventListener('close',()=>opener?.focus());
  function choose(value) {
    choice=value;
    try {localStorage.setItem(key,JSON.stringify({value,expires:Date.now()+lifetime}));} catch { /* Memory-only consent when storage is unavailable. */ }
    if(value==='accepted') start();else stop();
    banner.hidden=true;translate();status.textContent=copy[lang()].saved;
    opener=settings;if(dialog.open) dialog.close();settings.focus();
  }
  [banner,dialog].forEach(root=>root.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.choice))));
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  window.addEventListener('storage',e=>{if(e.key===key || e.key===null){choice=read();if(choice==='accepted')start();else stop();banner.hidden=choice!==null;translate();}});
  window.addEventListener('pageshow',()=>{choice=read();if(choice==='accepted')start();else stop();banner.hidden=choice!==null;translate();});
  document.addEventListener('click',e=>{
    const a=e.target.closest('a');if(!a)return;
    if(cfg.kind==='wc') {
      if(a.matches('.maps-link')) { const id=a.closest('article')?.getAttribute('aria-labelledby'); if(window.WC_BARCELONA?.places.some(p=>p.id===id))event('maps_click',{place_id:id}); }
      else if(a.matches('.suggestion-link'))event('suggest_wc_click');
    } else {
      const href=a.getAttribute('href')||'';
      if(['#projectes','#projects'].includes(href))event('projects_click',{target:'projects_section'});
      else if(['#contacte','#contacto','#contact'].includes(href))event('contact_click',{target:'contact_section'});
      else if(href.startsWith('mailto:') || (a.closest('.contact-links') && href.startsWith('/cdn-cgi/l/email-protection#')))event('contact_click',{target:'email'});
      else if(href==='https://www.linkedin.com/in/marcmonferrer/')event('contact_click',{target:'linkedin'});
      else if(a.closest('.project')) {const target=a.closest('.project').getAttribute('aria-labelledby');if(['xray-title','porra-title','tv-title','wc-title'].includes(target))event('project_click',{project_id:target.replace('-title','')});}
    }
  });
  // Production scrolls belong to GA4 Enhanced Measurement. No parallel custom emitter.
  if (simulated) document.addEventListener('scroll',()=>{if(!scrolled && active && window.scrollY+window.innerHeight>=document.documentElement.scrollHeight*.9){scrolled=true;event('scroll',{percent_scrolled:90});}},{passive:true});
  choice=read();if(choice==='accepted')start();else stop();banner.hidden=choice!==null;translate();
})();
