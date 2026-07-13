# Arquitetura de Diretórios

**Arquivo:**

```text
docs/_01-arquitetura-de-diretorios.md
```

---

# Objetivo

Este documento descreve a estrutura oficial de diretórios do projeto.

Diferentemente da documentação cronológica, este documento representa sempre o estado atual da arquitetura.

Sempre que a organização das pastas mudar, este documento deverá ser atualizado.

---

# Estrutura geral

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── assets/
│   ├── css/
│   ├── icons/
│   ├── images/
│   └── videos/
│
├── content/
│   ├── index.md
│   │
│   ├── blog/
│   │   ├── index.njk
│   │   └── posts/
│   │       ├── posts.11tydata.js
│   │       └── *.md
│   │
│   ├── disease/
│   │
│   ├── links/
│   │
│   └── pics/
│
├── docs/
│
├── layouts/
│   ├── base.njk
│   └── blog.njk
│
├── .eleventy.js
├── package.json
└── README.md
```

---

# Responsabilidade de cada pasta

## .github/

Contém toda a automação do projeto.

Atualmente:

* GitHub Actions
* Deploy automático

Nenhum arquivo do site deve ser colocado aqui.

---

## assets/

Contém arquivos estáticos.

Exemplos:

* CSS
* imagens
* vídeos
* ícones

Nenhum conteúdo textual do site deve ficar nesta pasta.

---

## content/

Contém todo o conteúdo publicado.

É considerada a principal pasta do projeto.

Todo novo conteúdo deve nascer aqui.

---

## layouts/

Contém exclusivamente layouts reutilizáveis.

Nenhuma página publicada deve existir nesta pasta.

Layouts apenas definem estrutura visual.

---

## docs/

Contém toda a documentação do projeto.

É dividida em duas categorias:

### Documentação histórica

Arquivos:

```text
01-*.md
```

Registram a construção do projeto passo a passo.

Nunca mudam de objetivo.

---

### Documentação de referência

Arquivos:

```text
_01-*.md
```

Descrevem a arquitetura atual.

São atualizados conforme o projeto evolui.

---

# Estrutura da pasta content

```text
content/

index.md
```

Representa:

```text
/
```

---

```text
content/blog/
```

Representa:

```text
/blog/
```

Esta pasta contém apenas infraestrutura do Blog.

Ela não contém artigos.

---

```text
content/blog/posts/
```

Representa todos os artigos do Blog.

Cada arquivo Markdown existente nesta pasta gera automaticamente uma página do site.

---

# Estrutura dos artigos

Cada artigo corresponde exatamente a um arquivo Markdown.

Exemplo:

```text
content/blog/posts/

primeiro-post.md
```

↓

gera automaticamente uma página do Blog.

---

# Configuração compartilhada

A pasta:

```text
content/blog/posts/
```

possui um:

```text
posts.11tydata.js
```

Esse arquivo aplica automaticamente configurações compartilhadas para todos os artigos.

Isso evita repetição de código.

---

# Separação entre índice e artigos

A arquitetura faz uma distinção importante.

```text
content/blog/index.njk
```

não é um artigo.

Sua única responsabilidade é listar artigos.

---

Enquanto:

```text
content/blog/posts/*.md
```

representam artigos individuais.

Essa separação evita conflitos de configuração e simplifica a manutenção.

---

# Estrutura dos layouts

Atualmente existem dois layouts.

## base.njk

Responsável por:

* HTML base
* sidebar
* CSS global
* estrutura comum

---

## blog.njk

Responsável por:

* layout dos artigos
* CSS específico do Blog
* renderização dos posts

---

# Fluxo de publicação

O fluxo oficial de publicação é:

```text
Criar arquivo Markdown

↓

Commit

↓

Push

↓

GitHub Actions

↓

Eleventy

↓

GitHub Pages

↓

Site publicado
```

Nenhum outro arquivo deve precisar ser alterado para publicar um artigo.

---

# Boas práticas

* Um arquivo Markdown representa exatamente um conteúdo publicado.
* Cada seção possui responsabilidade única.
* Separar infraestrutura de conteúdo.
* Centralizar configurações compartilhadas.
* Reutilizar layouts.

---

# Más práticas

* Misturar artigos com arquivos de infraestrutura.
* Duplicar configurações.
* Criar exceções permanentes na arquitetura.
* Colocar arquivos estáticos dentro de `content/`.

---

# Decisões arquiteturais

## Regra nº 1

Todo conteúdo publicado nasce dentro de `content/`.

---

## Regra nº 2

A pasta `blog/` contém infraestrutura.

Os artigos ficam em `blog/posts/`.

---

## Regra nº 3

Layouts nunca contêm conteúdo.

Conteúdo nunca define estrutura visual.

---

## Regra nº 4

Arquivos estáticos permanecem em `assets/`.

---

## Regra nº 5

A documentação histórica e a documentação de referência evoluem de forma independente.

---

# Estado atual

Esta estrutura representa a arquitetura oficial do projeto.

Qualquer alteração significativa deverá atualizar este documento.

---

# Referências

Documentação histórica relacionada:

* `03-layout-base.md`
* `07-colecao-blog.md`
* `08-configuracao-da-secao-blog.md`
* `09-primeiro-post-e-refinamento-da-arquitetura-do-blog.md`
* `10-urls-automaticas-do-blog.md`
