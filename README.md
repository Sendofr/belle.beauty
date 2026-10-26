# Belle Beauty & Skin — demo web

Propuesta de una página adaptable a móviles, construida con Vite, HTML, CSS y JavaScript. No requiere base de datos ni credenciales.

## Desarrollo

Requiere Node.js 22.12 o superior (verificado con Node.js 24).

```sh
cd /workspace/belle.beauty
npm ci
npm run dev -- --port 5173
```

## Compilación

```sh
npm run build
npm run preview -- --port 4173
```

`dist/` contiene la web para alojamiento estático. El servidor de desarrollo debe volver a iniciarse al abrir una nueva sesión.

## Funcionalidad

- Tratamientos con filtros y fichas ampliables.
- Galería con imágenes ampliables y cierre por Escape.
- Navegación móvil y accesos al correo, Google Maps e Instagram.
- Formulario que prepara una consulta de turno en WhatsApp. No envía datos a un servidor propio ni confirma una reserva.
- Tipografías y fotografías incluidas en el proyecto, sin solicitudes a proveedores externos para mostrar la página.

La biografía toma el nombre, cargo y experiencia de la referencia facilitada. Las imágenes son ilustrativas generadas para esta demo; no representan a la fundadora ni al establecimiento. Antes de publicar la versión definitiva, reemplazar estas imágenes por fotografías reales, revisar la redacción de la biografía y confirmar la oferta de tratamientos. No se han inventado precios, horarios ni testimonios.

## Validación realizada

Compilación de producción y comprobaciones con Chromium automatizado: seis fichas, filtros, modales, galería, enlaces de contacto, contenido de la consulta de WhatsApp y menú móvil. Sin desbordamiento horizontal a 390, 768 y 1440 píxeles; imágenes cargadas y sin errores JavaScript. Las comprobaciones no enviaron mensajes ni reservaron turnos.
