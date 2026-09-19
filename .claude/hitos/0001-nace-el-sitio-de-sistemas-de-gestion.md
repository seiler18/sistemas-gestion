# 0001 — Nace el sitio de sistemas de gestión ISO

- **Fecha:** 2026-09-19
- **Estado:** completado
- **Commits:** `341c0ba`, `cdfb585`, `86b285d`

## Contexto

Jesús es auditor interno en seis normas ISO y esa línea de trabajo no estaba
publicada en ninguna parte: vivía como carpeta de agente en
`G:\Mi unidad\Negocios Digitales\organizador_iso`, junto a estrategia,
contexto personal y un `_privado/` con normas compradas y datos de clientes.

La petición inicial fue «mostrar los tres proyectos de Negocios Digitales».
Al revisarlos se vio que no son aplicaciones ni sitios: son carpetas de
trabajo internas, dos de ellas pausadas o a medias, y una con material bajo
NDA. Lo publicable no eran las carpetas, era **el servicio**.

## Qué se hizo

- `briefing.md` — contrato del sitio, con las restricciones legales como
  apartado propio y no como nota al pie.
- Andamiaje desde `WebMaker/plantilla/`, siete secciones: portada,
  servicios, cómo trabajo (sin enlace en el menú), las seis normas, recursos
  abiertos, quién está detrás y contacto.
- Identidad **propia**, no del catálogo de WebMaker: paleta «Núcleo» en
  `src/styles/tokens.css` (índigo eléctrico + aguamarina sobre fondos casi
  negros) y tipografía Space Grotesk / Inter.
- `src/data/legal.js` + `.pie-descargo` — el descargo de responsabilidad,
  visible en el pie y no detrás de un enlace.
- La foto de perfil del CV (`YO.webp`) como marca de la cabecera, recortada
  en círculo; el logotipo personal queda como favicon.
- Publicado en `seiler18/sistemas-gestion` → GitHub Pages.

## Decisiones y alternativas descartadas

**La paleta se rediseñó a mano en vez de tomar una del catálogo.** La primera
versión usó «Pizarra Institucional», que encaja por sector, pero quedaba
idéntica al sitio de CEDER SpA. La paleta nueva se construyó alrededor del
azul del logotipo personal (`#2976C0`, extraído con ImageMagick) y se
verificaron los contrastes: el primario no puede aclararse a `#4f6bff`
porque el blanco encima cae a 4,30:1 y los botones dejan de cumplir AA.

**El repositorio `iso-toolkit` no se enlaza.** Está a medio escribir y sin
publicar. Un enlace a un repositorio vacío demuestra lo contrario de lo que
busca esa sección, así que se describe lo que habrá y no se enlaza.

**No se publican precios.** El catálogo los tiene en rangos sin validar
contra mercado; publicar un número del que no se está seguro es peor que no
publicarlo.

**La gestión documental pasó a ser el primer servicio.** No estaba en el plan
original: entró porque es donde el usuario más aporta —estructurar el
repositorio (SharePoint, Drive, Dropbox) con el que se sostiene la
certificación— y porque hay empresas que subcontratan solo eso.

## Consecuencias

- **Hay un vocabulario prohibido en este repositorio.** Nunca «certifico»,
  «certificador», «acreditado» referido a Jesús, «sello», «avalado» ni
  «homologado». Se dice «preparación para la certificación» y «acompañamiento
  hasta la auditoría de certificación». Las cabeceras de
  `src/data/servicios.js` y `src/data/quien.js` lo explican en el sitio.
- **Ni una frase del texto de las normas.** `src/data/normas.js` está escrito
  desde «¿qué tiene que demostrar la organización?» y así debe seguir.
- **El empleador no existe en este sitio.** Ni nombre, ni caso de éxito, ni
  sus certificaciones. Sí se puede decir, sin nombrarlo, «gestiono a diario
  un sistema integrado multinorma».
- Antes de tocar un color hay que recalcular contraste: los valores medidos
  están anotados en `src/styles/tokens.css`.

## Pendiente

- **Revisar el contrato de trabajo.** `limites_legales.md` §5.2 marca como
  acción pendiente comprobar si vender consultoría ISO por fuera compite con
  el empleador. El sitio está publicado; esa revisión sigue sin hacerse.
- Reunir los certificados de los cursos de auditor interno: la bio afirma que
  se muestran si alguien los pide.
- Confirmar el buzón en FormSubmit — el primer envío no llega hasta hacerlo.
- `og.webp` para las tarjetas de redes sociales.
- Publicar el `iso-toolkit` y convertir «Recursos abiertos» en tarjetas con
  enlace.
