# Despliegue posterior en Hostinger

## Contrato de build

- Node.js: `22.13+`
- instalación: `npm ci`
- build: `npm run build`
- directorio publicado: `out`
- branch prevista: `main`
- dominio canónico previsto: `ninaquisinski.com`

## Gate de pre-lanzamiento

Mantener `NEXT_PUBLIC_SITE_INDEXABLE` sin definir durante revisión. Esto exporta `noindex, nofollow, noarchive`.

Solo después de aprobación editorial, jurídica y de activos:

```text
NEXT_PUBLIC_SITE_INDEXABLE=true
```

## Verificación obligatoria en Hostinger

1. Confirmar repositorio, branch `main`, directorio raíz y tipo de aplicación.
2. Confirmar que Hostinger publica `out`, no el código fuente.
3. Verificar `/`, `/pt/` y `/en/` con sus idiomas, imágenes y metadatos.
4. Verificar dominio, redirección HTTPS, certificado SSL y ausencia de rutas 404.
5. Revisar 390 px, iPad y desktop en el dominio real.
6. Confirmar robots, canonical, Open Graph, analítica, privacidad y Search Console antes de indexar.

Un build aprobado o un mensaje de despliegue completado no demuestra que el dominio esté online correctamente.
