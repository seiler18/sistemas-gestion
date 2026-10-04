# 0003 — Paleta «Acero» y tema claro / oscuro

- **Fecha:** 2026-10-04
- **Estado:** completado
- **Commits:** `fc0bd50`

## Contexto
El sitio salió con la paleta «Núcleo»: índigo eléctrico (`#4763f2`), lavanda
(`#8fa2ff`) y aguamarina neón (`#2ee6b0`) sobre casi negro. Jesús la encontró
demasiado llamativa —«muy femenina o exagerada»— para alguien que implementa
sistemas ISO y aplica IA a los procesos. Pidió blanco y azul, tecnológico pero
sobrio, y el mismo cambio en sus tres sitios personales (este, el hub y el
Curriculo), con modo claro y oscuro como en Seregenera.

## Qué se hizo
- `src/styles/tokens.css`: paleta «Acero». El bloque de `:root` es el tema
  **claro** (blanco, azul `#1d4ed8`, cian apagado `#0e7490`, texto pizarra) y
  `:root[data-tema="oscuro"]` al final redefine los colores base (pizarra
  azulada `#0a101c`, azul `#2563eb`, cielo `#38bdf8`). Las sombras pasaron al
  bloque de color porque cambian con el tema. Tokens nuevos para lo que no se
  puede derivar: `--filtro-titulo`, `--sombra-lema`, `--inicio-titulo` (antes
  `--blanco-titulo`), `--lavado`, `--lavado-fuerte`, `--sombra-lateral`,
  `--sombra-cinta`, `--cambio-tema`.
- `components.css`, `layout.css`, `responsive.css`, `efectos.css`: los cinco
  sitios que asumían fondo oscuro (blanco al 5–8 % para hover, contornos
  negros en los títulos, sombras negras fijas) ahora leen tokens.
- `src/lib/tema.js`: el interruptor. Guarda en `localStorage`
  (`seiler18:tema`), cambia el `theme-color` y avisa con `tema:cambio`. El
  cambio se anima con un círculo desde el botón (View Transitions).
- `public/tema-inicial.js`: script clásico en el `<head>` que aplica el tema
  guardado antes de pintar. Primer archivo de `public/` del proyecto.
- `src/components/shell.js`: botón luna/sol en `.topbar-extras` (siempre
  visible, también en móvil) y en la columna lateral del armazón `sidebar`.
- `src/components/sections/hero.js`: el canvas de puntos se rehace al cambiar
  de tema (guarda los colores que leyó al montarse) y es más tenue en claro.
- `scripts/check-integrity.js`: las rutas del HTML se buscan también en
  `public/`.

## Decisiones y alternativas descartadas
- **Claro por defecto y sin seguir `prefers-color-scheme`.** Lo pedido fue
  «blanco y azul»; el oscuro existe para quien lo elija. Igual que en
  Seregenera (allí con cookie porque hay servidor; aquí `localStorage`, que es
  lo que tiene un sitio estático).
- **Una sola clave para los tres sitios.** Hub, sistemas-gestion y Curriculo
  viven en el mismo origen (`seiler18.github.io`) y comparten `localStorage`:
  quien elige oscuro en uno lo encuentra en los otros.
- **Archivo aparte para el anti-destello**, no `<script>` en línea: la CSP es
  `script-src 'self'` sin `'unsafe-inline'` y el check (punto 17) lo prohíbe.
  En `public/` para que Vite lo copie tal cual y le anteponga el `base`.
- **Los dos iconos en el botón y el CSS elige**, en vez de sincronizar estado
  entre las copias del botón por JS.
- **Se descartó un cian más vivo como acento en claro**: cualquier cian por
  encima de `#0e7490` cae por debajo de 4,5:1 sobre `--bg-2`.
- **Revisión visual con Playwright** (capturas de escritorio y móvil, en los
  dos temas): sin desborde ni errores de consola; el botón cambia, guarda y
  sobrevive a la recarga.

## Consecuencias
- Un token de color nuevo que no salga de `color-mix()` necesita su pareja en
  el bloque oscuro de `tokens.css`, o se verá igual en los dos temas.
- `--blanco-titulo` ya no existe: es `--inicio-titulo`.
- La clave `seiler18:tema` está en tres repos; cambiarla es cambiarla en los
  tres.

## Pendiente
- `assets/img/og.jpg` (la imagen al compartir el enlace) sigue siendo una
  captura de la paleta anterior.
- Llevar el tema claro/oscuro a la plantilla de WebMaker (`plantilla/`): hoy
  los sitios nuevos siguen naciendo con un solo tema.
- Visto bueno de Jesús en un navegador real.
