/* ============================================================
   LAS SEIS NORMAS

   REGLA DE REDACCIÓN, NO NEGOCIABLE: cada texto responde a «¿qué tiene que
   demostrar la organización?», nunca a «¿qué dice el párrafo?». Las normas
   ISO son obra protegida (Ley 17.336 en Chile) y las vende el INN: copiar un
   requisito, aunque sea una frase, o publicar un resumen que las reemplace,
   es infracción. Parafrasear con palabras propias y explicar qué se espera es
   lo que hace toda la consultoría del mundo, y es legítimo.

   Citar número y título de cláusula sí se puede. Si algún día se añade uno,
   que sea eso: «8.1 Planificación y control operacional», y nada más.

   Si un texto de aquí empieza a parecerse frase a frase al de la norma, se
   reescribe. Ante la duda, no se publica.
   ============================================================ */

export const normas = {
  id: 'normas',
  eyebrow: 'En qué me muevo',
  titulo: 'Las seis normas',
  subtitulo:
    'Todas comparten el mismo esqueleto —el Anexo SL—, y ahí está el ahorro: lo que se levanta para una sirve para las siguientes.',
  filtro: false,
  densidad: 'compacta',

  items: [
    {
      titulo: 'ISO 9001:2015 · Calidad',
      texto:
        'Demostrar que sabe quiénes son sus clientes y qué esperan, que sus procesos están definidos y bajo control, y que cuando algo sale mal se corrige y se aprende en vez de repetirse.',
      icon: 'fa-solid fa-circle-check',
    },
    {
      titulo: 'ISO 14001:2015 · Ambiental',
      texto:
        'Demostrar que identificó cómo su operación toca el medio ambiente, que conoce y cumple la normativa que le aplica, y que actúa sobre lo que sí está en su mano cambiar.',
      icon: 'fa-solid fa-leaf',
    },
    {
      titulo: 'ISO 45001:2018 · Seguridad y salud',
      texto:
        'Demostrar que identificó a qué peligros expone a su gente, que los controla con medidas reales, y que los trabajadores participan de verdad en esas decisiones y no solo firman una lista.',
      icon: 'fa-solid fa-helmet-safety',
    },
    {
      titulo: 'ISO/IEC 27001:2022 · Seguridad de la información',
      texto:
        'Demostrar qué información le importa, qué riesgos corre, qué controles decidió aplicar y —esto es lo que más cuesta— por qué descartó los que no aplicó.',
      icon: 'fa-solid fa-lock',
    },
    {
      titulo: 'ISO 22301:2019 · Continuidad del negocio',
      texto:
        'Demostrar cuánto tiempo puede estar caída cada actividad antes de que el daño sea serio, y que tiene un plan probado para volver a operar. Probado: no escrito y guardado.',
      icon: 'fa-solid fa-tower-broadcast',
    },
    {
      titulo: 'ISO/IEC 20000-1:2018 · Servicios de TI',
      texto:
        'Demostrar que los servicios de TI que presta se gestionan y no solo se prestan: qué ofrece, con qué compromisos, y cómo maneja incidentes, cambios y capacidad.',
      icon: 'fa-solid fa-server',
    },
  ],
}
