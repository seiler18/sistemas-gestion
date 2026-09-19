# Briefing — Jesús Seiler · Sistemas de Gestión

- **Fecha:** 2026-09-19
- **Estado:** aprobado por el usuario
- **Fuentes:** conversación del 2026-09-19;
  `Negocios Digitales/organizador_iso/contexto/perfil_iso.md`,
  `contexto/limites_legales.md`, `productos/catalogo.md`.

## Qué es esto

El sitio con el que Jesús Seiler ofrece **servicios sobre sistemas de gestión
ISO**: diagnóstico, acompañamiento a la auditoría de certificación,
integración multinorma y automatización del SGI.

No es un blog ni un portafolio: es una **página de servicio**. El visitante
tiene que entender en treinta segundos qué se ofrece, por qué este señor y
no otro, y cómo escribirle.

## Objetivo del sitio

1. Que una pyme a la que le exigen certificarse entienda que hay un camino
   intermedio entre «no sé por dónde empezar» y «una consultora por millones».
2. Que un gerente de calidad reconozca, por cómo está escrito, que quien está
   detrás **opera un SGI de verdad** y no estudió la norma para venderla.
3. Que quien llegue escriba. Una sola conversión: el formulario.

## Público

- **Empresa ya certificada en una norma que quiere una segunda.** Es el
  cliente ideal: el dolor es «no quiero duplicar toda la papelería otra vez»,
  y la integración bajo Anexo SL es exactamente donde casi nadie compite en
  español.
- **Pyme chilena/LatAm a la que le exigen certificarse** por licitación,
  cliente grande o casa matriz.
- **Encargado de calidad recién nombrado** que heredó el SGI y no es del área.

## Identidad

| Decisión | Valor |
|---|---|
| **Armazón** | `topbar` — es una página de servicios; la sidebar es del CV y conviene que no se confundan |
| **Paleta** | Pizarra Institucional — grises azulados y azul sobrio, sin brillos. La referencia la marca para auditoría y servicios a empresas |
| **Tipografía** | Montserrat (títulos) / Open Sans (texto) — corporativo clásico |

**Tono:** el de la casa. Directo, sin humo, con los límites dichos en voz alta.
En este sector la honestidad no es una postura: es el argumento de venta,
porque quien lee detecta al vendedor de humo en dos frases.

## Secciones

| # | Sección | Id | Componente |
|---|---|---|---|
| 1 | Portada | `inicio` | hero |
| 2 | Servicios | `servicios` | tarjetas + método |
| 3 | Las seis normas | `normas` | tarjetas |
| 4 | Recursos abiertos | `recursos` | bloque |
| 5 | Quién está detrás | `quien` | bloque |
| 6 | Contacto | `contacto` | contacto |

Seis en `topbar`: con siete los enlaces se aprietan. El método va dentro de
Servicios porque es *cómo* se entregan, no un servicio aparte.

## Contenido por sección

- **Portada.** Las seis normas como cifra, la propuesta en una frase, y el
  botón al formulario.
- **Servicios.** Cuatro: diagnóstico de brechas · acompañamiento a la auditoría
  de certificación · integración multinorma · automatización del SGI. Los dos
  primeros son el volumen; el cuarto es el diferenciador (ISO + RPA/Power BI/IA
  casi no tiene oferta). Precios: **no se publican**. Se dice «a precio fijo,
  sin horas de reunión», que es la promesa real del catálogo.
- **Las seis normas.** Una tarjeta por norma, con qué tiene que demostrar la
  organización. Redactado **desde la pregunta «¿qué tiene que demostrar?»,
  nunca desde «¿qué dice el párrafo?»** — es la regla de redacción de
  `limites_legales.md` §1.
- **Recursos abiertos.** El `iso-toolkit`: checklists y plantillas de autoría
  propia, gratis. Es el argumento de venta antes de pedir un peso. Si al
  construir no hay contenido publicable en el repo, la sección **describe lo
  que habrá y no enlaza** — un enlace a un repo vacío hace el daño contrario.
