# Nina Quisinski — Sistema tipográfico v7

**Estado:** combinação aprovada por Nina em 23 de julho de 2026 e aplicada globalmente ao site.

## Assinatura do nome

| Parte | Fonte | Uso |
|---|---|---|
| `Nina` | `Pinyon Script` | gesto caligráfico do wordmark |
| `QUISINSKI` | `Noto Serif Display` | sobrenome em caixa-alta e contraste editorial |

A construção traduz a relação visual da referência recebida: caligrafia sobre uma serifada editorial. O desenho, as proporções e o nome são próprios de Nina; os logotipos da prancha de referência não são reproduzidos.

## Sistema do site

| Papel fixo | Token técnico | Fonte | Aplicação |
|---|---|---|---|
| Display editorial | `--font-display` | `Noto Serif Display` | títulos, nomes, números de destaque e citações curtas |
| Assinatura | `--font-signature` | `Pinyon Script` | `Nina` no wordmark e um acento caligráfico controlado |
| Leitura | `--font-body` | `Inter` | parágrafos, legendas, metadados e formulários |
| Interface | `--font-interface` | `Inter` | navegação, botões, links, seletores de idioma e categorias |

Esses quatro papéis formam um único contrato global. Toda página — Home, Chairwoman e futuras áreas de StepUp, ideias, imprensa ou lifestyle — herda os mesmos tokens; nenhuma rota define uma família tipográfica própria.

## Emblema Chairwoman

- ativo de origem: `1.svg`, fornecido por Nina;
- função: selo exclusivo da página Chairwoman, junto à assinatura e ao mandato;
- aplicação cromática: bordô ou dourado por máscara CSS, preservando o desenho original;
- não é monograma `NQ`, brasão governamental nem símbolo de endosso institucional.

## Regras

- A caligrafia aparece somente em `Nina`, no cabeçalho, hero e rodapé.
- `QUISINSKI` permanece em caixa-alta.
- A caligrafia nunca substitui textos de interface ou conteúdo.
- Títulos combinam `Noto Serif Display` com, no máximo, uma palavra em `Pinyon Script`.
- Parágrafos, legendas, botões e navegação usam somente `Inter`.
- Peso, escala e espaçamento podem variar por contexto; a família e sua função não mudam entre páginas ou idiomas.
- Uma nova fonte só pode entrar após aprovação, confirmação de licença e entrega do arquivo web correspondente.
- `The Seasons`, `Calgary`, `Citadel Script` e `Perandory` permanecem referências de ritmo; não entram no site sem arquivos web e licença de uso.
- O wordmark deve continuar legível a partir de 320 px.
- As fontes são carregadas pelo Google Fonts e possuem alternativas locais no CSS.
