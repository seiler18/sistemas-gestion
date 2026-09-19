/* ============================================================
   CONTACTO — destinos del formulario

   NUNCA pongas aquí una clave de API. Esto se compila a un .js que sirve
   GitHub Pages en claro: cualquiera lo lee con «ver código fuente». Por eso
   el formulario usa FormSubmit, que no necesita credenciales.

   PRIMERA VEZ: FormSubmit exige confirmar el buzón. Manda un envío de
   prueba desde el sitio publicado y acepta el correo que llega. Hasta que se
   confirme, el formulario responde «pendiente de confirmación» — y eso es lo
   que se le enseña al visitante, en vez de un «enviado» que sería mentira.

   Los MOTIVOS no son genéricos a propósito: salen en el asunto del correo, y
   con estos cuatro se sabe de qué va el mensaje sin abrirlo. El cuarto
   («Todavía no sé qué necesito») está para que escriba quien no conoce el
   vocabulario del rubro — que es la mitad de los que llegan.
   ============================================================ */

export const contacto = {
  eyebrow: 'Primer contacto',
  titulo: 'Contacto',
  subtitulo:
    'La primera conversación no se cobra. Cuénteme qué le están pidiendo y le digo con franqueza si puedo ayudar.',

  correo: 'ichbinseiler@gmail.com',
  whatsapp: '56953292612',

  motivos: [
    'Nos piden certificarnos y no sabemos por dónde partir',
    'Ya tenemos una norma y queremos otra',
    'Necesitamos un diagnóstico de brechas',
    'Todavía no sé qué necesito',
  ],

  canales: [
    { label: 'Correo', valor: 'ichbinseiler@gmail.com', href: 'mailto:ichbinseiler@gmail.com', icon: 'fa-solid fa-envelope' },
    { label: 'Dónde estoy', valor: 'Puerto Montt, Chile · trabajo a distancia', href: null, icon: 'fa-solid fa-location-dot' },
  ],
}

export const endpointCorreo = `https://formsubmit.co/ajax/${contacto.correo}`

export const enlaceWhatsapp = contacto.whatsapp
  ? `https://wa.me/${contacto.whatsapp}`
  : ''
