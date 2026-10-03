# 0002 — Efectos de interacción adaptados al tema ISO

- **Fecha:** 2026-10-03
- **Estado:** completado, pendiente de visto bueno visual y de commit
- **Commits:** pendiente de commit

## Contexto

Mismo trabajo que el Curriculo (hito 0023) y el hub (0004), pero ajustado al
tono de este sitio: consultoría de sistemas de gestión ISO, donde se vende
rigor y trazabilidad. Por eso el criterio fue **sobrio**: nada juguetón.

## Qué se hizo

- `src/lib/fondo-dotField.js` y `src/lib/efectos.js`: **copias** de las del hub
  (React Bits, MIT + Commons Clause; se usan dentro de este sitio, no se
  redistribuyen; el aviso va en la cabecera).
- **Fondo de puntos** en la portada (`.hero-puntos` + `initHero`), a opacidad
  0.45 y **sin ondulación**: solo reacciona al cursor.
- **Brillo que sigue al cursor** en `.tarjeta` y `.destacado`.
- **Imán** en `.hero-btn` (propiedad `translate`).
- **Contadores** en `.hero-cinta-dato`: suben el «6» y el «4». «Anexo SL» no
  empieza por número y se deja intacto. Son las cifras reales de
  `src/data/hero.js`; no se inventó ninguna.
- **Destello** en el nombre, un barrido de ~2,4 s cada 9 s (más lento que en
  el hub).
- **Propio 1 — normas como chips:** `hero.js` parte el antetítulo («ISO 9001 ·
  14001 · …») en una etiqueta por norma, que entra escalonada. Refuerza el
  mensaje de cobertura. El texto leído es idéntico; los « · » son
  `aria-hidden`.
- **Propio 2 — línea de proceso** en «Cómo trabajo» (`src/lib/proceso.js`,
  código propio): una línea vertical se dibuja con `scaleY` y cada una de las
  cuatro fases enciende su nodo a su paso. El HTML no cambia.
- `efectos.css` entra en `CSS_REVISADOS` del `check`. Tokens nuevos en
  `tokens.css`: `--brillo-cursor`, `--brillo-texto`, `--blanco-titulo`,
  `--ciclo-brillo`, `--espera-brillo`, `--retardo-chips`, `--paso-chips`,
  `--paso-proceso`, `--dibujo-proceso`.

## Decisiones y alternativas descartadas

- **Sin chispas al pulsar.** Encajan en un portafolio, no en un sitio que
  audita y certifica; restan seriedad.
- **Sin título por palabras.** El nombre lleva degradado recortado al texto y
  con palabras animadas queda invisible (ver hito 0004 del hub).
- **Línea de proceso con `text-align: left`** en ese bloque: una línea vertical
  a la izquierda pide texto alineado a ella. Es el único cambio de maqueta.
- **Destello:** excepción deliberada a «solo transform y opacity» (regla 12),
  documentada en `efectos.css`.

## Consecuencias

- Sin dependencias nuevas.
- Verificado: `npm run check` y `npm run build`; Playwright contra `preview`
  (contadores 0→6/4, 6 chips, imán 9 px, línea de proceso activa, brillo con
  `--mx`, movimiento reducido con todo visible y sin animar, móvil sin
  desborde, sin errores de consola). **Sin visto bueno visual del usuario.**
- Si se cambia `efectos.js` o `fondo-dotField.js` en un sitio, hay que
  copiarlo a los demás a mano.

## Pendiente

- Visto bueno visual y prueba en móvil real.
- Números ajustables: `opacidad` y `ondulacion` en `initHero`;
  `--ciclo-brillo`, `--paso-chips`, `--paso-proceso`, `--dibujo-proceso` en
  `tokens.css`.
