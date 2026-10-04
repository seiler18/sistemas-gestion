(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={nombre:`Jesús Seiler`,nombreCorto:`J. Seiler`,lema:`Un sistema de gestión también es un sistema`,descripcion:`Diagnóstico de brechas, preparación para la certificación e integración multinorma ISO en Chile. Auditor interno en 9001, 14001, 45001, 27001, 22301 y 20000-1.`,url:`https://seiler18.github.io/sistemas-gestion/`,armazon:`topbar`,logo:`assets/img/avatar.webp`,monograma:`JS`,idioma:`es`},t=[{label:`LinkedIn`,href:`https://www.linkedin.com/in/ichbinseiler/`,icon:`fa-brands fa-linkedin`},{label:`GitHub`,href:`https://github.com/seiler18`,icon:`fa-brands fa-github`}],n=[],r={antetitulo:`ISO 9001 · 14001 · 45001 · 27001 · 22301 · 20000-1`,bajada:`Casi todo lo que decide una certificación es documental: si la evidencia está estructurada y se encuentra, o si está repartida en carpetas que nadie sabe abrir. Levanto esa estructura —en SharePoint, Drive, Dropbox o donde ya trabajen— y la integro con el resto del sistema.`,acciones:[{label:`Ver servicios`,href:`#servicios`,icon:`fa-solid fa-arrow-down`},{label:`Escríbeme`,href:`#contacto`,icon:`fa-solid fa-paper-plane`}],cinta:[{dato:`6`,pie:`normas ISO como auditor interno`},{dato:`Anexo SL`,pie:`el núcleo común de las seis`},{dato:`4`,pie:`plataformas documentales habituales`}],siguiente:`servicios`},i=class{constructor(e,t,n){this.x=e,this.y=t,this.z=n}dot2(e,t){return this.x*e+this.y*t}},a=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],o=class{constructor(e=0){this.grad3=[new i(1,1,0),new i(-1,1,0),new i(1,-1,0),new i(-1,-1,0),new i(1,0,1),new i(-1,0,1),new i(1,0,-1),new i(-1,0,-1),new i(0,1,1),new i(0,-1,1),new i(0,1,-1),new i(0,-1,-1)],this.perm=Array(512),this.gradP=Array(512),e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(let t=0;t<256;t++){let n=t&1?a[t]^e&255:a[t]^e>>8&255;this.perm[t]=this.perm[t+256]=n,this.gradP[t]=this.gradP[t+256]=this.grad3[n%12]}}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,n){return(1-n)*e+n*t}perlin2(e,t){let n=Math.floor(e),r=Math.floor(t);e-=n,t-=r,n&=255,r&=255;let i=this.gradP[n+this.perm[r]].dot2(e,t),a=this.gradP[n+this.perm[r+1]].dot2(e,t-1),o=this.gradP[n+1+this.perm[r]].dot2(e-1,t),s=this.gradP[n+1+this.perm[r+1]].dot2(e-1,t-1),c=this.fade(e);return this.lerp(this.lerp(i,o,c),this.lerp(a,s,c),this.fade(t))}};function s(e,t={}){let n={colorA:`#2563eb`,colorB:`#0e7490`,opacidad:.5,grosor:1,xGap:12,yGap:36,ampX:32,ampY:16,velX:.0125,velY:.005,friccion:.925,tension:.005,maxCursor:100,...t},r=document.createElement(`canvas`),i=r.getContext(`2d`,{alpha:!0});if(!i)return null;r.style.cssText=`position:absolute;inset:0;width:100%;height:100%;display:block`,e.appendChild(r);let a=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,s=Math.min(window.devicePixelRatio||1,2),c=new o(Math.random()),l={x:-10,y:0,lx:0,ly:0,sx:0,sy:0,vs:0,a:0,puesto:!1},u=0,d=0,f=[],p=null,m=0,h=!1;function g(){let t=e.getBoundingClientRect();u=t.width,d=t.height,r.width=Math.max(1,Math.round(u*s)),r.height=Math.max(1,Math.round(d*s)),i.setTransform(s,0,0,s,0,0);let a=i.createLinearGradient(0,0,u,d);a.addColorStop(0,n.colorA),a.addColorStop(1,n.colorB),p=a,f=[];let o=u+200,c=d+30,l=Math.ceil(o/n.xGap),m=Math.ceil(c/n.yGap),h=(u-n.xGap*l)/2,g=(d-n.yGap*m)/2;for(let e=0;e<=l;e++){let t=[];for(let r=0;r<=m;r++)t.push({x:h+n.xGap*e,y:g+n.yGap*r,ox:0,oy:0,cx:0,cy:0,vx:0,vy:0});f.push(t)}}function _(e){let t=Math.max(175,l.vs);for(let r of f)for(let i of r){let r=c.perlin2((i.x+e*n.velX)*.002,(i.y+e*n.velY)*.0015)*12;i.ox=Math.cos(r)*n.ampX,i.oy=Math.sin(r)*n.ampY;let a=Math.hypot(i.x-l.sx,i.y-l.sy);if(a<t){let e=Math.cos(a*.001)*(1-a/t);i.vx+=Math.cos(l.a)*e*t*l.vs*65e-5,i.vy+=Math.sin(l.a)*e*t*l.vs*65e-5}i.vx=(i.vx+(0-i.cx)*n.tension)*n.friccion,i.vy=(i.vy+(0-i.cy)*n.tension)*n.friccion,i.cx=Math.min(n.maxCursor,Math.max(-n.maxCursor,i.cx+i.vx*2)),i.cy=Math.min(n.maxCursor,Math.max(-n.maxCursor,i.cy+i.vy*2))}}function v(){i.clearRect(0,0,u,d),i.globalAlpha=n.opacidad,i.lineWidth=n.grosor,i.strokeStyle=p,i.beginPath();for(let e of f){let t=e.length-1;i.moveTo(e[0].x+e[0].ox,e[0].y+e[0].oy);for(let n=1;n<=t;n++){let r=e[n],a=n!==t;i.lineTo(r.x+r.ox+(a?r.cx:0),r.y+r.oy+(a?r.cy:0))}}i.stroke()}function y(e){l.sx+=(l.x-l.sx)*.1,l.sy+=(l.y-l.sy)*.1;let t=l.x-l.lx,n=l.y-l.ly;l.vs=Math.min(100,l.vs+(Math.hypot(t,n)-l.vs)*.1),l.lx=l.x,l.ly=l.y,l.a=Math.atan2(n,t),_(e),v(),m=requestAnimationFrame(y)}function b(){a||m||!h||document.hidden||(m=requestAnimationFrame(y))}function x(){cancelAnimationFrame(m),m=0}function S(t){if(!h)return;let n=e.getBoundingClientRect();l.x=t.clientX-n.left,l.y=t.clientY-n.top,l.puesto||=(l.sx=l.lx=l.x,l.sy=l.ly=l.y,!0)}let C=0;function w(){clearTimeout(C),C=setTimeout(()=>{g(),a&&(_(0),v())},120)}let T=()=>document.hidden?x():b(),E=new IntersectionObserver(([e])=>{h=e.isIntersecting,h?b():x()});return E.observe(e),g(),a?(_(0),v()):window.addEventListener(`pointermove`,S,{passive:!0}),window.addEventListener(`resize`,w),document.addEventListener(`visibilitychange`,T),{destruir(){x(),clearTimeout(C),E.disconnect(),window.removeEventListener(`pointermove`,S),window.removeEventListener(`resize`,w),document.removeEventListener(`visibilitychange`,T),r.remove()}}}function c(){let t=r.acciones.map((e,t)=>`
        <a class="hero-btn ${t===0?`primario`:`fantasma`}" href="${e.href}"
           ${e.externo?`target="_blank" rel="noopener noreferrer"`:``}>
          ${e.icon?`<i class="${e.icon}" aria-hidden="true"></i>`:``}${e.label}
        </a>
      `).join(``),n=r.cinta.length?`
      <ul class="hero-cinta" aria-label="En cifras" data-anim="subir">
        ${r.cinta.map(e=>`
          <li>
            <span class="hero-cinta-dato">${e.dato}</span>
            <span class="hero-cinta-pie">${e.pie}</span>
          </li>
        `).join(``)}
      </ul>
    `:``,i=r.antetitulo.split(` · `).map((e,t)=>`<span class="norma-chip" style="--i:${t}">${e}</span>`).join(` <span class="norma-sep" aria-hidden="true">·</span> `);return`
    <header class="hero" id="inicio">
      <div class="hero-fondo" aria-hidden="true"></div>
      <!-- Ondas animadas (lib/fondo-waves.js). Las monta initHero() (conducta,
           no render: los componentes de aquí son funciones puras que no tocan
           el DOM). -->
      <div class="hero-ondas" aria-hidden="true"></div>

      <!-- SECUENCIA DE ENTRADA DE LA PORTADA. El atributo data-anim-secuencia
           escalona a los hijos 70ms cada uno (src/lib/reveal.js), y el orden
           del HTML es el orden en el que se quiere que se lean: antetítulo →
           nombre → lema → bajada → botones → cifras. Es lo mismo que se
           leería sin animación, solo que la página lo va marcando. Los seis a
           la vez —lo que había antes, sin animación ninguna en la portada—
           obligan al visitante a decidir por dónde empieza.

           OJO: en este comentario no puede haber comillas invertidas. Está
           DENTRO de un literal de plantilla, y una comilla invertida lo cierra
           ahí mismo: el archivo deja de compilar con un error que señala la
           línea siguiente y no dice nada del comentario. -->
      <div class="hero-contenido" data-anim-secuencia>
        ${i?`<p class="hero-antetitulo" data-anim="subir">${i}</p>`:``}
        <h1 class="hero-titulo" data-anim="subir">${e.nombre}</h1>
        ${e.lema?`<p class="hero-lema" data-anim="subir">«${e.lema}»</p>`:``}
        <p class="hero-bajada" data-anim="subir">${r.bajada}</p>

        <div class="hero-acciones" data-anim="subir">${t}</div>
        ${n}
      </div>

      <!-- Indicador de que hay más abajo. Se oculta en móvil (responsive.css):
           en una pantalla corta cae encima de los botones. -->
      <a class="hero-scroll" href="#${r.siguiente}" aria-label="Ir a la siguiente sección">
        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
      </a>
    </header>
  `}function l(){let e=document.querySelector(`.hero-ondas`);if(!e)return;let t=u(e);window.addEventListener(`tema:cambio`,()=>{t?.destruir(),t=u(e)})}function u(e){let t=getComputedStyle(document.documentElement);return s(e,{colorA:t.getPropertyValue(`--primario-claro`).trim()||`#2563eb`,colorB:t.getPropertyValue(`--acento`).trim()||`#0e7490`,opacidad:parseFloat(t.getPropertyValue(`--opacidad-ondas`))||.5})}function d({id:e,eyebrow:t,titulo:n,subtitulo:r,contenido:i,sinSeparador:a=!1}){return`
    <section class="section" id="${e}">
      ${a?``:`<div class="section-divider" aria-hidden="true"><span></span></div>`}
      <div class="section-inner">
        ${t||n||r?`
        <div class="section-head" data-anim="subir">
          ${t?`<span class="section-eyebrow">${t}</span>`:``}
          ${n?`<h2 class="section-title">${n}</h2>`:``}
          ${n?`<div class="section-rule"></div>`:``}
          ${r?`<p class="section-subtitle">${r}</p>`:``}
        </div>
      `:``}
        ${i}
      </div>
    </section>
  `}function f(e){let t=e.destacados?.length?`
      <ul class="destacados" data-anim-secuencia>
        ${e.destacados.map(e=>`
          <li class="destacado" data-anim="subir">
            ${e.icon?`<i class="${e.icon}" aria-hidden="true"></i>`:``}
            <div>
              <strong>${e.titulo}</strong>
              ${e.texto?`<p>${e.texto}</p>`:``}
            </div>
          </li>
        `).join(``)}
      </ul>
    `:``,n=e.imagen?`
      <figure class="bloque-figura" data-anim="escala">
        <img src="${e.imagen.src}" alt="${e.imagen.alt}" loading="lazy">
        ${e.imagen.pie?`<figcaption>${e.imagen.pie}</figcaption>`:``}
      </figure>
    `:``,r=e.imagen?`
      <div class="bloque-dos-columnas" data-lado="${e.ladoImagen||`derecha`}" data-anim-secuencia>
        <div class="bloque-texto" data-anim="subir">${e.cuerpo}</div>
        ${n}
      </div>
      ${t}
    `:`
      <div class="bloque-texto centrado" data-anim="subir">${e.cuerpo}</div>
      ${t}
    `;return d({...e,contenido:r})}function p(e){let t=e.items||[],n=e=>{let t=e.imagen?`<div class="tarjeta-portada"><img src="${e.imagen.src}" alt="${e.imagen.alt}" loading="lazy"></div>`:e.icon?`<div class="tarjeta-icono"><i class="${e.icon}" aria-hidden="true"></i></div>`:``,n=e.enlace?`
        <p class="tarjeta-accion">
          <a class="btn-linea" href="${e.enlace.href}"
             ${e.enlace.externo?`target="_blank" rel="noopener noreferrer"`:``}>
            ${e.enlace.label}
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      `:``;return`
      <article class="tarjeta" ${e.area?`data-area="${e.area}"`:``} data-anim="subir">
        ${t}
        <div class="tarjeta-cuerpo">
          <h3 class="tarjeta-titulo">${e.titulo}</h3>
          ${e.texto?`<p class="tarjeta-texto">${e.texto}</p>`:``}
          ${n}
        </div>
      </article>
    `},r=``;if(e.filtro){let e=[...new Set(t.map(e=>e.area).filter(Boolean))],n=(e,t,n)=>`
      <button type="button" class="filtro ${e===`todas`?`is-active`:``}"
              data-filtro="${e}">
        ${t} <span class="filtro-cuenta">${n}</span>
      </button>
    `;r=`
      <div class="filtros" role="group" aria-label="Filtrar por área" data-anim="subir">
        ${n(`todas`,`Todas`,t.length)}
        ${e.map(e=>n(e,e,t.filter(t=>t.area===e).length)).join(``)}
      </div>
    `}let i=`
    ${r}
    <!-- data-anim-secuencia: las tarjetas entran escalonadas en vez de todas
         a la vez. Va en la rejilla y no en cada tarjeta porque el retardo lo
         calcula reveal.js con la posición del hijo: añadir una tarjeta no
         obliga a renumerar nada. -->
    <div class="rejilla" data-densidad="${e.densidad||`amplia`}" data-rejilla="${e.id}"
         data-anim-secuencia>
      ${t.map(n).join(``)}
    </div>
    <p class="rejilla-vacia" hidden>No hay nada en esta área todavía.</p>
  `;return d({...e,contenido:i})}function m(){for(let e of document.querySelectorAll(`.filtros`)){let t=e.closest(`.section`),n=t?.querySelector(`.rejilla`),r=t?.querySelector(`.rejilla-vacia`);n&&e.addEventListener(`click`,t=>{let i=t.target.closest(`[data-filtro]`);if(!i)return;for(let t of e.querySelectorAll(`[data-filtro]`))t.classList.toggle(`is-active`,t===i);let a=i.dataset.filtro,o=0;for(let e of n.querySelectorAll(`.tarjeta`)){let t=a===`todas`||e.dataset.area===a;e.hidden=!t,t&&o++}r&&(r.hidden=o>0)})}}var h={eyebrow:`Primer contacto`,titulo:`Contacto`,subtitulo:`La primera conversación no se cobra. Cuénteme qué le están pidiendo y le digo con franqueza si puedo ayudar.`,correo:`ichbinseiler@gmail.com`,whatsapp:`56953292612`,motivos:[`Nos piden certificarnos y no sabemos por dónde partir`,`Ya tenemos una norma y queremos otra`,`Necesitamos un diagnóstico de brechas`,`Todavía no sé qué necesito`],canales:[{label:`Correo`,valor:`ichbinseiler@gmail.com`,href:`mailto:ichbinseiler@gmail.com`,icon:`fa-solid fa-envelope`},{label:`Dónde estoy`,valor:`Puerto Montt, Chile · trabajo a distancia`,href:null,icon:`fa-solid fa-location-dot`}]},g=`https://formsubmit.co/ajax/${h.correo}`,_=h.whatsapp?`https://wa.me/${h.whatsapp}`:``;function v(){let e=h.motivos.map(e=>`<option value="${e}">${e}</option>`).join(``),t=h.canales.map(e=>`
      <li>
        <i class="${e.icon}" aria-hidden="true"></i>
        <div>
          <span class="canal-etiqueta">${e.label}</span>
          ${e.href?`<a href="${e.href}">${e.valor}</a>`:`<span>${e.valor}</span>`}
        </div>
      </li>
    `).join(``),n=`
    <div class="contacto-columnas" data-anim-secuencia>
      <form class="contacto-form" id="formContacto" novalidate data-anim="subir">
        <div class="contacto-grid">
          <div class="campo">
            <label for="cf-nombre">Nombre</label>
            <input type="text" id="cf-nombre" name="nombre" required maxlength="80"
                   autocomplete="name" placeholder="Cómo te llamas">
          </div>
          <div class="campo">
            <label for="cf-correo">Tu correo</label>
            <input type="email" id="cf-correo" name="correo" required maxlength="120"
                   autocomplete="email" placeholder="para poder responderte">
          </div>
          <div class="campo campo-ancho">
            <label for="cf-motivo">Motivo</label>
            <select id="cf-motivo" name="motivo">${e}</select>
          </div>
          <div class="campo campo-ancho">
            <label for="cf-mensaje">Mensaje</label>
            <textarea id="cf-mensaje" name="mensaje" required maxlength="1500" rows="5"
                      placeholder="Cuéntanos qué necesitas"></textarea>
          </div>
        </div>

        <!-- Trampa para bots: FormSubmit descarta el envío si llega rellena.
             Un humano no la ve, así que siempre llega vacía. -->
        <input type="text" name="_honey" class="campo-trampa" tabindex="-1"
               autocomplete="off" aria-hidden="true">

        <div class="contacto-acciones">
          <button type="submit" class="btn primario" id="btnCorreo">
            <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Enviar por correo
          </button>
          ${_?`<button type="button" class="btn fantasma" id="btnWhatsapp">
                   <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Enviar por WhatsApp
                 </button>`:``}
        </div>

        <!-- aria-live: quien use lector de pantalla oye el resultado sin
             tener que ir a buscarlo. -->
        <p class="contacto-aviso" id="avisoContacto" role="status" aria-live="polite"></p>
      </form>

      <aside class="contacto-datos" data-anim="subir">
        <h3>Dónde encontrarnos</h3>
        <ul class="canales">${t}</ul>
      </aside>
    </div>
  `;return d({id:`contacto`,eyebrow:h.eyebrow,titulo:h.titulo,subtitulo:h.subtitulo,contenido:n})}function y(){let e=document.getElementById(`formContacto`);if(!e)return;let t=document.getElementById(`avisoContacto`),n=document.getElementById(`btnCorreo`),r=document.getElementById(`btnWhatsapp`);function i(e,n){t.textContent=e,t.className=`contacto-aviso visible ${n}`}let a=()=>({nombre:e.nombre.value.trim(),correo:e.correo.value.trim(),motivo:e.motivo.value,mensaje:e.mensaje.value.trim()});function o(){return e.checkValidity()?!0:(i(`Faltan datos: revisa el nombre, el correo y el mensaje.`,`malo`),e.querySelector(`:invalid`)?.focus(),!1)}e.addEventListener(`submit`,async t=>{if(t.preventDefault(),!o())return;let r=a();n.disabled=!0,i(`Enviando…`,`nota`);try{let t=await fetch(g,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({Nombre:r.nombre,Correo:r.correo,Motivo:r.motivo,Mensaje:r.mensaje,_subject:`Web · ${r.motivo} — ${r.nombre}`,_template:`table`,_captcha:`false`,_honey:e.elements._honey.value})}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(`HTTP ${t.status}`);if(n.success===`false`||n.success===!1){i(n.message||`El envío quedó pendiente de confirmación.`,`nota`);return}e.reset(),i(`¡Mensaje enviado! Te responderemos al correo que dejaste.`,`ok`)}catch(e){console.error(`No se pudo enviar el formulario:`,e),i(`No se pudo enviar. Escríbenos a ${h.correo}.`,`malo`)}finally{n.disabled=!1}}),r?.addEventListener(`click`,()=>{if(!o())return;let e=a(),t=`Hola, escribo desde la web.\n\nMotivo: ${e.motivo}\nNombre: ${e.nombre}\nCorreo: ${e.correo}\n\n${e.mensaje}`;window.open(`${_}?text=${encodeURIComponent(t)}`,`_blank`,`noopener`),i(`Se abrió WhatsApp con el mensaje listo: solo falta enviarlo.`,`ok`)})}var b={id:`servicios`,eyebrow:`Qué construyo`,titulo:`Servicios`,subtitulo:`Alcance cerrado, entregables definidos y precio fijo. El primero es donde más aporto: casi todo el trabajo de una certificación es documental, y casi nadie lo estructura bien.`,filtro:!1,densidad:`amplia`,items:[{titulo:`Estructura documental del sistema`,texto:`El servicio con el que más ayudo. Levanto la estructura documental completa —jerarquía, codificación, control de versiones, retención y trazabilidad— sobre la herramienta que ya usa: <strong>SharePoint, Google Drive, Dropbox</strong> o la que sea. Es lo que el auditor abre primero y lo que decide si la evidencia se encuentra en treinta segundos o no aparece.`,icon:`fa-solid fa-folder-tree`},{titulo:`Diagnóstico de brechas`,texto:`El estado real del sistema frente a lo que se le va a exigir. Revisión de documentación y de prácticas, informe con los hallazgos priorizados por criticidad y un plan de acción con responsables y plazos. Es el punto de partida honesto: a veces el resultado es que falta menos de lo que se temía.`,icon:`fa-solid fa-magnifying-glass-chart`},{titulo:`Acompañamiento hasta la auditoría`,texto:`Preparación para la auditoría de certificación: qué evidencia hay que tener, cómo se ordena y qué se va a preguntar. No emito certificados —eso solo lo hace un organismo acreditado— pero sé lo que ese organismo viene a buscar, porque me siento del otro lado de la mesa.`,icon:`fa-solid fa-clipboard-check`},{titulo:`Integración multinorma`,texto:`Ya tiene una norma y le piden la segunda. Las seis corren sobre el mismo núcleo —el Anexo SL—: contexto, liderazgo, riesgos, competencia, auditoría interna y revisión por la dirección se construyen <strong>una vez</strong> y quedan disponibles para las siguientes. Aquí es donde se ahorra de verdad.`,icon:`fa-solid fa-layer-group`},{titulo:`Automatización del sistema`,texto:`Evidencia que se recoge sola, indicadores que se calculan solos y tableros que el comité abre sin que nadie arme un Excel la noche anterior. RPA, Power BI e IA aplicados al sistema de gestión. Es el cruce menos poblado del rubro: mucha gente entiende de normas, muy poca sabe automatizarlas.`,icon:`fa-solid fa-robot`}]},x={id:`metodo`,eyebrow:`Cómo trabajo`,titulo:`Cuatro fases, sin sorpresas de alcance`,subtitulo:`El mismo protocolo para todos los encargos, con el alcance y el precio cerrados antes de la primera línea de trabajo.`,cuerpo:`
    <p><strong>1. Conversación inicial, sin costo.</strong> Media hora para
    entender qué le están pidiendo, quién se lo pide y para cuándo. Si lo que
    necesita no es lo que hago, se lo digo ahí y le indico hacia dónde mirar.</p>

    <p><strong>2. Propuesta cerrada.</strong> Alcance escrito, entregables
    concretos, plazo y precio fijo. Sin bolsas de horas: si el trabajo lleva
    más tiempo del previsto, ese es mi problema, no su factura.</p>

    <p><strong>3. Trabajo y entrega.</strong> Documentación de autoría propia,
    adaptada a su organización. Nada de plantillas genéricas con el nombre
    cambiado, que es exactamente lo que un auditor detecta primero.</p>

    <p><strong>4. Traspaso.</strong> El objetivo es que su equipo pueda operar
    el sistema sin mí. Un sistema que depende del consultor se cae en cuanto
    el consultor se va, y eso lo paga usted en la siguiente auditoría.</p>
  `,imagen:null,destacados:[{icon:`fa-solid fa-clock`,titulo:`Disponibilidad real`,texto:`Entre 8 y 10 horas por semana. Eso descarta implementaciones grandes con equipo en terreno, y favorece encargos acotados y bien definidos. Prefiero decirlo antes.`},{icon:`fa-solid fa-scale-balanced`,titulo:`Lo que no hago`,texto:`No audito lo que yo mismo implementé: quien asesora no puede auditar, es el principio de imparcialidad de ISO/IEC 17021-1. Tampoco emito certificados ni sellos de ningún tipo.`},{icon:`fa-solid fa-industry`,titulo:`Dónde soy fuerte y dónde no`,texto:`Mi experiencia vivida es en servicios y sistemas de información. En manufactura, alimentos o construcción el criterio es prestado, y se lo advertiré antes de aceptar el encargo.`}]},S={id:`normas`,eyebrow:`Cobertura`,titulo:`Las seis normas`,subtitulo:`Seis normas, un solo núcleo. El Anexo SL es la estructura común: lo que se construye para una queda disponible para las demás.`,filtro:!1,densidad:`compacta`,items:[{titulo:`ISO 9001:2015 · Calidad`,texto:`Demostrar que sabe quiénes son sus clientes y qué esperan, que sus procesos están definidos y bajo control, y que cuando algo sale mal se corrige y se aprende en vez de repetirse.`,icon:`fa-solid fa-circle-check`},{titulo:`ISO 14001:2015 · Ambiental`,texto:`Demostrar que identificó cómo su operación toca el medio ambiente, que conoce y cumple la normativa que le aplica, y que actúa sobre lo que sí está en su mano cambiar.`,icon:`fa-solid fa-leaf`},{titulo:`ISO 45001:2018 · Seguridad y salud`,texto:`Demostrar que identificó a qué peligros expone a su gente, que los controla con medidas reales, y que los trabajadores participan de verdad en esas decisiones y no solo firman una lista.`,icon:`fa-solid fa-helmet-safety`},{titulo:`ISO/IEC 27001:2022 · Seguridad de la información`,texto:`Demostrar qué información le importa, qué riesgos corre, qué controles decidió aplicar y —esto es lo que más cuesta— por qué descartó los que no aplicó.`,icon:`fa-solid fa-lock`},{titulo:`ISO 22301:2019 · Continuidad del negocio`,texto:`Demostrar cuánto tiempo puede estar caída cada actividad antes de que el daño sea serio, y que tiene un plan probado para volver a operar. Probado: no escrito y guardado.`,icon:`fa-solid fa-tower-broadcast`},{titulo:`ISO/IEC 20000-1:2018 · Servicios de TI`,texto:`Demostrar que los servicios de TI que presta se gestionan y no solo se prestan: qué ofrece, con qué compromisos, y cómo maneja incidentes, cambios y capacidad.`,icon:`fa-solid fa-server`}]},C={id:`recursos`,eyebrow:`Abierto`,titulo:`Recursos abiertos`,subtitulo:`Material de autoría propia, publicado en abierto para que lo use quien quiera. Sin registro y sin versión premium escondida.`,cuerpo:`
    <p>Estoy armando un repositorio público con lo que a mí me habría servido
    tener cuando empecé: el <strong>mapa de correspondencia del Anexo SL</strong>
    entre las seis normas —qué requisito de una cubre cuál de las otras—,
    checklists de auditoría interna, y plantillas base para los documentos que
    todo sistema termina necesitando.</p>

    <p>Sin registro, sin dejar el correo y sin versión «premium» escondida
    detrás. La razón es simple: en este rubro nadie contrata a quien no ha
    visto trabajar, y un repositorio abierto demuestra más que cualquier
    página de servicios.</p>

    <p><strong>Todavía no está publicado.</strong> Prefiero decirlo así antes
    que dejar un enlace a un repositorio a medio llenar. Si quiere que le
    avise cuando esté, escríbame y se lo digo.</p>
  `,imagen:null,destacados:[{icon:`fa-solid fa-triangle-exclamation`,titulo:`Lo que no va a encontrar ahí`,texto:`El texto de las normas. Son obra protegida y las vende el INN: ni copias, ni extractos, ni resúmenes que las reemplacen. Las plantillas son propias y se usan junto a la norma, no en su lugar.`}]},w={id:`quien`,eyebrow:`Quién está detrás`,titulo:`Jesús Seiler`,subtitulo:`Auditor interno en ISO 9001, 14001, 45001, 27001, 22301 y 20000-1.`,cuerpo:`
    <p>No estudié las normas para venderlas: las opero. Gestiono a diario un
    sistema integrado de gestión multinorma, y he preparado y vivido
    auditorías de vigilancia y de recertificación ante un organismo
    certificador internacional. Sé qué preguntan, en qué orden y qué respuesta
    los deja tranquilos.</p>

    <p>Mi recorrido es poco común y por eso sirve: ingeniero civil reconvertido
    a tecnología, analista de sistemas, desarrollo en Java y JavaScript,
    automatización con RPA y tableros en Power BI. Esa mezcla es la que permite
    los dos extremos de esta página — mucha gente entiende de normas y mucha
    gente entiende de plataformas, pero casi nadie hace las dos cosas.</p>

    <p>Donde más aporto es en la <strong>gestión documental</strong>. Hay
    empresas que contratan a una consultora solo para ordenar sus documentos
    de cara a la auditoría, y suele salir un repositorio que funciona el día
    de la revisión y se degrada a los tres meses. Lo que dejo montado está
    pensado para que siga en pie en la auditoría de vigilancia del año
    siguiente, operado por su gente y no por mí.</p>

    <p>Vivo en Puerto Montt y trabajo con empresas de Chile y del resto de
    Latinoamérica. Escribo y trabajo en español; también manejo inglés a nivel
    C1, que es lo que hace falta cuando la casa matriz pregunta.</p>
  `,imagen:null,destacados:[{icon:`fa-solid fa-certificate`,titulo:`Los certificados, a la vista`,texto:`Los cursos de auditor interno que respaldan las seis normas se los muestro si me los pide. En este rubro quien no puede mostrarlos no debería estar ofreciendo el servicio.`},{icon:`fa-solid fa-comments`,titulo:`Sin discurso de ventas`,texto:`Si lo que necesita es una consultora con equipo en terreno, se lo voy a decir en la primera conversación. Cobrar por un encargo que no puedo sostener me sale más caro que perderlo.`}]},T=[{id:`inicio`,label:`Inicio`,short:`Inicio`,icon:`fa-solid fa-house`,render:c},{id:`servicios`,label:`Servicios`,short:`Servicios`,icon:`fa-solid fa-briefcase`,render:()=>p(b)},{id:`metodo`,label:`Cómo trabajo`,short:`Método`,icon:`fa-solid fa-route`,render:()=>f(x),enMenu:!1},{id:`normas`,label:`Las seis normas`,short:`Normas`,icon:`fa-solid fa-book-open`,render:()=>p(S)},{id:`recursos`,label:`Recursos`,short:`Recursos`,icon:`fa-solid fa-box-open`,render:()=>f(C)},{id:`quien`,label:`Quién está detrás`,short:`Quién`,icon:`fa-solid fa-user-tie`,render:()=>f(w)},{id:`contacto`,label:`Contacto`,short:`Contacto`,icon:`fa-solid fa-paper-plane`,render:v}],E=T.filter(e=>e.enMenu!==!1);function D(t){return`
    <a class="${t}" href="#inicio" aria-label="Ir al inicio">
      ${e.logo?`<img class="${t}-logo" src="${e.logo}" alt="Foto de ${e.nombre}" width="40" height="40">`:`<span class="${t}-monograma" aria-hidden="true">${e.monograma}</span>`}
      <span class="${t}-texto">
        <span class="${t}-nombre">${e.nombre}</span>
        ${e.lema?`<span class="${t}-lema">${e.lema}</span>`:``}
      </span>
    </a>
  `}function O(e){return E.map(t=>`
      <li>
        <a class="${e}" href="#${t.id}" data-spy-link="${t.id}">
          <i class="${t.icon}" aria-hidden="true"></i>
          <span class="nav-largo">${t.label}</span>
          <span class="nav-corto">${t.short}</span>
        </a>
      </li>
    `).join(``)}function k(){return n.map(e=>`
      <a class="btn-descarga" href="${e.href}" target="_blank" rel="noopener noreferrer"
         download="${e.download}">
        <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>${e.label}
      </a>
    `).join(``)}function ee(){return t.map(e=>`
      <a href="${e.href}" target="_blank" rel="noopener noreferrer"
         title="${e.label}" aria-label="${e.label}">
        <i class="${e.icon}" aria-hidden="true"></i>
      </a>
    `).join(``)}function A(){return`
    <button class="tema-boton" type="button" data-tema-boton aria-label="Cambiar a modo oscuro">
      <i class="fa-solid fa-moon tema-icono-luna" aria-hidden="true"></i>
      <i class="fa-solid fa-sun tema-icono-sol" aria-hidden="true"></i>
    </button>
  `}function te(){return`
    <header class="topbar">
      <div class="topbar-inner">
        ${D(`marca`)}

        <nav class="topbar-nav" aria-label="Secciones">
          <ul>${O(`nav-link`)}</ul>
        </nav>

        <!-- Fuera del <nav> a propósito: en móvil el <nav> baja a la cinta
             inferior y las descargas y el tema tienen que quedarse arriba. -->
        <div class="topbar-extras">${k()}${A()}</div>
      </div>
    </header>
  `}function j(){return`
    <aside class="sidenav" aria-label="Secciones">
      <div class="sidenav-brand">${D(`marca`)}</div>
      <ul class="sidenav-nav">${O(`nav-link`)}</ul>
      <div class="sidenav-actions">
        ${k()}
        ${A()}
        ${t.length?`<div class="sidenav-social">${ee()}</div>`:``}
      </div>
    </aside>

    <!-- En el armazón 'sidebar' la barra superior queda casi vacía en
         escritorio, pero en móvil es donde vive la marca: la sidebar se
         convierte en barra de iconos y su cabecera desaparece por falta de
         sitio. Sin esto, el logo no se ve en el celular. -->
    <header class="topbar topbar-minima">
      <div class="topbar-inner">
        ${D(`marca marca-movil`)}
        <div class="topbar-extras">${k()}${A()}</div>
      </div>
    </header>
  `}function M(){return e.armazon===`sidebar`?j():te()}var N=`Los servicios descritos son de preparación y acompañamiento: no otorgan ni garantizan la certificación, que corresponde exclusivamente a un organismo de certificación acreditado. El material entregado es de autoría propia, complementa a las normas y no las reemplaza — su adquisición corresponde al organismo nacional de normalización. Nada de lo publicado aquí constituye asesoría legal.`;function P(){let n=E.map(e=>`<li><a href="#${e.id}">${e.label}</a></li>`).join(``),r=t.map(e=>`
      <a href="${e.href}" target="_blank" rel="noopener noreferrer" aria-label="${e.label}">
        <i class="${e.icon}" aria-hidden="true"></i> <span>${e.label}</span>
      </a>
    `).join(``);return`
    <footer class="pie">
      <div class="pie-inner">
        <div class="pie-marca">
          <span class="pie-nombre">${e.nombre}</span>
          ${e.lema?`<p class="pie-lema">«${e.lema}»</p>`:``}
          ${h.correo?`<p class="pie-dato"><a href="mailto:${h.correo}">${h.correo}</a></p>`:``}
        </div>

        <nav class="pie-nav" aria-label="Mapa del sitio">
          <h2>Secciones</h2>
          <ul>${n}</ul>
        </nav>

        ${t.length?`<div class="pie-redes">
                 <h2>Síguenos</h2>
                 <div class="pie-redes-lista">${r}</div>
               </div>`:``}
      </div>

      <!-- DESCARGO: no es letra pequeña de adorno. Vender servicios sobre
           normas crea expectativas, y este párrafo es el blindaje mínimo —
           deja por escrito que no se garantiza la certificación, que la norma
           la compra el cliente al INN y que esto no es asesoría legal. No se
           quita ni se esconde detrás de un enlace. -->
      <p class="pie-descargo">${N}</p>

      <p class="pie-legal">
        © ${e.nombre} ${new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  `}var F=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,I=()=>window.matchMedia(`(hover: hover) and (pointer: fine)`).matches;function ne(e){if(F())return;let t=[...document.querySelectorAll(e)],n=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(n.unobserve(t.target),r(t.target))},{threshold:.6});for(let e of t){let t=/^(\D*)(\d+)(.*)$/.exec(e.textContent.trim());t&&(e.dataset.final=t[2],e.dataset.prefijo=t[1],e.dataset.sufijo=t[3],e.textContent=`${t[1]}0${t[3]}`,n.observe(e))}function r(e){let t=Number(e.dataset.final),{prefijo:n,sufijo:r}=e.dataset,i=Math.min(900+t*6,1400),a=performance.now(),o=s=>{let c=Math.min(Math.max((s-a)/i,0),1),l=1-(1-c)**3;e.textContent=`${n}${Math.round(t*l)}${r}`,c<1&&requestAnimationFrame(o)};requestAnimationFrame(o)}}function re(e){!F()&&I()&&document.addEventListener(`pointermove`,t=>{let n=t.target.closest?.(e);if(!n)return;let r=n.getBoundingClientRect();n.style.setProperty(`--mx`,`${t.clientX-r.left}px`),n.style.setProperty(`--my`,`${t.clientY-r.top}px`)},{passive:!0})}function L(e,{alcance:t=90,fuerza:n=.22,maximo:r=9}={}){if(F()||!I())return;let i=[...document.querySelectorAll(e)];i.length&&document.addEventListener(`pointermove`,e=>{for(let a of i){let i=a.getBoundingClientRect(),o=e.clientX-(i.left+i.width/2),s=e.clientY-(i.top+i.height/2),c=Math.max(Math.abs(o)-i.width/2,0),l=Math.max(Math.abs(s)-i.height/2,0);if(Math.hypot(c,l)>t){a.style.removeProperty(`--mag-x`),a.style.removeProperty(`--mag-y`);continue}let u=e=>Math.max(-r,Math.min(r,e*n));a.style.setProperty(`--mag-x`,`${u(o)}px`),a.style.setProperty(`--mag-y`,`${u(s)}px`)}},{passive:!0})}function R(e){let t=document.querySelector(e);if(!t)return;let n=[...t.querySelectorAll(`:scope > p`)];if(!n.length)return;if(n.forEach((e,t)=>e.style.setProperty(`--i`,t)),t.classList.add(`proceso`),window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window)){t.classList.add(`proceso-activo`);return}let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(t.classList.add(`proceso-activo`),r.disconnect())},{threshold:.2});r.observe(t)}function z({linkSelector:e=`[data-spy-link]`,offset:t=96,pausado:n=()=>!1}={}){let r=new Map;for(let t of document.querySelectorAll(e)){let e=document.getElementById(t.dataset.spyLink);e&&(r.has(e)||r.set(e,{section:e,links:[]}),r.get(e).links.push(t))}let i=[...r.values()];if(!i.length)return()=>{};let a=!1;function o(e){for(let e of i)for(let t of e.links)t.classList.remove(`is-active`),t.removeAttribute(`aria-current`);for(let t of e.links)t.classList.add(`is-active`),t.setAttribute(`aria-current`,`true`)}function s(){if(a=!1,n())return;let e=window.scrollY;if(e+window.innerHeight>=document.documentElement.scrollHeight-4){o(i[i.length-1]);return}let r=e+t,s=i[0];for(let t of i)if(t.section.getBoundingClientRect().top+e<=r)s=t;else break;o(s)}function c(){a||(a=!0,requestAnimationFrame(s))}return window.addEventListener(`scroll`,c,{passive:!0}),window.addEventListener(`resize`,c),window.addEventListener(`load`,c),s(),c}var B=`0px 0px -12% 0px`,V=70,H=6;function U(){let e=document.querySelectorAll(`[data-anim]`);if(!e.length)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window)){for(let t of e)t.classList.add(`anim-visible`);return}let t=e=>{let t=Number(e.dataset.animEspera);if(t)return t;let n=e.parentElement;if(!n||!n.hasAttribute(`data-anim-secuencia`))return 0;let r=[...n.children].filter(e=>e.hasAttribute(`data-anim`)).indexOf(e);return Math.min(r,H)*V},n=new IntersectionObserver((e,n)=>{for(let r of e){if(!r.isIntersecting)continue;let e=r.target,i=t(e);i&&(e.style.transitionDelay=`${i}ms`),e.classList.add(`anim-visible`),n.unobserve(e)}},{rootMargin:B,threshold:.05}),r=e=>{let t=e.target;t.hasAttribute(`data-anim`)&&t.style.transitionDelay&&(t.style.transitionDelay=``)};for(let t of e)t.addEventListener(`transitionend`,r,{once:!0}),n.observe(t)}function W(){let e=document.querySelectorAll(`[data-modal]`);if(e.length){for(let t of e)t.addEventListener(`click`,()=>{let e=document.querySelector(t.dataset.modal);if(!e){console.warn(`Modal no encontrado: ${t.dataset.modal}`);return}e.parentElement!==document.body&&document.body.appendChild(e),e.showModal()});for(let e of document.querySelectorAll(`dialog.modal`)){e.addEventListener(`click`,t=>{let n=e.querySelector(`.modal-caja`);if(!n)return;let r=n.getBoundingClientRect();t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom||e.close()});for(let t of e.querySelectorAll(`[data-cerrar-modal]`))t.addEventListener(`click`,()=>e.close())}}}var G=`seiler18:tema`,K={claro:`#ffffff`,oscuro:`#0a101c`},q=document.documentElement,J=()=>q.dataset.tema===`oscuro`?`oscuro`:`claro`;function Y(e){e===`oscuro`?q.dataset.tema=`oscuro`:delete q.dataset.tema;try{localStorage.setItem(G,e)}catch{}document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,K[e]),X(),window.dispatchEvent(new CustomEvent(`tema:cambio`,{detail:e}))}function X(){let e=J()===`oscuro`;for(let t of document.querySelectorAll(`[data-tema-boton]`))t.setAttribute(`aria-pressed`,String(e)),t.setAttribute(`aria-label`,e?`Cambiar a modo claro`:`Cambiar a modo oscuro`),t.title=e?`Modo claro`:`Modo oscuro`}function ie(e){let t=J()===`oscuro`?`claro`:`oscuro`;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!document.startViewTransition){Y(t);return}let n=e.currentTarget.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2,a=Math.hypot(Math.max(r,innerWidth-r),Math.max(i,innerHeight-i));q.style.setProperty(`--tema-x`,`${r}px`),q.style.setProperty(`--tema-y`,`${i}px`),q.style.setProperty(`--tema-r`,`${a}px`),q.dataset.cambiandoTema=``,document.startViewTransition(()=>Y(t)).finished.finally(()=>delete q.dataset.cambiandoTema)}function ae(){document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,K[J()]),X();for(let e of document.querySelectorAll(`[data-tema-boton]`))e.addEventListener(`click`,ie)}var oe=`(min-width: 992px)`,Z=[`profundidad`,`deslizar`,`barrido`,`cubo`,`cortina`,`iris`],se=220,Q=60,ce=40;function le(){let e=document.getElementById(`contenido`);if(!e)return;let t=[...e.children].filter(e=>e.id);if(t.length<2)return;let n=window.matchMedia(oe),r=window.matchMedia(`(prefers-reduced-motion: reduce)`),i=document.querySelector(`.pie`),a=i&&{padre:i.parentElement,siguiente:i.nextSibling},o=e=>document.querySelector(`[data-spy-link="${e.id}"] .nav-largo`)?.textContent.trim()||e.querySelector(`h1, h2`)?.textContent.trim()||e.id,s=0,c=null,l=null,u=null,d=e=>{let n=(e?document.getElementById(e):null)?.closest(`#contenido > [id]`);return n?t.indexOf(n):-1},f=()=>{let t=getComputedStyle(e).getPropertyValue(`--diapo-duracion`).trim(),n=parseFloat(t);return n?t.endsWith(`ms`)?n:n*1e3:700};function p(){let e=t[s].id;for(let t of document.querySelectorAll(`[data-spy-link]`)){let n=t.dataset.spyLink===e;t.classList.toggle(`is-active`,n),n?t.setAttribute(`aria-current`,`true`):t.removeAttribute(`aria-current`)}t.forEach((e,t)=>e.inert=t!==s),l&&(l.querySelector(`.diapo-num`).textContent=String(s+1).padStart(2,`0`),l.querySelector(`.diapo-nombre`).textContent=o(t[s]),l.querySelectorAll(`[data-ir]`).forEach((e,t)=>{e.classList.toggle(`is-active`,t===s),t===s?e.setAttribute(`aria-current`,`step`):e.removeAttribute(`aria-current`)}),l.querySelector(`[data-paso="-1"]`).disabled=s===0,l.querySelector(`[data-paso="1"]`).disabled=s===t.length-1)}function m(){let e=v(1);t[s].classList.toggle(`con-mas`,e),l?.classList.toggle(`hay-mas`,e)}function h(){if(!c)return;let{desde:t,hacia:n,temporizador:r}=c;clearTimeout(r),t.classList.remove(`saliendo`),n.classList.remove(`entrando`),delete e.dataset.trans,delete e.dataset.dir,c=null}function g(n,{historial:i=`push`,alFinal:a=!1}={}){if(n=Math.max(0,Math.min(t.length-1,n)),n===s&&!c)return;h();let o=t[s],l=t[n],u=n>s?1:-1;if(s=n,l.scrollTop=a?l.scrollHeight:0,l.classList.add(`activa`),o.classList.remove(`activa`),i){let e=`#${l.id}`;location.hash!==e&&history[i===`push`?`pushState`:`replaceState`](null,``,e)}p(),m(),l.focus({preventScroll:!0}),!r.matches&&(e.dataset.trans=Z[n%Z.length],e.dataset.dir=u>0?`adelante`:`atras`,e.style.setProperty(`--dir`,u),o.classList.add(`saliendo`),l.classList.add(`entrando`),c={desde:o,hacia:l,temporizador:setTimeout(h,f()+150)})}function _(){let e=document.createElement(`nav`);return e.className=`diapo-controles`,e.setAttribute(`aria-label`,`Diapositivas`),e.innerHTML=`
      <span class="diapo-mas" aria-hidden="true" title="Hay más contenido abajo">
        <i class="fa-solid fa-arrow-down"></i>
      </span>
      <p class="diapo-contador" aria-live="polite">
        <span class="diapo-num">01</span><span class="diapo-total">/ ${String(t.length).padStart(2,`0`)}</span>
        <span class="diapo-nombre"></span>
      </p>
      <ol class="diapo-marcas">
        ${t.map((e,t)=>`<li><button type="button" data-ir="${t}" aria-label="Ir a ${o(e)}"></button></li>`).join(``)}
      </ol>
      <div class="diapo-flechas">
        <button type="button" data-paso="-1" aria-label="Diapositiva anterior">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button type="button" data-paso="1" aria-label="Diapositiva siguiente">
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    `,e.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&(t.dataset.ir?g(Number(t.dataset.ir)):g(s+Number(t.dataset.paso)))}),document.body.appendChild(e),e}function v(e){let n=t[s];return e>0?n.scrollTop+n.clientHeight<n.scrollHeight-ce:n.scrollTop>2}let y=e=>e?.closest?.(`input, textarea, select, [contenteditable], dialog`);function b(n){document.addEventListener(`click`,e=>{let n=e.target.closest(`a[href^="#"]`);if(!n||e.defaultPrevented)return;let r=decodeURIComponent(n.hash.slice(1)),i=d(r);if(i<0)return;e.preventDefault(),g(i);let a=document.getElementById(r);a!==t[i]&&setTimeout(()=>a.scrollIntoView({block:`start`}),f())},{signal:n}),window.addEventListener(`popstate`,()=>{let e=d(location.hash.slice(1));g(e<0?0:e,{historial:!1})},{signal:n});let r={ultimo:0,hecho:!1,cambio:!1};e.addEventListener(`wheel`,e=>{if(e.ctrlKey||y(e.target))return;let t=performance.now();if(t-r.ultimo>se&&(r.hecho=r.cambio=!1),r.ultimo=t,r.cambio)return e.preventDefault();let n=Math.abs(e.deltaX)>Math.abs(e.deltaY),i=n?e.deltaX:e.deltaY;if(!(Math.abs(i)<4)){if(!n&&v(i)){r.hecho=!0;return}e.preventDefault(),!(r.hecho||c)&&(r.hecho=r.cambio=!0,g(s+Math.sign(i),{historial:`replace`,alFinal:i<0&&!n}))}},{passive:!1,signal:n}),document.addEventListener(`keydown`,e=>{if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||y(e.target)||document.querySelector(`dialog[open]`))return;let n=e.target.closest?.(`button, a`),r=0;switch(e.key){case`ArrowRight`:r=1;break;case`ArrowLeft`:r=-1;break;case`PageDown`:r=+!v(1);break;case`PageUp`:r=v(-1)?0:-1;break;case` `:if(n)return;r=v(e.shiftKey?-1:1)?0:e.shiftKey?-1:1;break;case`Home`:e.preventDefault(),g(0);return;case`End`:e.preventDefault(),g(t.length-1);return;default:return}r&&(e.preventDefault(),c||g(s+r,{historial:`replace`}))},{signal:n});let i=null;e.addEventListener(`touchstart`,e=>{let t=e.touches[0];i=e.touches.length===1&&!y(e.target)?{x:t.clientX,y:t.clientY}:null},{passive:!0,signal:n}),e.addEventListener(`touchend`,e=>{if(!i)return;let t=e.changedTouches[0],n=t.clientX-i.x,r=t.clientY-i.y;i=null,Math.abs(n)>Q&&Math.abs(n)>Math.abs(r)*1.5&&g(s+(n<0?1:-1),{historial:`replace`})},{passive:!0,signal:n}),e.addEventListener(`scroll`,m,{capture:!0,passive:!0,signal:n}),window.addEventListener(`resize`,m,{passive:!0,signal:n}),window.addEventListener(`load`,m,{signal:n}),e.addEventListener(`animationend`,e=>{c&&e.target===c.hacia&&h()},{signal:n})}function x(){let e=d(location.hash.slice(1));e<0&&(e=0,t.forEach((t,n)=>{t.getBoundingClientRect().top<=120&&(e=n)})),document.body.dataset.diapositivas=``;for(let e of t)e.classList.add(`diapo`),e.tabIndex=-1;i&&t[t.length-1].appendChild(i),window.scrollTo(0,0),s=e,t[s].classList.add(`activa`),l=_(),p(),m(),u=new AbortController,b(u.signal)}function S(){h(),u?.abort(),l?.remove(),l=null;for(let e of t)e.classList.remove(`diapo`,`activa`),e.removeAttribute(`tabindex`),e.inert=!1;i&&a&&a.padre.insertBefore(i,a.siguiente),delete document.body.dataset.diapositivas,t[s].scrollIntoView({block:`start`,behavior:`instant`})}n.matches&&x(),n.addEventListener(`change`,e=>e.matches?x():S())}var ue=document.getElementById(`app`);document.body.dataset.armazon=e.armazon,ue.innerHTML=`
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  ${M()}
  <div class="app-main">
    <main id="contenido">
      ${T.map(e=>e.render()).join(`
`)}
    </main>
    ${P()}
  </div>
`;var $=z({offset:96,pausado:()=>document.body.hasAttribute(`data-diapositivas`)});ae(),U(),l(),le(),ne(`.hero-cinta-dato`),re(`.tarjeta, .destacado`),L(`.hero-btn`),R(`#metodo .bloque-texto`),W(),m(),y(),window.addEventListener(`load`,$),document.addEventListener(`click`,e=>{e.target.closest(`[data-filtro]`)&&setTimeout($,60)});