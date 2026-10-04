# 0004 — Ondas en la portada y el sitio como diapositivas en escritorio

- **Fecha:** 2026-10-04
- **Estado:** completado
- **Commits:** pendiente de commit

## Contexto
Tras la paleta «Acero» (hito 0003), Jesús vio dos cosas:
1. En el tema claro, la matriz de puntos de la portada casi no se veía.
2. La página se sentía como «un scroll infinito hacia abajo». Pidió pasar
   las secciones como diapositivas de izquierda a derecha, con una animación
   distinta al entrar cada una, para un aire más futurista y elegante, sin
   perder la sobriedad.

Se le preguntó antes de construir: eligió **Waves** (de cuatro fondos de
React Bits) y **diapositivas solo en escritorio**. En el celular las
secciones miden 1.100–2.400px (dos o tres pantallas cada una).

## Qué se hizo
- `src/lib/fondo-waves.js` (nuevo): port de Waves de React Bits a canvas 2D,
  con las salvaguardas de la skill `fondos-react-bits` (pausa fuera de
  pantalla y con la pestaña oculta, un fotograma quieto con movimiento
  reducido, densidad retina). Degradado `--primario-claro` → `--acento`;
  opacidad desde `--opacidad-ondas` (0.55 claro, 0.4 oscuro).
  `src/lib/fondo-dotField.js` **se borró**: no lo usaba nadie más.
- Hero: la capa pasa de `.hero-puntos` a `.hero-ondas`, con dos máscaras
  (desvanecido hacia abajo + atenuación detrás del texto). En móvil la zona
  atenuada es más ancha (`responsive.css`).
- `src/lib/diapositivas.js` (nuevo) + `src/styles/diapositivas.css` (nuevo):
  a partir de 992px cada hijo de `<main>` es una diapositiva a pantalla
  completa. Se navega con el menú, los enlaces `#ancla`, una píldora inferior
  (contador, marcas, flechas y una ↓ si queda contenido abajo), el teclado,
  la rueda o el trackpad, y deslizando el dedo en una tablet. El historial
  sigue a la diapositiva.
- Seis transiciones, fijas por diapositiva de destino y sensibles al
  sentido: profundidad (la portada), deslizar, barrido, cubo, cortina e iris.
- `src/lib/scrollspy.js`: opción `pausado` y limpieza de todos los enlaces
  al activar (en modo diapositivas el resaltado lo pone el otro módulo).
- `tokens.css`: `--diapo-duracion` (760ms), `--curva-diapo`,
  `--perspectiva-diapo`, `--diapo-hueco-pie`, `--fondo-diapo(-par)`,
  `--opacidad-ondas`.
- `check-integrity.js`: `diapositivas.css` entra en la revisión de literales.

## Decisiones y alternativas descartadas
- **Solo escritorio.** En el teléfono, una diapositiva que además hace scroll
  hacia abajo enfrenta dos gestos. Ahí sigue la página vertical con las
  entradas de `reveal.js`. El modo se enciende o apaga al cruzar los 992px
  sin recargar, y conserva la sección que se estaba viendo.
- **No es un carrusel** en el sentido de la regla 4 («rejillas, no
  carruseles»): esa regla va contra esconder CONTENIDO detrás de flechas.
  Aquí cada sección sigue entera, con todas sus tarjetas, y el menú lleva a
  cualquiera de un clic.
- **Las diapositivas inactivas quedan fuera del cuadro** (`translate 100%`)
  y no solo ocultas, además de `inert`. Así el IntersectionObserver de
  `reveal.js` las da por no visibles (las tarjetas entran animadas al llegar
  la diapositiva) y las ondas no gastan fotogramas detrás de otra página.
- **Rueda agrupada en gestos** (220ms sin eventos = gesto nuevo). Un gesto
  hace una sola cosa: desplazar el contenido o cambiar de diapositiva. Sin
  esto, la inercia de un trackpad atravesaba tres páginas o cambiaba de
  página al terminar de leer una sin que nadie lo pidiera. Comprobado con
  Playwright: 15 eventos seguidos = una sola diapositiva.
- **Una transición por destino, no aleatoria**: cada página tiene su forma
  de llegar, así que se percibe intención y no un efecto de feria.
- **Señal de «hay más abajo»** (desvanecido + ↓ en la píldora): a 1366×800,
  cinco de las siete secciones no caben. Se ignoran los últimos 40px, que
  son el hueco reservado para la píldora y no contenido.
- **Fallo encontrado al probar:** el minificador del build reescribe `760ms`
  como `.76s`; leída como milisegundos, la red de seguridad cortaba cada
  transición a los 150ms. `duracion()` entiende las dos unidades.
- El pie se muda dentro de la última diapositiva; fuera no se vería.

## Ajustes tras la revisión de Jesús (mismo día)
- **El menú en móvil marcaba la sección anterior** al tocar un enlace (ya
  pasaba antes de este trabajo). El salto a un ancla sumaba dos márgenes de
  80px: `scroll-padding-top` en el `<html>` y `scroll-margin-top` en cada
  `.section`. La sección aterrizaba a 160px, por debajo de la línea de
  lectura del scroll-spy (96px). Se quitó el de las secciones; comprobado
  enlace por enlace en móvil.
- **Capas del fondo de la portada fijas** en modo diapositivas
  (`.hero-fondo`, `.hero-ondas`): absolutas medían una pantalla y, en una
  ventana baja, al desplazar la portada dejaban una franja sin fondo (se vio
  en el Curriculo). Su caja pasa a ser `#contenido`.
- **`assets/img/og.jpg` nuevo**: captura de la portada a 1200×630 en el tema
  claro, sin la píldora. La anterior era de la paleta «Núcleo».

## Consecuencias
- `<main>` en escritorio es `position: fixed` y la página no tiene scroll
  propio: el desplazamiento vive dentro de cada diapositiva.
- Una sección nueva (skill `agregar-seccion`) es una diapositiva más sin
  tocar nada: basta con que sea hijo de `<main>` con `id`.
- Cualquier `position: fixed` dentro de una sección quedaría atrapado por el
  `transform` de la diapositiva durante la transición.
- `fondo-waves.js` es MIT + Commons Clause: se usa aquí, pero no se copia a
  la plantilla de WebMaker. `diapositivas.js` es propio y sí podría ir.

## Pendiente
- Visto bueno de Jesús en un navegador real (las transiciones se midieron
  y capturaron a mitad de camino con Playwright, pero no se vieron en
  movimiento).
