# ninaquisinski.com

Landing editorial trilingüe de Nina Quisinski. Construye autoridad pública con fotografía documental, roles verificables, pensamiento propio y prueba institucional, sin fabricar notoriedad ni endorsements.

## Rutas canónicas

- `/` — español (`es-PA`)
- `/pt/` — portugués (`pt-BR`)
- `/en/` — inglés (`en-US`)

Las rutas editoriales anteriores siguen exportándose como archivo, pero la landing es la experiencia canónica de lanzamiento.

## Desarrollo

Requiere Node.js 22.13 o superior.

```bash
npm ci
npm run dev
```

## Validación y exportación

```bash
npm test
```

El build estático queda en `out/`. El postprocesado de build garantiza el atributo `lang` correcto en cada HTML exportado.

## Estado de publicación

La versión actual conserva `noindex`. Solo debe compilarse con `NEXT_PUBLIC_SITE_INDEXABLE=true` después de completar derechos fotográficos, claims, privacidad, analítica, Search Console y revisión final del dominio.

Véanse [docs/PROJECT_BRIEF.md](docs/PROJECT_BRIEF.md), [docs/PUBLICATION_GATES.md](docs/PUBLICATION_GATES.md) y [docs/HOSTINGER_DEPLOYMENT.md](docs/HOSTINGER_DEPLOYMENT.md).