- **Quién.** Credenciales reales y los límites honestos: 8–10 h/semana, un solo
  sector de experiencia vivida. Decirlo cualifica al cliente en vez de espantarlo.
- **Contacto.** FormSubmit + WhatsApp.

## Restricciones legales — no son preferencias

De `organizador_iso/contexto/limites_legales.md`. Cualquiera de estas roto
invalida el sitio:

- ⛔ **Ni una vez las palabras** «certifico», «certificador», «certificación
  garantizada», «sello», «avalado», «homologado», «acreditado» referidas a
  Jesús. Se dice **«preparación para la certificación»** y **«acompañamiento
  hasta la auditoría de certificación»**.
- ⛔ **Ningún logo** de ISO, INN, IAF ni organismo de certificación.
- ⛔ **Ni una frase del texto de las normas.** Todo parafraseado. Citar número
  y título de cláusula sí es legítimo.
- ⛔ **OPCIONES S.A. no existe en este sitio**: ni nombre, ni caso de éxito, ni
  sus certificaciones, ni sus documentos. Sí se puede decir, sin nombrarla,
  «gestiono a diario un sistema integrado multinorma» y «he preparado y vivido
  auditorías de vigilancia y recertificación».
- ⛔ **Ninguna promesa de plazo ni de resultado.** Nada de «certifícate en 90 días».
- ✅ **Descargo de responsabilidad visible**: material orientativo, no garantiza
  la certificación, no sustituye a la norma (que se adquiere al INN), no es
  asesoría legal.
- ✅ Título correcto y único: **«Auditor interno en ISO 9001, 14001, 45001,
  27001, 22301 y 20000-1»**.

## Contacto

FormSubmit (`/ajax/`) + `wa.me`, el mismo mecanismo ya probado en el CV.

- **Correo:** `ichbinseiler@gmail.com`
- **WhatsApp:** `56953292612`

> El primer envío desde el dominio nuevo **no llega**: FormSubmit manda un
> correo de activación que hay que confirmar una vez. Hacerlo antes de
> anunciar el sitio.

## Publicación

- **Repo:** `seiler18/sistemas-gestion` — público.
- **URL:** `https://seiler18.github.io/sistemas-gestion/`
- **`base` de Vite:** `/sistemas-gestion/`
- **Deploy:** GitHub Actions → `gh-pages`.

## Assets que faltan

- [ ] `favicon.webp` y `og.webp`. Sin ellos `npm run check` falla, así que se
      quitan del `<head>` y se anotan aquí hasta que el usuario los aporte.
- [ ] Foto de Jesús para la sección «Quién», si la quiere.
- [ ] **Los certificados de los cursos de auditor interno.** `perfil_iso.md`
      lo marca como condición previa a publicar la bio: si alguien los pide,
      hay que poder mostrarlos al toque.

## Fuera de alcance

- **Venta en línea.** No hay pasarela de pago ni carrito. El sitio capta; el
  cobro se acuerda fuera.
- **Precios publicados.** El catálogo los tiene en rangos y sin validar contra
  mercado. Publicar un número sin estar seguro es peor que no publicarlo.
- **Los kits de plantillas (#2, #3, #4 del catálogo).** No existen todavía.
  Cuando existan, entran como sección de producto.
- **Consultoría por horas o retainer mensual.** Descartado en el catálogo: no
  hay tiempo y crea dependencia.

## Riesgo abierto, del propio usuario

`limites_legales.md` §5.2 y `catalogo.md` §4 marcan los servicios de asesoría
e implementación como **Fase 4, con «⚠️ revisar contrato laboral» pendiente**:
si OPCIONES S.A. presta consultoría ISO, venderla por fuera es competencia
directa. **El sitio se construye completo; publicarlo es decisión del usuario
y esa revisión sigue sin hacerse.**

## Cerrar

Aprobado en la conversación del 2026-09-19. Siguiente: `generar-andamiaje`.
