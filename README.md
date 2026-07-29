# Nina Quisinski — Chairwoman

Site institucional e editorial exclusivo da presidência de Nina Quisinski na Câmara de Comércio e Indústria Brasil–Panamá.

**Domínio canônico:** `https://chairwoman.ninaquisinski.com`

## Rotas públicas

- `/` — espanhol (`es-PA`)
- `/pt/` — português (`pt-BR`)
- `/en/` — inglês (`en-US`)

As rotas anteriores são mantidas apenas como redirecionamentos de compatibilidade. O projeto não publica StepUp, Lifestyle, Newsletter ou outras vertentes da marca pessoal.

## Desenvolvimento e validação

Requer Node.js 22.13 ou superior.

```bash
npm ci
npm test
```

O build estático fica em `out/` e é o conteúdo que deve ser publicado na Hostinger.

## Indexação

Por segurança, o build normal permanece com `noindex`. Para gerar a versão aprovada para produção:

```bash
NEXT_PUBLIC_SITE_INDEXABLE=true npm run build
```

Instruções operacionais: [docs/HOSTINGER_DEPLOYMENT.md](docs/HOSTINGER_DEPLOYMENT.md).
