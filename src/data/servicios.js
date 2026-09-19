/* ============================================================
   SERVICIOS

   LENGUAJE: ninguna tarjeta dice «certifico», «certificación garantizada»
   ni «acreditado». Certificar un sistema de gestión solo puede hacerlo un
   organismo acreditado conforme a ISO/IEC 17021-1, y prometerlo sin serlo es
   publicidad engañosa además de un suicidio reputacional ante un gerente de
   calidad. Se dice «preparación para» y «acompañamiento hasta».

   Ver briefing.md → Restricciones legales antes de tocar un solo título.

   PRECIOS: no se publican. La promesa que sí se hace —«a precio fijo, no por
   horas»— es la que diferencia de la consultora tradicional y la que el
   cliente pyme necesita oír.
   ============================================================ */

export const servicios = {
  id: 'servicios',
  eyebrow: 'Qué hago',
  titulo: 'Servicios',
  subtitulo:
    'Trabajo acotado y a precio cerrado. Nada de bolsas de horas ni reuniones que se facturan solas.',
  filtro: false,
  densidad: 'amplia',

  items: [
    {
      titulo: 'Diagnóstico de brechas',
      texto:
        'Dónde está hoy su organización respecto de lo que le van a pedir. Revisión documental y de prácticas, informe con los hallazgos priorizados y un plan de acción con responsables y plazos. Es el punto de partida honesto: a veces el resultado es que falta menos de lo que se temía.',
      icon: 'fa-solid fa-magnifying-glass-chart',
    },
    {
      titulo: 'Acompañamiento hasta la auditoría',
      texto:
        'Preparación para la auditoría de certificación: qué evidencia hay que tener, cómo se ordena y qué se va a preguntar. No emito certificados —eso solo lo hace un organismo acreditado— pero sé lo que ese organismo viene a buscar, porque me siento del otro lado de la mesa.',
      icon: 'fa-solid fa-clipboard-check',
    },
    {
      titulo: 'Integración multinorma',
      texto:
        'Ya tiene una norma y le piden la segunda. Bajo el Anexo SL las seis comparten estructura: contexto, liderazgo, riesgos, competencia, auditoría interna y revisión por la dirección se levantan <strong>una vez</strong>, no tres. Aquí es donde se ahorra de verdad.',
      icon: 'fa-solid fa-layer-group',
    },
    {
      titulo: 'Automatización del sistema',
      texto:
        'Evidencias que se recogen solas, indicadores que se calculan solos y tableros que el comité mira sin que nadie arme un Excel la noche anterior. RPA, Power BI e IA aplicados al sistema de gestión. Es el cruce menos poblado: mucha gente sabe de normas, poca sabe automatizarlas.',
      icon: 'fa-solid fa-robot',
    },
  ],
}
