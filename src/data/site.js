/* ============================================================
   IDENTIDAD DEL SITIO

   Todo lo que se repite en más de un sitio (cabecera, pie, meta tags del
   index.html) vive aquí para no tenerlo escrito en cuatro archivos.

   OJO: el <h1> de la portada es el lema, no el nombre. El nombre ya está en la
   barra superior y repetirlo en el centro sobraba.
   ============================================================ */

export const site = {
  nombre: 'Jesús Seiler',
  nombreCorto: 'J. Seiler',
  lema: 'Tu sistema de gestión, ordenado y listo para auditar',
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
