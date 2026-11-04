/* ============================================================
   RECURSOS ABIERTOS

   Enlaza al repositorio `iso-toolkit`, público desde el 2026-11-04. Hasta
   entonces la sección no enlazaba nada a propósito: un repo vacío demuestra
   lo contrario de lo que busca esta sección.

   EL TEXTO DICE QUÉ ESTÁ LISTO Y QUÉ NO. Si se nombra algo que el repo
   todavía no tiene (plantillas, mapa al detalle), va como «en construcción»:
   quien abra el enlace tiene que encontrar lo que se le prometió. Al publicar
   una pieza nueva en el toolkit, se mueve aquí de una frase a la otra.

   NUNCA se sube aquí el PDF de una norma, ni un extracto, ni una traducción.
   Las plantillas son de autoría propia y no reemplazan a la norma, que el
   cliente tiene que comprarle al INN.
   ============================================================ */

export const recursos = {
  id: 'recursos',
  eyebrow: 'Abierto',
  titulo: 'Recursos abiertos',
  subtitulo: 'Material de autoría propia, publicado en abierto para que lo use quien quiera. Sin registro y sin versión premium escondida.',

  cuerpo: `
    <p>Está publicado en un repositorio público: el <strong>catálogo de las
    seis normas</strong> en datos estructurados, ocho métodos paso a paso
    —del diagnóstico de brechas a la revisión por la dirección— y un generador
    que arma la estructura de un sistema integrado, la lista maestra de
    documentos y los checklists por norma.</p>

    <p>En construcción: el <strong>mapa de correspondencia del Anexo
    SL</strong> al detalle de subapartado —qué requisito de una norma cubre
    cuál de las otras— y las plantillas base.</p>

    <p>En este rubro nadie contrata a quien no ha visto trabajar, y un
    repositorio abierto lo demuestra mejor que una página de servicios.</p>

    <p class="tarjeta-accion">
      <a class="btn-linea" href="https://github.com/seiler18/iso-toolkit"
         target="_blank" rel="noopener noreferrer">
        Ver el repositorio en GitHub
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </a>
    </p>
  `,

  imagen: null,

  destacados: [
    {
      icon: 'fa-solid fa-triangle-exclamation',
      titulo: 'Lo que no va a encontrar ahí',
      texto:
        'El texto de las normas. Son obra protegida y las vende el INN: ni copias, ni extractos, ni resúmenes que las reemplacen. Las plantillas son propias y se usan junto a la norma, no en su lugar.',
    },
  ],
}
