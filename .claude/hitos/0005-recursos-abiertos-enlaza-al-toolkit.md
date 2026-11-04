# 0005 — «Recursos abiertos» enlaza al iso-toolkit

- **Fecha:** 2026-11-04
- **Estado:** completado
- **Commits:** `163345f`

## Contexto

El hito 0001 dejó la sección sin enlace a propósito: el repositorio estaba sin
publicar y a medio escribir. `iso-toolkit` es público desde el 2026-11-04
(hito 0005 de `organizador-iso`).

## Qué se hizo

`src/data/recursos.js` describe lo que el repositorio tiene hoy (catálogo de
las seis normas, ocho métodos y el generador), deja como «en construcción» lo
que falta y suma un botón «Ver el repositorio en GitHub». Sigue siendo un
bloque de texto: la sección pide prosa y su destacado legal, no una rejilla.

## Decisiones y alternativas descartadas

- No se pasó a tarjetas, como proponía el 0001: con un solo repositorio, una
  rejilla de una tarjeta se ve vacía y se pierde el destacado «Lo que no va a
  encontrar ahí».
- El texto separa lo publicado de lo pendiente para que quien abra el enlace
  encuentre lo prometido. La cabecera de `recursos.js` pide moverlo de una
  frase a la otra cuando el toolkit avance.

## Consecuencias

Cada pieza nueva del toolkit (plantillas, cruce del Anexo A) obliga a revisar
esta sección.

## Pendiente

Revisión visual del botón en escritorio y celular (la hace Jesús).
