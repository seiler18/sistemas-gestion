/* ============================================================
   IDENTIDAD DEL SITIO

   Todo lo que se repite en más de un sitio (cabecera, pie, meta tags del
   index.html) vive aquí para no tenerlo escrito en cuatro archivos.

   OJO CON EL NOMBRE: es el <h1> de la portada. Va solo «Jesús Seiler» y no
   «Jesús Seiler · Sistemas de Gestión» a propósito — un H1 de cinco palabras
   se parte en dos líneas en móvil y pierde la fuerza. Lo que hace se dice en
   el antetítulo y en el lema, que es donde el ojo va después.
   ============================================================ */

export const site = {
  nombre: 'Jesús Seiler',
  nombreCorto: 'J. Seiler',
  lema: 'Un sistema de gestión también es un sistema',
  descripcion:
    'Diagnóstico de brechas, preparación para la certificación e integración multinorma ISO en Chile. Auditor interno en 9001, 14001, 45001, 27001, 22301 y 20000-1.',
  url: 'https://seiler18.github.io/sistemas-gestion/',

  armazon: 'topbar',

  /* La misma foto que lleva la topbar del CV (`YO.webp`, WebP de 200px).
     Va una PERSONA y no un logotipo a propósito: lo que se vende aquí es el
     criterio de alguien que opera sistemas de gestión, no una consultora.
     Se recorta en círculo desde layout.css.

     El favicon sí es el logotipo («Jesu Program»), igual que en las páginas
     estáticas del CV: una cara a 16px no se distingue, una marca sí.

     El monograma se conserva como respaldo: si el archivo falta, shell.js
     cae en él en vez de dejar un hueco. */
  logo: 'assets/img/avatar.webp',
  monograma: 'JS',

  idioma: 'es',
}

/* Redes del pie. LinkedIn es el canal principal para este público: el
   comprador B2B de sistemas de gestión está ahí y no en otra parte. */
export const redes = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ichbinseiler/', icon: 'fa-brands fa-linkedin' },
  { label: 'GitHub', href: 'https://github.com/seiler18', icon: 'fa-brands fa-github' },
]

/* Sin descargas por ahora. El lead magnet («Checklist de auditoría interna»)
   entra aquí cuando exista: es el producto #1 del catálogo. */
export const descargas = []
