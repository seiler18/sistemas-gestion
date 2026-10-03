(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={nombre:`Jesús Seiler`,nombreCorto:`J. Seiler`,lema:`Un sistema de gestión también es un sistema`,descripcion:`Diagnóstico de brechas, preparación para la certificación e integración multinorma ISO en Chile. Auditor interno en 9001, 14001, 45001, 27001, 22301 y 20000-1.`,url:`https://seiler18.github.io/sistemas-gestion/`,armazon:`topbar`,logo:`assets/img/avatar.webp`,monograma:`JS`,idioma:`es`},t=[{label:`LinkedIn`,href:`https://www.linkedin.com/in/ichbinseiler/`,icon:`fa-brands fa-linkedin`},{label:`GitHub`,href:`https://github.com/seiler18`,icon:`fa-brands fa-github`}],n=[],r={antetitulo:`ISO 9001 · 14001 · 45001 · 27001 · 22301 · 20000-1`,bajada:`Casi todo lo que decide una certificación es documental: si la evidencia está estructurada y se encuentra, o si está repartida en carpetas que nadie sabe abrir. Levanto esa estructura —en SharePoint, Drive, Dropbox o donde ya trabajen— y la integro con el resto del sistema.`,acciones:[{label:`Ver servicios`,href:`#servicios`,icon:`fa-solid fa-arrow-down`},{label:`Escríbeme`,href:`#contacto`,icon:`fa-solid fa-paper-plane`}],cinta:[{dato:`6`,pie:`normas ISO como auditor interno`},{dato:`Anexo SL`,pie:`el núcleo común de las seis`},{dato:`4`,pie:`plataformas documentales habituales`}],siguiente:`servicios`};function i(e,t={}){let n={radio:1.5,separacion:14,alcance:500,abombado:67,ondulacion:0,colorA:`#a855f7`,colorB:`#b497cf`,opacidad:.35,...t},r=document.createElement(`canvas`),i=r.getContext(`2d`,{alpha:!0});if(!i)return null;r.style.cssText=`position:absolute;inset:0;width:100%;height:100%;display:block`,e.appendChild(r);let a=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,o=a?0:n.ondulacion,s=Math.min(window.devicePixelRatio||1,2),c=0,l=0,u=[],d={x:-9999,y:-9999,prevX:-9999,prevY:-9999,velocidad:0},f=0,p=0;function m(){let e=n.radio+n.separacion,t=Math.floor(c/e),r=Math.floor(l/e),i=c%e/2,a=l%e/2;u=Array(t*r);let o=0;for(let n=0;n<r;n++)for(let r=0;r<t;r++){let t=i+r*e+e/2,s=a+n*e+e/2;u[o++]={ax:t,ay:s,sx:t,sy:s}}}function h(){let{clientWidth:t,clientHeight:n}=e;t&&n&&(c=t,l=n,r.width=c*s,r.height=l*s,i.setTransform(s,0,0,s,0,0),m(),g())}function g(){p++;let e=p*.02,t=n.alcance*n.alcance,r=n.radio/2,a=Math.min(d.velocidad/5,1);f+=(a-f)*.06,f<.001&&(f=0),i.clearRect(0,0,c,l);let s=i.createLinearGradient(0,0,c,l);s.addColorStop(0,n.colorA),s.addColorStop(1,n.colorB),i.globalAlpha=n.opacidad,i.fillStyle=s,i.beginPath();let m=f>0||o>0;for(let a of u){let s=d.x-a.ax,c=d.y-a.ay,l=s*s+c*c;if(l<t&&f>.01){let e=1-Math.sqrt(l)/n.alcance,t=e*e*n.abombado*f,r=Math.atan2(c,s);a.sx+=(a.ax-Math.cos(r)*t-a.sx)*.15,a.sy+=(a.ay-Math.sin(r)*t-a.sy)*.15}else a.sx+=(a.ax-a.sx)*.1,a.sy+=(a.ay-a.sy)*.1;!m&&(Math.abs(a.sx-a.ax)>.05||Math.abs(a.sy-a.ay)>.05)&&(m=!0);let u=a.sx,p=a.sy;o>0&&(p+=Math.sin(a.ax*.03+e)*o,u+=Math.cos(a.ay*.03+e*.7)*o*.5),i.moveTo(u+r,p),i.arc(u,p,r,0,Math.PI*2)}return i.fill(),i.globalAlpha=1,m}let _=0,v=!0,y=()=>{_=0,g()&&v&&!document.hidden&&(_=requestAnimationFrame(y))},b=()=>{!_&&v&&!document.hidden&&!a&&(_=requestAnimationFrame(y))},x=()=>{cancelAnimationFrame(_),_=0},S=t=>{let n=e.getBoundingClientRect();d.x=t.clientX-n.left,d.y=t.clientY-n.top,b()},C=setInterval(()=>{let e=d.prevX-d.x,t=d.prevY-d.y;d.velocidad+=(Math.hypot(e,t)-d.velocidad)*.5,d.velocidad<.001&&(d.velocidad=0),d.prevX=d.x,d.prevY=d.y},20);a||window.addEventListener(`pointermove`,S,{passive:!0});let w=0,T=()=>{clearTimeout(w),w=setTimeout(h,100)};window.addEventListener(`resize`,T);let E=new IntersectionObserver(([e])=>{v=e.isIntersecting,v?b():x()});E.observe(e);let D=()=>document.hidden?x():b();return document.addEventListener(`visibilitychange`,D),h(),o>0&&b(),{destruir(){x(),clearInterval(C),clearTimeout(w),E.disconnect(),window.removeEventListener(`pointermove`,S),window.removeEventListener(`resize`,T),document.removeEventListener(`visibilitychange`,D),r.remove()}}}function a(){let t=r.acciones.map((e,t)=>`
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
      <!-- Matriz de puntos animada. La monta initHero() (conducta, no render:
           los componentes de aquí son funciones puras que no tocan el DOM). -->
      <div class="hero-puntos" aria-hidden="true"></div>

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
  `}function o(){let e=document.querySelector(`.hero-puntos`);if(!e)return;let t=getComputedStyle(document.documentElement);i(e,{colorA:t.getPropertyValue(`--primario-claro`).trim()||`#8fa2ff`,colorB:t.getPropertyValue(`--acento`).trim()||`#2ee6b0`,opacidad:.45,ondulacion:0})}function s({id:e,eyebrow:t,titulo:n,subtitulo:r,contenido:i,sinSeparador:a=!1}){return`
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
  `}function c(e){let t=e.destacados?.length?`
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
    `;return s({...e,contenido:r})}function l(e){let t=e.items||[],n=e=>{let t=e.imagen?`<div class="tarjeta-portada"><img src="${e.imagen.src}" alt="${e.imagen.alt}" loading="lazy"></div>`:e.icon?`<div class="tarjeta-icono"><i class="${e.icon}" aria-hidden="true"></i></div>`:``,n=e.enlace?`
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
  `;return s({...e,contenido:i})}function u(){for(let e of document.querySelectorAll(`.filtros`)){let t=e.closest(`.section`),n=t?.querySelector(`.rejilla`),r=t?.querySelector(`.rejilla-vacia`);n&&e.addEventListener(`click`,t=>{let i=t.target.closest(`[data-filtro]`);if(!i)return;for(let t of e.querySelectorAll(`[data-filtro]`))t.classList.toggle(`is-active`,t===i);let a=i.dataset.filtro,o=0;for(let e of n.querySelectorAll(`.tarjeta`)){let t=a===`todas`||e.dataset.area===a;e.hidden=!t,t&&o++}r&&(r.hidden=o>0)})}}var d={eyebrow:`Primer contacto`,titulo:`Contacto`,subtitulo:`La primera conversación no se cobra. Cuénteme qué le están pidiendo y le digo con franqueza si puedo ayudar.`,correo:`ichbinseiler@gmail.com`,whatsapp:`56953292612`,motivos:[`Nos piden certificarnos y no sabemos por dónde partir`,`Ya tenemos una norma y queremos otra`,`Necesitamos un diagnóstico de brechas`,`Todavía no sé qué necesito`],canales:[{label:`Correo`,valor:`ichbinseiler@gmail.com`,href:`mailto:ichbinseiler@gmail.com`,icon:`fa-solid fa-envelope`},{label:`Dónde estoy`,valor:`Puerto Montt, Chile · trabajo a distancia`,href:null,icon:`fa-solid fa-location-dot`}]},f=`https://formsubmit.co/ajax/${d.correo}`,p=d.whatsapp?`https://wa.me/${d.whatsapp}`:``;function m(){let e=d.motivos.map(e=>`<option value="${e}">${e}</option>`).join(``),t=d.canales.map(e=>`
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
          ${p?`<button type="button" class="btn fantasma" id="btnWhatsapp">
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
  `;return s({id:`contacto`,eyebrow:d.eyebrow,titulo:d.titulo,subtitulo:d.subtitulo,contenido:n})}function h(){let e=document.getElementById(`formContacto`);if(!e)return;let t=document.getElementById(`avisoContacto`),n=document.getElementById(`btnCorreo`),r=document.getElementById(`btnWhatsapp`);function i(e,n){t.textContent=e,t.className=`contacto-aviso visible ${n}`}let a=()=>({nombre:e.nombre.value.trim(),correo:e.correo.value.trim(),motivo:e.motivo.value,mensaje:e.mensaje.value.trim()});function o(){return e.checkValidity()?!0:(i(`Faltan datos: revisa el nombre, el correo y el mensaje.`,`malo`),e.querySelector(`:invalid`)?.focus(),!1)}e.addEventListener(`submit`,async t=>{if(t.preventDefault(),!o())return;let r=a();n.disabled=!0,i(`Enviando…`,`nota`);try{let t=await fetch(f,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({Nombre:r.nombre,Correo:r.correo,Motivo:r.motivo,Mensaje:r.mensaje,_subject:`Web · ${r.motivo} — ${r.nombre}`,_template:`table`,_captcha:`false`,_honey:e.elements._honey.value})}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(`HTTP ${t.status}`);if(n.success===`false`||n.success===!1){i(n.message||`El envío quedó pendiente de confirmación.`,`nota`);return}e.reset(),i(`¡Mensaje enviado! Te responderemos al correo que dejaste.`,`ok`)}catch(e){console.error(`No se pudo enviar el formulario:`,e),i(`No se pudo enviar. Escríbenos a ${d.correo}.`,`malo`)}finally{n.disabled=!1}}),r?.addEventListener(`click`,()=>{if(!o())return;let e=a(),t=`Hola, escribo desde la web.\n\nMotivo: ${e.motivo}\nNombre: ${e.nombre}\nCorreo: ${e.correo}\n\n${e.mensaje}`;window.open(`${p}?text=${encodeURIComponent(t)}`,`_blank`,`noopener`),i(`Se abrió WhatsApp con el mensaje listo: solo falta enviarlo.`,`ok`)})}var g={id:`servicios`,eyebrow:`Qué construyo`,titulo:`Servicios`,subtitulo:`Alcance cerrado, entregables definidos y precio fijo. El primero es donde más aporto: casi todo el trabajo de una certificación es documental, y casi nadie lo estructura bien.`,filtro:!1,densidad:`amplia`,items:[{titulo:`Estructura documental del sistema`,texto:`El servicio con el que más ayudo. Levanto la estructura documental completa —jerarquía, codificación, control de versiones, retención y trazabilidad— sobre la herramienta que ya usa: <strong>SharePoint, Google Drive, Dropbox</strong> o la que sea. Es lo que el auditor abre primero y lo que decide si la evidencia se encuentra en treinta segundos o no aparece.`,icon:`fa-solid fa-folder-tree`},{titulo:`Diagnóstico de brechas`,texto:`El estado real del sistema frente a lo que se le va a exigir. Revisión de documentación y de prácticas, informe con los hallazgos priorizados por criticidad y un plan de acción con responsables y plazos. Es el punto de partida honesto: a veces el resultado es que falta menos de lo que se temía.`,icon:`fa-solid fa-magnifying-glass-chart`},{titulo:`Acompañamiento hasta la auditoría`,texto:`Preparación para la auditoría de certificación: qué evidencia hay que tener, cómo se ordena y qué se va a preguntar. No emito certificados —eso solo lo hace un organismo acreditado— pero sé lo que ese organismo viene a buscar, porque me siento del otro lado de la mesa.`,icon:`fa-solid fa-clipboard-check`},{titulo:`Integración multinorma`,texto:`Ya tiene una norma y le piden la segunda. Las seis corren sobre el mismo núcleo —el Anexo SL—: contexto, liderazgo, riesgos, competencia, auditoría interna y revisión por la dirección se construyen <strong>una vez</strong> y quedan disponibles para las siguientes. Aquí es donde se ahorra de verdad.`,icon:`fa-solid fa-layer-group`},{titulo:`Automatización del sistema`,texto:`Evidencia que se recoge sola, indicadores que se calculan solos y tableros que el comité abre sin que nadie arme un Excel la noche anterior. RPA, Power BI e IA aplicados al sistema de gestión. Es el cruce menos poblado del rubro: mucha gente entiende de normas, muy poca sabe automatizarlas.`,icon:`fa-solid fa-robot`}]},_={id:`metodo`,eyebrow:`Cómo trabajo`,titulo:`Cuatro fases, sin sorpresas de alcance`,subtitulo:`El mismo protocolo para todos los encargos, con el alcance y el precio cerrados antes de la primera línea de trabajo.`,cuerpo:`
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
  `,imagen:null,destacados:[{icon:`fa-solid fa-clock`,titulo:`Disponibilidad real`,texto:`Entre 8 y 10 horas por semana. Eso descarta implementaciones grandes con equipo en terreno, y favorece encargos acotados y bien definidos. Prefiero decirlo antes.`},{icon:`fa-solid fa-scale-balanced`,titulo:`Lo que no hago`,texto:`No audito lo que yo mismo implementé: quien asesora no puede auditar, es el principio de imparcialidad de ISO/IEC 17021-1. Tampoco emito certificados ni sellos de ningún tipo.`},{icon:`fa-solid fa-industry`,titulo:`Dónde soy fuerte y dónde no`,texto:`Mi experiencia vivida es en servicios y sistemas de información. En manufactura, alimentos o construcción el criterio es prestado, y se lo advertiré antes de aceptar el encargo.`}]},v={id:`normas`,eyebrow:`Cobertura`,titulo:`Las seis normas`,subtitulo:`Seis normas, un solo núcleo. El Anexo SL es la estructura común: lo que se construye para una queda disponible para las demás.`,filtro:!1,densidad:`compacta`,items:[{titulo:`ISO 9001:2015 · Calidad`,texto:`Demostrar que sabe quiénes son sus clientes y qué esperan, que sus procesos están definidos y bajo control, y que cuando algo sale mal se corrige y se aprende en vez de repetirse.`,icon:`fa-solid fa-circle-check`},{titulo:`ISO 14001:2015 · Ambiental`,texto:`Demostrar que identificó cómo su operación toca el medio ambiente, que conoce y cumple la normativa que le aplica, y que actúa sobre lo que sí está en su mano cambiar.`,icon:`fa-solid fa-leaf`},{titulo:`ISO 45001:2018 · Seguridad y salud`,texto:`Demostrar que identificó a qué peligros expone a su gente, que los controla con medidas reales, y que los trabajadores participan de verdad en esas decisiones y no solo firman una lista.`,icon:`fa-solid fa-helmet-safety`},{titulo:`ISO/IEC 27001:2022 · Seguridad de la información`,texto:`Demostrar qué información le importa, qué riesgos corre, qué controles decidió aplicar y —esto es lo que más cuesta— por qué descartó los que no aplicó.`,icon:`fa-solid fa-lock`},{titulo:`ISO 22301:2019 · Continuidad del negocio`,texto:`Demostrar cuánto tiempo puede estar caída cada actividad antes de que el daño sea serio, y que tiene un plan probado para volver a operar. Probado: no escrito y guardado.`,icon:`fa-solid fa-tower-broadcast`},{titulo:`ISO/IEC 20000-1:2018 · Servicios de TI`,texto:`Demostrar que los servicios de TI que presta se gestionan y no solo se prestan: qué ofrece, con qué compromisos, y cómo maneja incidentes, cambios y capacidad.`,icon:`fa-solid fa-server`}]},y={id:`recursos`,eyebrow:`Abierto`,titulo:`Recursos abiertos`,subtitulo:`Material de autoría propia, publicado en abierto para que lo use quien quiera. Sin registro y sin versión premium escondida.`,cuerpo:`
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
  `,imagen:null,destacados:[{icon:`fa-solid fa-triangle-exclamation`,titulo:`Lo que no va a encontrar ahí`,texto:`El texto de las normas. Son obra protegida y las vende el INN: ni copias, ni extractos, ni resúmenes que las reemplacen. Las plantillas son propias y se usan junto a la norma, no en su lugar.`}]},b={id:`quien`,eyebrow:`Quién está detrás`,titulo:`Jesús Seiler`,subtitulo:`Auditor interno en ISO 9001, 14001, 45001, 27001, 22301 y 20000-1.`,cuerpo:`
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
  `,imagen:null,destacados:[{icon:`fa-solid fa-certificate`,titulo:`Los certificados, a la vista`,texto:`Los cursos de auditor interno que respaldan las seis normas se los muestro si me los pide. En este rubro quien no puede mostrarlos no debería estar ofreciendo el servicio.`},{icon:`fa-solid fa-comments`,titulo:`Sin discurso de ventas`,texto:`Si lo que necesita es una consultora con equipo en terreno, se lo voy a decir en la primera conversación. Cobrar por un encargo que no puedo sostener me sale más caro que perderlo.`}]},x=[{id:`inicio`,label:`Inicio`,short:`Inicio`,icon:`fa-solid fa-house`,render:a},{id:`servicios`,label:`Servicios`,short:`Servicios`,icon:`fa-solid fa-briefcase`,render:()=>l(g)},{id:`metodo`,label:`Cómo trabajo`,short:`Método`,icon:`fa-solid fa-route`,render:()=>c(_),enMenu:!1},{id:`normas`,label:`Las seis normas`,short:`Normas`,icon:`fa-solid fa-book-open`,render:()=>l(v)},{id:`recursos`,label:`Recursos`,short:`Recursos`,icon:`fa-solid fa-box-open`,render:()=>c(y)},{id:`quien`,label:`Quién está detrás`,short:`Quién`,icon:`fa-solid fa-user-tie`,render:()=>c(b)},{id:`contacto`,label:`Contacto`,short:`Contacto`,icon:`fa-solid fa-paper-plane`,render:m}],S=x.filter(e=>e.enMenu!==!1);function C(t){return`
    <a class="${t}" href="#inicio" aria-label="Ir al inicio">
      ${e.logo?`<img class="${t}-logo" src="${e.logo}" alt="Foto de ${e.nombre}" width="40" height="40">`:`<span class="${t}-monograma" aria-hidden="true">${e.monograma}</span>`}
      <span class="${t}-texto">
        <span class="${t}-nombre">${e.nombre}</span>
        ${e.lema?`<span class="${t}-lema">${e.lema}</span>`:``}
      </span>
    </a>
  `}function w(e){return S.map(t=>`
      <li>
        <a class="${e}" href="#${t.id}" data-spy-link="${t.id}">
          <i class="${t.icon}" aria-hidden="true"></i>
          <span class="nav-largo">${t.label}</span>
          <span class="nav-corto">${t.short}</span>
        </a>
      </li>
    `).join(``)}function T(){return n.map(e=>`
      <a class="btn-descarga" href="${e.href}" target="_blank" rel="noopener noreferrer"
         download="${e.download}">
        <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>${e.label}
      </a>
    `).join(``)}function E(){return t.map(e=>`
      <a href="${e.href}" target="_blank" rel="noopener noreferrer"
         title="${e.label}" aria-label="${e.label}">
        <i class="${e.icon}" aria-hidden="true"></i>
      </a>
    `).join(``)}function D(){return`
    <header class="topbar">
      <div class="topbar-inner">
        ${C(`marca`)}

        <nav class="topbar-nav" aria-label="Secciones">
          <ul>${w(`nav-link`)}</ul>
        </nav>

        <!-- Fuera del <nav> a propósito: en móvil el <nav> baja a la cinta
             inferior y las descargas tienen que quedarse arriba. -->
        ${n.length?`<div class="topbar-extras">${T()}</div>`:``}
      </div>
    </header>
  `}function O(){return`
    <aside class="sidenav" aria-label="Secciones">
      <div class="sidenav-brand">${C(`marca`)}</div>
      <ul class="sidenav-nav">${w(`nav-link`)}</ul>
      <div class="sidenav-actions">
        ${T()}
        ${t.length?`<div class="sidenav-social">${E()}</div>`:``}
      </div>
    </aside>

    <!-- En el armazón 'sidebar' la barra superior queda casi vacía en
         escritorio, pero en móvil es donde vive la marca: la sidebar se
         convierte en barra de iconos y su cabecera desaparece por falta de
         sitio. Sin esto, el logo no se ve en el celular. -->
    <header class="topbar topbar-minima">
      <div class="topbar-inner">
        ${C(`marca marca-movil`)}
        ${n.length?`<div class="topbar-extras">${T()}</div>`:``}
      </div>
    </header>
  `}function k(){return e.armazon===`sidebar`?O():D()}var A=`Los servicios descritos son de preparación y acompañamiento: no otorgan ni garantizan la certificación, que corresponde exclusivamente a un organismo de certificación acreditado. El material entregado es de autoría propia, complementa a las normas y no las reemplaza — su adquisición corresponde al organismo nacional de normalización. Nada de lo publicado aquí constituye asesoría legal.`;function j(){let n=S.map(e=>`<li><a href="#${e.id}">${e.label}</a></li>`).join(``),r=t.map(e=>`
      <a href="${e.href}" target="_blank" rel="noopener noreferrer" aria-label="${e.label}">
        <i class="${e.icon}" aria-hidden="true"></i> <span>${e.label}</span>
      </a>
    `).join(``);return`
    <footer class="pie">
      <div class="pie-inner">
        <div class="pie-marca">
          <span class="pie-nombre">${e.nombre}</span>
          ${e.lema?`<p class="pie-lema">«${e.lema}»</p>`:``}
          ${d.correo?`<p class="pie-dato"><a href="mailto:${d.correo}">${d.correo}</a></p>`:``}
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
      <p class="pie-descargo">${A}</p>

      <p class="pie-legal">
        © ${e.nombre} ${new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  `}var M=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,N=()=>window.matchMedia(`(hover: hover) and (pointer: fine)`).matches;function P(e){if(M())return;let t=[...document.querySelectorAll(e)],n=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(n.unobserve(t.target),r(t.target))},{threshold:.6});for(let e of t){let t=/^(\D*)(\d+)(.*)$/.exec(e.textContent.trim());t&&(e.dataset.final=t[2],e.dataset.prefijo=t[1],e.dataset.sufijo=t[3],e.textContent=`${t[1]}0${t[3]}`,n.observe(e))}function r(e){let t=Number(e.dataset.final),{prefijo:n,sufijo:r}=e.dataset,i=Math.min(900+t*6,1400),a=performance.now(),o=s=>{let c=Math.min(Math.max((s-a)/i,0),1),l=1-(1-c)**3;e.textContent=`${n}${Math.round(t*l)}${r}`,c<1&&requestAnimationFrame(o)};requestAnimationFrame(o)}}function F(e){!M()&&N()&&document.addEventListener(`pointermove`,t=>{let n=t.target.closest?.(e);if(!n)return;let r=n.getBoundingClientRect();n.style.setProperty(`--mx`,`${t.clientX-r.left}px`),n.style.setProperty(`--my`,`${t.clientY-r.top}px`)},{passive:!0})}function I(e,{alcance:t=90,fuerza:n=.22,maximo:r=9}={}){if(M()||!N())return;let i=[...document.querySelectorAll(e)];i.length&&document.addEventListener(`pointermove`,e=>{for(let a of i){let i=a.getBoundingClientRect(),o=e.clientX-(i.left+i.width/2),s=e.clientY-(i.top+i.height/2),c=Math.max(Math.abs(o)-i.width/2,0),l=Math.max(Math.abs(s)-i.height/2,0);if(Math.hypot(c,l)>t){a.style.removeProperty(`--mag-x`),a.style.removeProperty(`--mag-y`);continue}let u=e=>Math.max(-r,Math.min(r,e*n));a.style.setProperty(`--mag-x`,`${u(o)}px`),a.style.setProperty(`--mag-y`,`${u(s)}px`)}},{passive:!0})}function L(e){let t=document.querySelector(e);if(!t)return;let n=[...t.querySelectorAll(`:scope > p`)];if(!n.length)return;if(n.forEach((e,t)=>e.style.setProperty(`--i`,t)),t.classList.add(`proceso`),window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window)){t.classList.add(`proceso-activo`);return}let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(t.classList.add(`proceso-activo`),r.disconnect())},{threshold:.2});r.observe(t)}function R({linkSelector:e=`[data-spy-link]`,offset:t=96}={}){let n=new Map;for(let t of document.querySelectorAll(e)){let e=document.getElementById(t.dataset.spyLink);e&&(n.has(e)||n.set(e,{section:e,links:[]}),n.get(e).links.push(t))}let r=[...n.values()];if(!r.length)return()=>{};let i=null,a=!1;function o(e){if(e!==i){if(i)for(let e of i.links)e.classList.remove(`is-active`),e.removeAttribute(`aria-current`);for(let t of e.links)t.classList.add(`is-active`),t.setAttribute(`aria-current`,`true`);i=e}}function s(){a=!1;let e=window.scrollY;if(e+window.innerHeight>=document.documentElement.scrollHeight-4){o(r[r.length-1]);return}let n=e+t,i=r[0];for(let t of r)if(t.section.getBoundingClientRect().top+e<=n)i=t;else break;o(i)}function c(){a||(a=!0,requestAnimationFrame(s))}return window.addEventListener(`scroll`,c,{passive:!0}),window.addEventListener(`resize`,c),window.addEventListener(`load`,c),s(),c}var z=`0px 0px -12% 0px`,B=70,V=6;function H(){let e=document.querySelectorAll(`[data-anim]`);if(!e.length)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window)){for(let t of e)t.classList.add(`anim-visible`);return}let t=e=>{let t=Number(e.dataset.animEspera);if(t)return t;let n=e.parentElement;if(!n||!n.hasAttribute(`data-anim-secuencia`))return 0;let r=[...n.children].filter(e=>e.hasAttribute(`data-anim`)).indexOf(e);return Math.min(r,V)*B},n=new IntersectionObserver((e,n)=>{for(let r of e){if(!r.isIntersecting)continue;let e=r.target,i=t(e);i&&(e.style.transitionDelay=`${i}ms`),e.classList.add(`anim-visible`),n.unobserve(e)}},{rootMargin:z,threshold:.05}),r=e=>{let t=e.target;t.hasAttribute(`data-anim`)&&t.style.transitionDelay&&(t.style.transitionDelay=``)};for(let t of e)t.addEventListener(`transitionend`,r,{once:!0}),n.observe(t)}function U(){let e=document.querySelectorAll(`[data-modal]`);if(e.length){for(let t of e)t.addEventListener(`click`,()=>{let e=document.querySelector(t.dataset.modal);if(!e){console.warn(`Modal no encontrado: ${t.dataset.modal}`);return}e.parentElement!==document.body&&document.body.appendChild(e),e.showModal()});for(let e of document.querySelectorAll(`dialog.modal`)){e.addEventListener(`click`,t=>{let n=e.querySelector(`.modal-caja`);if(!n)return;let r=n.getBoundingClientRect();t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom||e.close()});for(let t of e.querySelectorAll(`[data-cerrar-modal]`))t.addEventListener(`click`,()=>e.close())}}}var W=document.getElementById(`app`);document.body.dataset.armazon=e.armazon,W.innerHTML=`
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  ${k()}
  <div class="app-main">
    <main id="contenido">
      ${x.map(e=>e.render()).join(`
`)}
    </main>
    ${j()}
  </div>
`;var G=R({offset:96});H(),o(),P(`.hero-cinta-dato`),F(`.tarjeta, .destacado`),I(`.hero-btn`),L(`#metodo .bloque-texto`),U(),u(),h(),window.addEventListener(`load`,G),document.addEventListener(`click`,e=>{e.target.closest(`[data-filtro]`)&&setTimeout(G,60)});