# Paintball El Bosque

Landing estática independiente, en español, realizada con HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server de VS Code; no necesita instalación ni compilación. Todos los recursos visuales y la tipografía se sirven localmente.

## Dirección creativa actual: The Playfield

Rediseño estructural: navegación lateral fija en escritorio y barra inferior en móvil; portada espacial con fotografía curva inclinada, superficie de nombre recortada y punto de consulta desplazado. Experiencia con fotografía de gran formato y anotación de juego; terreno con fotografía en arco y ficha de El Fuerte; grupos reunidos alrededor de una gran foto y lista escalonada, sin tres tarjetas. Preparación distribuida en cuatro posiciones alrededor de un campo gráfico y una consulta central. Información con máscara lateral; contacto en círculo naranja y ubicación en una zona abierta, con dibujo abstracto que no representa un mapa real. Pie compacto con marca de salida.

Se eliminan numeración de secciones, franjas con cabecera repetida, grandes titulares Anton en todos los bloques, tres columnas comerciales y contacto rectangular. La tipografía de sistema conduce el contenido, Georgia introduce cambios de voz y Anton se limita al nombre de la actividad, teléfono y anotaciones. Paleta crema, verde tinta, lima suave y naranja. El móvil cambia posiciones, proporciones y navegación; la preparación conserva su disposición espacial.

Movimiento: cambios de altura en marcas deportivas de botones, rotación de la consulta del campo, anotación que oscila una sola vez al entrar en pantalla e indicador de zona en la navegación. No hay opacidad cero, clases de espera ni revelado de fotografías. Los observadores no afectan a la visibilidad. Se respeta `prefers-reduced-motion`.

Se leyeron los HTML de S'tilos, El Garaje de Elías, Tasquita El Callejón, Casa Sierra de Cádiz, Chacinas Olmedo y Taxi 9 Plazas en la creación inicial. Para este rediseño se volvieron a inspeccionar la estructura HTML y el CSS de los cinco primeros y se compararon con la versión anterior de Paintball. Similitudes detectadas: cabeceras horizontales, secciones con márgenes uniformes, titulares de gran escala, fotografías rectangulares, bloques de tres columnas y contacto final en una banda de color. La arquitectura actual sustituye esos patrones. No se modificó ninguno. No se realizó una comparación visual exhaustiva de esos proyectos.

## Información y límites

Consulta de fuentes: 23/10/2026.

- [Funly](https://funly.es/game/paintball-el-bosque): identifica Camino el Garrotal, El Bosque, Cádiz, y 638 578 560. Coincide con los datos facilitados por el cliente.
- [Yumping](https://www.yumping.com/paintball/paintball-el-bosque--e19716615): describe juego exterior por equipos, amigos, despedidas y empresas. La ficha indica última actualización 01/04/2025; no constituye confirmación directa de oferta vigente.
- [Reserva Sierra Grazalema](https://www.reservasierragrazalema.com/actividad/paintball-el-bosque/): describe campo abierto y escenario urbano «El Fuerte», reparto de material, indicaciones y supervisión. Es un intermediario y sus condiciones no se presentan como política oficial.

Las fichas difieren en tarifa, mínimo de personas, duración y acceso. No se publican cifras de precio, edad, duración, horario o mínimo de participantes. Tampoco se prometen equipos concretos incluidos. Las modalidades y los grupos se presentan con su contexto de información publicada y sujetos a consulta de disponibilidad actual. No se ha llamado al centro.

Se conserva la dirección del cliente. La mención de Los Nogales se explica como punto de encuentro de una plataforma, que debe confirmarse directamente. Google Maps abre una búsqueda de la dirección, sin coordenadas inventadas. Solo el enlace explícito LLAMAR utiliza `tel:`. Las consultas de grupo conducen al contacto y preparan una nota orientativa; no envían datos ni reservan.

## Fotografías y derechos

No se localizaron fotos del negocio con autorización verificable para su reutilización. Las seis imágenes son fotografías reales de stock, no generadas, de [Pexels](https://www.pexels.com/legal-pages/license/), cuya licencia permite uso comercial y modificación dentro de sus condiciones. Son ilustrativas: no representan instalaciones, clientes, material ni escenarios reales de este negocio. Se identifica esa condición en la portada, imágenes, textos alternativos y pie.

| Archivo | Autor | Fuente |
| --- | --- | --- |
| img/accion.webp | Amar Preciado | https://www.pexels.com/photo/people-playing-paintball-16436589/ |
| img/movimiento.webp | Amar Preciado | https://www.pexels.com/photo/person-playing-paintball-15449206/ |
| img/equipo.webp | Amar Preciado | https://www.pexels.com/photo/men-playing-paintball-16236294/ |
| img/mascara.webp | Hanniel Yaks | https://www.pexels.com/photo/close-up-of-black-paintball-mask-on-table-29266098/ |
| img/campo.webp | José Alcalá | https://www.pexels.com/photo/paintball-player-in-action-during-outdoor-game-34383714/ |
| img/partida.webp | Amar Preciado | https://www.pexels.com/photo/man-kneeling-during-a-game-of-paintball-15449219/ |

Cada descarga se comprobó mediante respuesta HTTP, tamaño, formato detectado, dimensiones y decodificación con Sharp. Se convirtió realmente a WebP, se volvió a decodificar y se comprobó en Chrome. No se cambiaron extensiones para simular conversiones. Los originales descargados se procesaron en memoria. Las imágenes finales suman aproximadamente 1,2 MB.

Tipografía Anton obtenida del repositorio oficial de Google Fonts, bajo SIL Open Font License, incluida en `css/OFL.txt`. El resto utiliza fuentes de sistema.

## Verificación

Herramientas de QA aisladas en `.qa/`, excluidas de Git y ajenas al funcionamiento de la página. La web no depende de paquetes.

- `node --check js/script.js`.
- Chrome mediante Playwright: 375, 768, 1440 y 1920 px, sin desbordamiento horizontal, errores JavaScript ni respuestas locales fallidas.
- Seis imágenes cargadas y visibles, anchors internos válidos, navegación a contacto, preguntas desplegables, consulta por grupo y copia de teléfono.
- Contexto con JavaScript desactivado y movimiento reducido: imágenes cargadas y visibles.
- Capturas completas de escritorio y móvil revisadas visualmente. Informes y capturas en `.qa/`.

En el rediseño The Playfield se repitieron estas comprobaciones en los cuatro anchos. Se corrigieron desbordamientos de la geometría de portada en móvil y de la fotografía panorámica en tablet. Se revisaron capturas de 375, 768, 1440 y 1920 px y se ajustó el posicionamiento de la consulta central en tablet. `node .qa/audit.cjs` vuelve a decodificar los seis WebP, verifica rutas y datos estructurados y comprueba que no hay imágenes duplicadas, reglas que oculten fotografías ni archivos de Netlify. Los resultados quedan en `.qa/redesign-audit.json` y `.qa/browser-results.json`.

No se verificó la apertura de una aplicación telefónica real ni se realizaron llamadas. Los enlaces públicos se investigaron mediante búsqueda web; no se garantiza la disponibilidad futura de páginas externas. La imagen Open Graph tiene ruta relativa para funcionamiento local; falta un dominio definitivo para convertirla a URL absoluta en un futuro entorno público.

No hay configuración de Netlify, dependencias de producción ni despliegue.
