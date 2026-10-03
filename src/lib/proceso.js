/*
 * LÍNEA DE PROCESO — la sección «Cómo trabajo» tiene cuatro fases numeradas;
 * al entrar en pantalla, una línea vertical se dibuja de arriba abajo y cada
 * fase enciende su nodo a su paso.
 *
 * Por qué en este sitio: lo que se vende es método (alcance cerrado, cuatro
 * fases, traspaso). Un cliente de ISO piensa en ciclos y en trazabilidad; ver
 * el proceso «recorrerse» refuerza que hay un orden, sin decir nada que el
 * texto no diga ya. Es código propio, no de React Bits.
 *
 * El HTML no cambia: el texto sigue siendo cuatro párrafos. Este módulo solo
 * añade clases (`proceso`, `proceso-activo`) y la posición `--i` de cada fase;
 * el dibujo vive en src/styles/efectos.css. Sin JS, o con movimiento reducido,
 * la línea aparece ya completa.
 */
export function initProceso(selector) {
  const contenedor = document.querySelector(selector)
  if (!contenedor) return

  const fases = [...contenedor.querySelectorAll(':scope > p')]
  if (!fases.length) return
  fases.forEach((p, i) => p.style.setProperty('--i', i))
  contenedor.classList.add('proceso')

  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (sinMovimiento || !('IntersectionObserver' in window)) {
    contenedor.classList.add('proceso-activo')
    return
  }

  // Umbral bajo: el bloque es alto y con 0,5 de visibilidad en un móvil
  // podría no llegar nunca a cumplirse.
  const observador = new IntersectionObserver(
    ([e]) => {
      if (!e.isIntersecting) return
      contenedor.classList.add('proceso-activo')
      observador.disconnect()
    },
    { threshold: 0.2 }
  )
  observador.observe(contenedor)
}
