# Área Fit · maqueta de propuesta

Borrador de página web para **Área Fit** (Calle 52 # 12-31, Villa Colombia, Cali), hecho por José David Rodríguez Pinilla para mostrárselo al gimnasio. **No es su página oficial.** Lleva `noindex` y un aviso arriba.

- Datos reales, tomados de su Instagram @areafit.cali (12-nov-2026): logo, dirección, WhatsApp, horario, clases grupales y entrenamiento funcional. Están en `src/data/gimnasio.js` y `src/lib/horario.js`. Las piezas originales están en `referencias/`, que no se publica.
- De ejemplo: las **tarifas** (el gimnasio no las publica), las fotos de la sala (Unsplash y Pexels, licencia libre) y la sección «App de socios», que muestra el sistema para gimnasios (gym-app) con datos inventados.
- En la maqueta, los botones de WhatsApp abren chat con José David. Para la página real, cambiar `WHATSAPP` en `src/data/gimnasio.js` por `573157809404`.

## Uso

Astro 7, HTML estático, sin React.

```bash
npm install
npm run dev       # http://localhost:4321/area-fit-demo/
npm test          # pruebas del horario y del aviso «abierto ahora»
npm run build     # genera dist/
npm run preview   # sirve dist/ como quedaría publicado
```

## Publicación

Cada push a `main` la publica en https://josed235.github.io/area-fit-demo/ con `.github/workflows/deploy.yml`. En el repo: Settings > Pages > Source: **GitHub Actions**.

Salió de `atenas-gym-demo`. No apuntar el remoto a ese repo: un push reemplazaría la maqueta de Atenas.
