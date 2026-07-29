# Deploy de `chairwoman.ninaquisinski.com` na Hostinger

## Contrato do projeto

- repositório: `nquisinski1/Chairwoman`
- branch de produção: `main`
- Node.js: `22.13+`
- instalação: `npm ci`
- build de produção: `NEXT_PUBLIC_SITE_INDEXABLE=true npm run build`
- diretório publicado: `out`
- domínio canônico: `chairwoman.ninaquisinski.com`

## Configuração na Hostinger

1. Criar o subdomínio `chairwoman.ninaquisinski.com` no painel da hospedagem.
2. Conectar o repositório `nquisinski1/Chairwoman` e selecionar a branch `main`.
3. Configurar os comandos de instalação e build acima.
4. Definir `out` como diretório público. Se o plano usar deploy estático manual, copiar **o conteúdo de `out/`** para a raiz pública do subdomínio.
5. Criar o registro DNS A ou CNAME indicado pela própria Hostinger; não criar nameservers filhos.
6. Ativar SSL e forçar HTTPS.

## Verificação antes de considerar online

- abrir `/`, `/pt/` e `/en/` no domínio real;
- confirmar `200`, imagens, fontes, navegação interna e seletor de idioma;
- conferir layout em 390 px, iPad e desktop;
- verificar canonical, `robots.txt`, `sitemap.xml` e Open Graph;
- confirmar que nenhum conteúdo de StepUp, Lifestyle ou Newsletter aparece;
- conectar Search Console somente após a aprovação final.

GitHub atualizado, build aprovado e domínio online são estados diferentes. Este repositório prepara o primeiro; a publicação e a validação do domínio acontecem na Hostinger.
