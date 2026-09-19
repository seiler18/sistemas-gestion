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
  eyebrow: 'Qué construyo',
  titulo: 'Servicios',
  subtitulo:
    'Alcance cerrado, entregables definidos y precio fijo. El primero es donde más aporto: casi todo el trabajo de una certificación es documental, y casi nadie lo estructura bien.',
  filtro: false,
  densidad: 'amplia',

  items: [
    {
      titulo: 'Estructura documental del sistema',
      texto:
        'El servicio con el que más ayudo. Levanto la estructura documental completa —jerarquía, codificación, control de versiones, retención y trazabilidad— sobre la herramienta que ya usa: <strong>SharePoint, Google Drive, Dropbox</strong> o la que sea. Es lo que el auditor abre primero y lo que decide si la evidencia se encuentra en treinta segundos o no aparece.',
      icon: 'fa-solid fa-folder-tree',
    },
    {
      titulo: 'Diagnóstico de brechas',
      texto:
        'El estado real del sistema frente a lo que se le va a exigir. Revisión de documentación y de prácticas, informe con los hallazgos priorizados por criticidad y un plan de acción con responsables y plazos. Es el punto de partida honesto: a veces el resultado es que falta menos de lo que se temía.',
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
        'Ya tiene una norma y le piden la segunda. Las seis corren sobre el mismo núcleo —el Anexo SL—: contexto, liderazgo, riesgos, competencia, auditoría interna y revisión por la dirección se construyen <strong>una vez</strong> y quedan disponibles para las siguientes. Aquí es donde se ahorra de verdad.',
      icon: 'fa-solid fa-layer-group',
    },
    {
      titulo: 'Automatización del sistema',
      texto:
        'Evidencia que se recoge sola, indicadores que se calculan solos y tableros que el comité abre sin que nadie arme un Excel la noche anterior. RPA, Power BI e IA aplicados al sistema de gestión. Es el cruce menos poblado del rubro: mucha gente entiende de normas, muy poca sabe automatizarlas.',
      icon: 'fa-solid fa-robot',
    },
  ],
}
