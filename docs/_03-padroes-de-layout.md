# Padrões de Layout

Este documento descreve as responsabilidades de cada layout utilizado pelo projeto.

O objetivo é manter uma separação clara entre infraestrutura, apresentação e comportamento de cada seção do site.

---

# Layout base

Arquivo:

```text
layouts/base.njk
```

O `base.njk` é o layout principal do projeto.

Todas as páginas do site herdam sua estrutura.

## Responsabilidades

* estrutura HTML principal;
* elemento `<head>`;
* carregamento do CSS global (`assets/css/style.css`);
* barra lateral de navegação;
* área principal de conteúdo;
* rodapé global do site.

O layout base nunca deve conter elementos específicos de uma seção do site.

---

# Rodapé global

O rodapé pertence exclusivamente ao `base.njk`.

Ele é composto por:

* separador visual;
* botão:

```text
← Back to Home
```

O rodapé é exibido automaticamente em todas as páginas, exceto na Home.

Nenhum outro layout deve recriar esse comportamento.

---

# Layout dos artigos

Arquivo:

```text
layouts/blog.njk
```

Este layout é utilizado exclusivamente pelos artigos publicados no Blog.

Ele não representa a seção Blog como um todo.

A página de índice do Blog utiliza seu próprio template.

---

# Responsabilidades do blog.njk

O `blog.njk` é responsável exclusivamente pela experiência de leitura dos artigos.

Entre suas responsabilidades estão:

* exibição da data de publicação;
* exibição do título;
* renderização do conteúdo do artigo;
* separadores visuais do artigo;
* navegação automática entre artigos (Previous / Next);
* carregamento do CSS específico do Blog (`assets/css/blog.css`).

---

# Formatação das datas

O layout dos artigos não realiza qualquer formatação de datas.

A exibição utiliza o filtro:

```text
formatPostDate
```

registrado em:

```text
.eleventy.js
```

Dessa forma, qualquer alteração futura no formato das datas deverá ser realizada apenas no filtro, sem necessidade de modificar os layouts.

---

# Navegação entre artigos

A navegação entre artigos pertence exclusivamente ao `blog.njk`.

Ela utiliza automaticamente a coleção oficial do Blog para identificar:

* artigo anterior;
* artigo seguinte.

Essa navegação nunca deve aparecer na página principal do Blog nem nas demais seções do site.

---

# Página principal do Blog

Arquivo:

```text
content/blog/index.njk
```

Este arquivo representa apenas o índice da seção Blog.

Suas responsabilidades são:

* listar os artigos publicados;
* gerar os links para cada publicação.

Ele não possui responsabilidades relacionadas à leitura dos artigos.

---

# Organização dos estilos

O projeto adota a mesma separação de responsabilidades para os arquivos CSS.

## assets/css/style.css

Responsável pelos estilos globais do site.

Exemplos:

* estrutura principal;
* barra lateral;
* rodapé global;
* separador do rodapé;
* elementos compartilhados.

---

## assets/css/blog.css

Responsável exclusivamente pelos estilos dos artigos.

Exemplos:

* tipografia dos artigos;
* data de publicação;
* separadores internos;
* navegação Previous / Next;
* componentes exclusivos do Blog.

Um componente global nunca deve depender deste arquivo.

---

# Separação de responsabilidades

Cada layout deve possuir responsabilidades bem definidas.

## base.njk

Infraestrutura comum do site.

---

## blog.njk

Experiência de leitura dos artigos.

---

## index.njk do Blog

Listagem das publicações.

---

## .eleventy.js

Infraestrutura do Eleventy.

Entre outras funções:

* coleções;
* filtros;
* transformações;
* formatação de dados.

Toda lógica de transformação deve permanecer centralizada nesse arquivo, mantendo os layouts responsáveis apenas pela apresentação.

---

# Princípio arquitetural

O projeto adota uma separação baseada em responsabilidades.

Cada funcionalidade deve possuir um único local responsável por sua implementação.

Essa abordagem reduz duplicação de código, facilita a manutenção e torna o comportamento do projeto previsível conforme novas seções e funcionalidades forem adicionadas.
