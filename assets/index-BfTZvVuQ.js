(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={nombre:`Jesús Seiler`,nombreCorto:`J. Seiler`,lema:`Un sistema de gestión también es un sistema`,descripcion:`Diagnóstico de brechas, preparación para la certificación e integración multinorma ISO en Chile. Auditor interno en 9001, 14001, 45001, 27001, 22301 y 20000-1.`,url:`https://seiler18.github.io/sistemas-gestion/`,armazon:`topbar`,logo:`assets/img/avatar.webp`,monograma:`JS`,idioma:`es`},t=[{label:`LinkedIn`,href:`https://www.linkedin.com/in/ichbinseiler/`,icon:`fa-brands fa-linkedin`},{label:`GitHub`,href:`https://github.com/seiler18`,icon:`fa-brands fa-github`}],n=[],r={antetitulo:`ISO 9001 · 14001 · 45001 · 27001 · 22301 · 20000-1`,bajada:`Entradas, controles, evidencia y trazabilidad: bajo la burocracia, una norma describe una arquitectura. La diseño, la integro y la automatizo para empresas que tienen que certificarse —o que ya lo están y quieren una norma más.`,acciones:[{label:`Ver servicios`,href:`#servicios`,icon:`fa-solid fa-arrow-down`},{label:`Escríbeme`,href:`#contacto`,icon:`fa-solid fa-paper-plane`}],cinta:[{dato:`6`,pie:`normas ISO como auditor interno`},{dato:`Anexo SL`,pie:`el núcleo común de las seis`}],siguiente:`servicios`};function i(){let t=r.acciones.map((e,t)=>`
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
    `:``;return`
    <header class="hero" id="inicio">
      <div class="hero-fondo" aria-hidden="true"></div>

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
        ${r.antetitulo?`<p class="hero-antetitulo" data-anim="subir">${r.antetitulo}</p>`:``}
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
  `}function a({id:e,eyebrow:t,titulo:n,subtitulo:r,contenido:i,sinSeparador:a=!1}){return`
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
  `}function o(e){let t=e.destacados?.length?`
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
    `;return a({...e,contenido:r})}function s(e){let t=e.items||[],n=e=>{let t=e.imagen?`<div class="tarjeta-portada"><img src="${e.imagen.src}" alt="${e.imagen.alt}" loading="lazy"></div>`:e.icon?`<div class="tarjeta-icono"><i class="${e.icon}" aria-hidden="true"></i></div>`:``,n=e.enlace?`
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
  `;return a({...e,contenido:i})}function c(){for(let e of document.querySelectorAll(`.filtros`)){let t=e.closest(`.section`),n=t?.querySelector(`.rejilla`),r=t?.querySelector(`.rejilla-vacia`);n&&e.addEventListener(`click`,t=>{let i=t.target.closest(`[data-filtro]`);if(!i)return;for(let t of e.querySelectorAll(`[data-filtro]`))t.classList.toggle(`is-active`,t===i);let a=i.dataset.filtro,o=0;for(let e of n.querySelectorAll(`.tarjeta`)){let t=a===`todas`||e.dataset.area===a;e.hidden=!t,t&&o++}r&&(r.hidden=o>0)})}}var l={eyebrow:`Primer contacto`,titulo:`Contacto`,subtitulo:`La primera conversación no se cobra. Cuénteme qué le están pidiendo y le digo con franqueza si puedo ayudar.`,correo:`ichbinseiler@gmail.com`,whatsapp:`56953292612`,motivos:[`Nos piden certificarnos y no sabemos por dónde partir`,`Ya tenemos una norma y queremos otra`,`Necesitamos un diagnóstico de brechas`,`Todavía no sé qué necesito`],canales:[{label:`Correo`,valor:`ichbinseiler@gmail.com`,href:`mailto:ichbinseiler@gmail.com`,icon:`fa-solid fa-envelope`},{label:`Dónde estoy`,valor:`Puerto Montt, Chile · trabajo a distancia`,href:null,icon:`fa-solid fa-location-dot`}]},u=`https://formsubmit.co/ajax/${l.correo}`,d=l.whatsapp?`https://wa.me/${l.whatsapp}`:``;function f(){let e=l.motivos.map(e=>`<option value="${e}">${e}</option>`).join(``),t=l.canales.map(e=>`
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
          ${d?`<button type="button" class="btn fantasma" id="btnWhatsapp">
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
  `;return a({id:`contacto`,eyebrow:l.eyebrow,titulo:l.titulo,subtitulo:l.subtitulo,contenido:n})}function p(){let e=document.getElementById(`formContacto`);if(!e)return;let t=document.getElementById(`avisoContacto`),n=document.getElementById(`btnCorreo`),r=document.getElementById(`btnWhatsapp`);function i(e,n){t.textContent=e,t.className=`contacto-aviso visible ${n}`}let a=()=>({nombre:e.nombre.value.trim(),correo:e.correo.value.trim(),motivo:e.motivo.value,mensaje:e.mensaje.value.trim()});function o(){return e.checkValidity()?!0:(i(`Faltan datos: revisa el nombre, el correo y el mensaje.`,`malo`),e.querySelector(`:invalid`)?.focus(),!1)}e.addEventListener(`submit`,async t=>{if(t.preventDefault(),!o())return;let r=a();n.disabled=!0,i(`Enviando…`,`nota`);try{let t=await fetch(u,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({Nombre:r.nombre,Correo:r.correo,Motivo:r.motivo,Mensaje:r.mensaje,_subject:`Web · ${r.motivo} — ${r.nombre}`,_template:`table`,_captcha:`false`,_honey:e.elements._honey.value})}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(`HTTP ${t.status}`);if(n.success===`false`||n.success===!1){i(n.message||`El envío quedó pendiente de confirmación.`,`nota`);return}e.reset(),i(`¡Mensaje enviado! Te responderemos al correo que dejaste.`,`ok`)}catch(e){console.error(`No se pudo enviar el formulario:`,e),i(`No se pudo enviar. Escríbenos a ${l.correo}.`,`malo`)}finally{n.disabled=!1}}),r?.addEventListener(`click`,()=>{if(!o())return;let e=a(),t=`Hola, escribo desde la web.\n\nMotivo: ${e.motivo}\nNombre: ${e.nombre}\nCorreo: ${e.correo}\n\n${e.mensaje}`;window.open(`${d}?text=${encodeURIComponent(t)}`,`_blank`,`noopener`),i(`Se abrió WhatsApp con el mensaje listo: solo falta enviarlo.`,`ok`)})}var m={id:`servicios`,eyebrow:`Qué construyo`,titulo:`Servicios`,subtitulo:`Alcance cerrado, entregables definidos y precio fijo. Como un proyecto de software: se especifica antes de empezar y no se factura por reunión.`,filtro:!1,densidad:`amplia`,items:[{titulo:`Diagnóstico de brechas`,texto:`El estado real del sistema frente a lo que se le va a exigir. Revisión de documentación y de prácticas, informe con los hallazgos priorizados por criticidad y un plan de acción con responsables y plazos. Es el punto de partida honesto: a veces el resultado es que falta menos de lo que se temía.`,icon:`fa-solid fa-magnifying-glass-chart`},{titulo:`Acompañamiento hasta la auditoría`,texto:`Preparación para la auditoría de certificación: qué evidencia hay que tener, cómo se ordena y qué se va a preguntar. No emito certificados —eso solo lo hace un organismo acreditado— pero sé lo que ese organismo viene a buscar, porque me siento del otro lado de la mesa.`,icon:`fa-solid fa-clipboard-check`},{titulo:`Integración multinorma`,texto:`Ya tiene una norma y le piden la segunda. Las seis corren sobre el mismo núcleo —el Anexo SL—: contexto, liderazgo, riesgos, competencia, auditoría interna y revisión por la dirección se construyen <strong>una vez</strong> y quedan disponibles para las siguientes. Aquí es donde se ahorra de verdad.`,icon:`fa-solid fa-layer-group`},{titulo:`Automatización del sistema`,texto:`Evidencia que se recoge sola, indicadores que se calculan solos y tableros que el comité abre sin que nadie arme un Excel la noche anterior. RPA, Power BI e IA aplicados al sistema de gestión. Es el cruce menos poblado del rubro: mucha gente entiende de normas, muy poca sabe automatizarlas.`,icon:`fa-solid fa-robot`}]},h={id:`metodo`,eyebrow:`Cómo trabajo`,titulo:`Cuatro fases, sin sorpresas de alcance`,subtitulo:`El mismo protocolo para todos los encargos, con el alcance y el precio cerrados antes de la primera línea de trabajo.`,cuerpo:`
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
  `,imagen:null,destacados:[{icon:`fa-solid fa-clock`,titulo:`Disponibilidad real`,texto:`Entre 8 y 10 horas por semana. Eso descarta implementaciones grandes con equipo en terreno, y favorece encargos acotados y bien definidos. Prefiero decirlo antes.`},{icon:`fa-solid fa-scale-balanced`,titulo:`Lo que no hago`,texto:`No audito lo que yo mismo implementé: quien asesora no puede auditar, es el principio de imparcialidad de ISO/IEC 17021-1. Tampoco emito certificados ni sellos de ningún tipo.`},{icon:`fa-solid fa-industry`,titulo:`Dónde soy fuerte y dónde no`,texto:`Mi experiencia vivida es en servicios y sistemas de información. En manufactura, alimentos o construcción el criterio es prestado, y se lo advertiré antes de aceptar el encargo.`}]},g={id:`normas`,eyebrow:`Cobertura`,titulo:`Las seis normas`,subtitulo:`Seis normas, un solo núcleo. El Anexo SL es la estructura común: lo que se construye para una queda disponible para las demás.`,filtro:!1,densidad:`compacta`,items:[{titulo:`ISO 9001:2015 · Calidad`,texto:`Demostrar que sabe quiénes son sus clientes y qué esperan, que sus procesos están definidos y bajo control, y que cuando algo sale mal se corrige y se aprende en vez de repetirse.`,icon:`fa-solid fa-circle-check`},{titulo:`ISO 14001:2015 · Ambiental`,texto:`Demostrar que identificó cómo su operación toca el medio ambiente, que conoce y cumple la normativa que le aplica, y que actúa sobre lo que sí está en su mano cambiar.`,icon:`fa-solid fa-leaf`},{titulo:`ISO 45001:2018 · Seguridad y salud`,texto:`Demostrar que identificó a qué peligros expone a su gente, que los controla con medidas reales, y que los trabajadores participan de verdad en esas decisiones y no solo firman una lista.`,icon:`fa-solid fa-helmet-safety`},{titulo:`ISO/IEC 27001:2022 · Seguridad de la información`,texto:`Demostrar qué información le importa, qué riesgos corre, qué controles decidió aplicar y —esto es lo que más cuesta— por qué descartó los que no aplicó.`,icon:`fa-solid fa-lock`},{titulo:`ISO 22301:2019 · Continuidad del negocio`,texto:`Demostrar cuánto tiempo puede estar caída cada actividad antes de que el daño sea serio, y que tiene un plan probado para volver a operar. Probado: no escrito y guardado.`,icon:`fa-solid fa-tower-broadcast`},{titulo:`ISO/IEC 20000-1:2018 · Servicios de TI`,texto:`Demostrar que los servicios de TI que presta se gestionan y no solo se prestan: qué ofrece, con qué compromisos, y cómo maneja incidentes, cambios y capacidad.`,icon:`fa-solid fa-server`}]},_={id:`recursos`,eyebrow:`Abierto`,titulo:`Recursos abiertos`,subtitulo:`Material de autoría propia, publicado en abierto para que lo use quien quiera. Sin registro y sin versión premium escondida.`,cuerpo:`
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
  `,imagen:null,destacados:[{icon:`fa-solid fa-triangle-exclamation`,titulo:`Lo que no va a encontrar ahí`,texto:`El texto de las normas. Son obra protegida y las vende el INN: ni copias, ni extractos, ni resúmenes que las reemplacen. Las plantillas son propias y se usan junto a la norma, no en su lugar.`}]},v={id:`quien`,eyebrow:`Quién está detrás`,titulo:`Jesús Seiler`,subtitulo:`Auditor interno en ISO 9001, 14001, 45001, 27001, 22301 y 20000-1.`,cuerpo:`
    <p>No estudié las normas para venderlas: las opero. Gestiono a diario un
    sistema integrado de gestión multinorma, y he preparado y vivido
    auditorías de vigilancia y de recertificación ante un organismo
    certificador internacional. Sé qué preguntan, en qué orden y qué respuesta
    los deja tranquilos.</p>

    <p>Mi recorrido es poco común y por eso sirve: ingeniero civil reconvertido
    a tecnología, analista de sistemas, desarrollo en Java y JavaScript,
    automatización con RPA y tableros en Power BI. Esa mezcla es la que permite
    el cuarto servicio de esta página — mucha gente entiende de normas y mucha
    gente automatiza, pero casi nadie hace las dos cosas.</p>

    <p>Vivo en Puerto Montt y trabajo con empresas de Chile y del resto de
    Latinoamérica. Escribo y trabajo en español; también manejo inglés a nivel
    C1, que es lo que hace falta cuando la casa matriz pregunta.</p>
  `,imagen:null,destacados:[{icon:`fa-solid fa-certificate`,titulo:`Los certificados, a la vista`,texto:`Los cursos de auditor interno que respaldan las seis normas se los muestro si me los pide. En este rubro quien no puede mostrarlos no debería estar ofreciendo el servicio.`},{icon:`fa-solid fa-comments`,titulo:`Sin discurso de ventas`,texto:`Si lo que necesita es una consultora con equipo en terreno, se lo voy a decir en la primera conversación. Cobrar por un encargo que no puedo sostener me sale más caro que perderlo.`}]},y=[{id:`inicio`,label:`Inicio`,short:`Inicio`,icon:`fa-solid fa-house`,render:i},{id:`servicios`,label:`Servicios`,short:`Servicios`,icon:`fa-solid fa-briefcase`,render:()=>s(m)},{id:`metodo`,label:`Cómo trabajo`,short:`Método`,icon:`fa-solid fa-route`,render:()=>o(h),enMenu:!1},{id:`normas`,label:`Las seis normas`,short:`Normas`,icon:`fa-solid fa-book-open`,render:()=>s(g)},{id:`recursos`,label:`Recursos`,short:`Recursos`,icon:`fa-solid fa-box-open`,render:()=>o(_)},{id:`quien`,label:`Quién está detrás`,short:`Quién`,icon:`fa-solid fa-user-tie`,render:()=>o(v)},{id:`contacto`,label:`Contacto`,short:`Contacto`,icon:`fa-solid fa-paper-plane`,render:f}],b=y.filter(e=>e.enMenu!==!1);function x(t){return`
    <a class="${t}" href="#inicio" aria-label="Ir al inicio">
      ${e.logo?`<img class="${t}-logo" src="${e.logo}" alt="Foto de ${e.nombre}" width="40" height="40">`:`<span class="${t}-monograma" aria-hidden="true">${e.monograma}</span>`}
      <span class="${t}-texto">
        <span class="${t}-nombre">${e.nombre}</span>
        ${e.lema?`<span class="${t}-lema">${e.lema}</span>`:``}
      </span>
    </a>
  `}function S(e){return b.map(t=>`
      <li>
        <a class="${e}" href="#${t.id}" data-spy-link="${t.id}">
          <i class="${t.icon}" aria-hidden="true"></i>
          <span class="nav-largo">${t.label}</span>
          <span class="nav-corto">${t.short}</span>
        </a>
      </li>
    `).join(``)}function C(){return n.map(e=>`
      <a class="btn-descarga" href="${e.href}" target="_blank" rel="noopener noreferrer"
         download="${e.download}">
        <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>${e.label}
      </a>
    `).join(``)}function w(){return t.map(e=>`
      <a href="${e.href}" target="_blank" rel="noopener noreferrer"
         title="${e.label}" aria-label="${e.label}">
        <i class="${e.icon}" aria-hidden="true"></i>
      </a>
    `).join(``)}function T(){return`
    <header class="topbar">
      <div class="topbar-inner">
        ${x(`marca`)}

        <nav class="topbar-nav" id="menuPrincipal" aria-label="Secciones">
          <ul>${S(`nav-link`)}</ul>
          ${n.length?`<div class="topbar-extras">${C()}</div>`:``}
        </nav>

        <button type="button" class="menu-boton" id="botonMenu"
                aria-controls="menuPrincipal" aria-expanded="false" aria-label="Abrir menú">
          <span class="menu-boton-barras" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  `}function E(){return`
    <aside class="sidenav" aria-label="Secciones">
      <div class="sidenav-brand">${x(`marca`)}</div>
      <ul class="sidenav-nav">${S(`nav-link`)}</ul>
      <div class="sidenav-actions">
        ${C()}
        ${t.length?`<div class="sidenav-social">${w()}</div>`:``}
      </div>
    </aside>

    <!-- En el armazón 'sidebar' la barra superior queda casi vacía en
         escritorio, pero en móvil es donde vive la marca: la sidebar se
         convierte en barra de iconos y su cabecera desaparece por falta de
         sitio. Sin esto, el logo no se ve en el celular. -->
    <header class="topbar topbar-minima">
      <div class="topbar-inner">
        ${x(`marca marca-movil`)}
        ${n.length?`<div class="topbar-extras">${C()}</div>`:``}
      </div>
    </header>
  `}function D(){return e.armazon===`sidebar`?E():T()}function O(){let e=document.getElementById(`botonMenu`),t=document.getElementById(`menuPrincipal`);if(!e||!t)return;let n=()=>{t.classList.remove(`abierto`),e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-label`,`Abrir menú`)};e.addEventListener(`click`,()=>{let n=t.classList.toggle(`abierto`);e.setAttribute(`aria-expanded`,String(n)),e.setAttribute(`aria-label`,n?`Cerrar menú`:`Abrir menú`)}),t.addEventListener(`click`,e=>{e.target.closest(`a`)&&n()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&n()}),window.matchMedia(`(min-width: 992px)`).addEventListener(`change`,e=>{e.matches&&n()})}var k=`Los servicios descritos son de preparación y acompañamiento: no otorgan ni garantizan la certificación, que corresponde exclusivamente a un organismo de certificación acreditado. El material entregado es de autoría propia, complementa a las normas y no las reemplaza — su adquisición corresponde al organismo nacional de normalización. Nada de lo publicado aquí constituye asesoría legal.`;function A(){let n=b.map(e=>`<li><a href="#${e.id}">${e.label}</a></li>`).join(``),r=t.map(e=>`
      <a href="${e.href}" target="_blank" rel="noopener noreferrer" aria-label="${e.label}">
        <i class="${e.icon}" aria-hidden="true"></i> <span>${e.label}</span>
      </a>
    `).join(``);return`
    <footer class="pie">
      <div class="pie-inner">
        <div class="pie-marca">
          <span class="pie-nombre">${e.nombre}</span>
          ${e.lema?`<p class="pie-lema">«${e.lema}»</p>`:``}
          ${l.correo?`<p class="pie-dato"><a href="mailto:${l.correo}">${l.correo}</a></p>`:``}
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
      <p class="pie-descargo">${k}</p>

      <p class="pie-legal">
        © ${e.nombre} ${new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  `}function j({linkSelector:e=`[data-spy-link]`,offset:t=96}={}){let n=new Map;for(let t of document.querySelectorAll(e)){let e=document.getElementById(t.dataset.spyLink);e&&(n.has(e)||n.set(e,{section:e,links:[]}),n.get(e).links.push(t))}let r=[...n.values()];if(!r.length)return()=>{};let i=null,a=!1;function o(e){if(e!==i){if(i)for(let e of i.links)e.classList.remove(`is-active`),e.removeAttribute(`aria-current`);for(let t of e.links)t.classList.add(`is-active`),t.setAttribute(`aria-current`,`true`);i=e}}function s(){a=!1;let e=window.scrollY;if(e+window.innerHeight>=document.documentElement.scrollHeight-4){o(r[r.length-1]);return}let n=e+t,i=r[0];for(let t of r)if(t.section.getBoundingClientRect().top+e<=n)i=t;else break;o(i)}function c(){a||(a=!0,requestAnimationFrame(s))}return window.addEventListener(`scroll`,c,{passive:!0}),window.addEventListener(`resize`,c),window.addEventListener(`load`,c),s(),c}var M=`0px 0px -12% 0px`,N=70,P=6;function F(){let e=document.querySelectorAll(`[data-anim]`);if(!e.length)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window)){for(let t of e)t.classList.add(`anim-visible`);return}let t=e=>{let t=Number(e.dataset.animEspera);if(t)return t;let n=e.parentElement;if(!n||!n.hasAttribute(`data-anim-secuencia`))return 0;let r=[...n.children].filter(e=>e.hasAttribute(`data-anim`)).indexOf(e);return Math.min(r,P)*N},n=new IntersectionObserver((e,n)=>{for(let r of e){if(!r.isIntersecting)continue;let e=r.target,i=t(e);i&&(e.style.transitionDelay=`${i}ms`),e.classList.add(`anim-visible`),n.unobserve(e)}},{rootMargin:M,threshold:.05}),r=e=>{let t=e.target;t.hasAttribute(`data-anim`)&&t.style.transitionDelay&&(t.style.transitionDelay=``)};for(let t of e)t.addEventListener(`transitionend`,r,{once:!0}),n.observe(t)}function I(){let e=document.querySelectorAll(`[data-modal]`);if(e.length){for(let t of e)t.addEventListener(`click`,()=>{let e=document.querySelector(t.dataset.modal);if(!e){console.warn(`Modal no encontrado: ${t.dataset.modal}`);return}e.parentElement!==document.body&&document.body.appendChild(e),e.showModal()});for(let e of document.querySelectorAll(`dialog.modal`)){e.addEventListener(`click`,t=>{let n=e.querySelector(`.modal-caja`);if(!n)return;let r=n.getBoundingClientRect();t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom||e.close()});for(let t of e.querySelectorAll(`[data-cerrar-modal]`))t.addEventListener(`click`,()=>e.close())}}}var L=document.getElementById(`app`);document.body.dataset.armazon=e.armazon,L.innerHTML=`
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  ${D()}
  <div class="app-main">
    <main id="contenido">
      ${y.map(e=>e.render()).join(`
`)}
    </main>
    ${A()}
  </div>
`;var R=j({offset:96});O(),F(),I(),c(),p(),window.addEventListener(`load`,R),document.addEventListener(`click`,e=>{e.target.closest(`[data-filtro]`)&&setTimeout(R,60)});