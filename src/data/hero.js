/* ============================================================
   PORTADA

   La `cinta` lleva solo cifras que se pueden demostrar si alguien las
   cuestiona — y en este sector alguien las cuestiona. Las seis normas están
   respaldadas por los cursos de auditor interno; el sistema integrado, por
   el trabajo diario. Nada de «+200 empresas asesoradas»: no las hay, y el
   gerente de calidad que lo lea lo nota.

   Tampoco se nombra al empleador. Ver briefing.md → Restricciones legales.
   ============================================================ */

export const hero = {
  antetitulo: 'Auditor interno · ISO 9001 · 14001 · 45001 · 27001 · 22301 · 20000-1',
  bajada:
    'Acompaño a empresas que tienen que certificarse —o que ya lo están y quieren una norma más— sin duplicar la papelería ni pagar una consultora por horas.',

  acciones: [
    { label: 'Ver servicios', href: '#servicios', icon: 'fa-solid fa-arrow-down' },
    { label: 'Escríbeme', href: '#contacto', icon: 'fa-solid fa-paper-plane' },
  ],

  cinta: [
    { dato: '6', pie: 'normas ISO como auditor interno' },
    { dato: '1', pie: 'sistema integrado gestionado a diario' },
  ],

  siguiente: 'servicios',
}
