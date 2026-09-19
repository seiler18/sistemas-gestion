/* ============================================================
   CÓMO TRABAJO

   Va sin enlace en el menú (`enMenu: false` en site-map.js): con siete
   entradas la topbar se aprieta, y este bloque se lee al bajar desde
   Servicios, que es justo donde surge la pregunta «¿y esto cómo funciona?».

   Los límites del punto 4 no son modestia: son el filtro que evita el
   cliente equivocado. Quien necesite cuarenta horas semanales no debe
   escribir, y es mejor que lo sepa aquí que en la tercera reunión.
   ============================================================ */

export const metodo = {
  id: 'metodo',
  eyebrow: 'Cómo trabajo',
  titulo: 'Cuatro fases, sin sorpresas de alcance',
  subtitulo: 'El mismo protocolo para todos los encargos, con el alcance y el precio cerrados antes de la primera línea de trabajo.',

  cuerpo: `
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
  `,

  imagen: null,

  destacados: [
    {
      icon: 'fa-solid fa-clock',
      titulo: 'Disponibilidad real',
      texto:
        'Entre 8 y 10 horas por semana. Eso descarta implementaciones grandes con equipo en terreno, y favorece encargos acotados y bien definidos. Prefiero decirlo antes.',
    },
    {
      icon: 'fa-solid fa-scale-balanced',
      titulo: 'Lo que no hago',
      texto:
        'No audito lo que yo mismo implementé: quien asesora no puede auditar, es el principio de imparcialidad de ISO/IEC 17021-1. Tampoco emito certificados ni sellos de ningún tipo.',
    },
    {
      icon: 'fa-solid fa-industry',
      titulo: 'Dónde soy fuerte y dónde no',
      texto:
        'Mi experiencia vivida es en servicios y sistemas de información. En manufactura, alimentos o construcción el criterio es prestado, y se lo advertiré antes de aceptar el encargo.',
    },
  ],
}
