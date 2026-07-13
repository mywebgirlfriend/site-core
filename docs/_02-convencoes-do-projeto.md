# Convenções do Projeto

**Arquivo:**

```text
docs/_02-convencoes-do-projeto.md
```

---

# Objetivo

Este documento define as convenções permanentes utilizadas por este projeto.

Seu objetivo é manter consistência entre todos os arquivos, facilitar a manutenção e reduzir a quantidade de decisões repetitivas durante o desenvolvimento.

Sempre que surgir uma nova convenção permanente, este documento deverá ser atualizado.

---

# Convenções gerais

## Uma responsabilidade por arquivo

Cada arquivo deve possuir apenas uma responsabilidade principal.

Exemplos:

* um post representa apenas um artigo;
* um layout representa apenas uma estrutura visual;
* um arquivo de configuração representa apenas uma configuração.

Evitar arquivos responsáveis por múltiplas funções.

---

## Uma responsabilidade por pasta

Cada pasta possui uma finalidade específica.

Exemplos:

```text
assets/
```

Arquivos estáticos.

---

```text
content/
```

Conteúdo publicado.

---

```text
layouts/
```

Layouts reutilizáveis.

---

```text
docs/
```

Documentação.

---

Misturar responsabilidades deve ser evitado.

---

# Convenções de nomenclatura

## Pastas

Sempre utilizar:

* letras minúsculas;
* palavras separadas por hífen.

Exemplo:

```text
disease-history
```

Nunca:

```text
Disease History
```

ou

```text
DiseaseHistory
```

---

## Arquivos Markdown

Utilizar nomes curtos e descritivos.

Exemplo:

```text
chronic-pain.md
```

Evitar:

```text
texto-final-novo-correto-v2.md
```

---

## Arquivos de configuração

Sempre utilizar o padrão oficial da ferramenta.

Exemplo:

```text
posts.11tydata.js
```

Nunca criar convenções próprias quando houver uma convenção oficial.

---

# Convenções do Blog

## Um arquivo representa exatamente um artigo

Nunca dividir um artigo em vários arquivos.

Nunca colocar dois artigos dentro do mesmo arquivo.

---

## O conteúdo pertence apenas ao Markdown

Layouts não devem conter conteúdo.

Conteúdo não deve definir layout.

---

## Front Matter

Todo artigo deve possuir, no mínimo:

```yaml
title:
date:
```

Esses campos representam a fonte oficial das informações editoriais.

---

## Layout

Os artigos herdam automaticamente o layout através de:

```text
posts.11tydata.js
```

Portanto não devem repetir:

```yaml
layout:
```

---

## Tags

As tags também são herdadas automaticamente.

Nenhum artigo deve repetir:

```yaml
tags:
```

salvo quando possuir uma necessidade específica.

---

# Convenções de URL

As URLs devem ser permanentes.

Sempre que possível devem evitar mudanças.

---

## Blog

Formato oficial:

```text
/blog/AAAA/MM/DD/titulo-do-post/
```

A URL é gerada automaticamente.

Nunca escrever manualmente:

```yaml
permalink:
```

em um artigo comum.

---

## Diretórios

Utilizar sempre:

```text
/
```

como separador.

Nunca utilizar espaços.

---

# Convenções de CSS

## CSS global

Todo estilo compartilhado pertence a:

```text
assets/css/style.css
```

---

## CSS especializado

Cada seção poderá possuir seu próprio arquivo CSS.

Exemplo:

```text
assets/css/blog.css
```

Esses arquivos nunca devem alterar outras seções do site.

---

# Convenções de Layout

O projeto utiliza herança de layouts.

Estrutura atual:

```text
base.njk

↓

blog.njk

↓

Markdown
```

Cada layout deve possuir responsabilidade única.

---

# Convenções de publicação

Publicar um novo artigo deve exigir apenas:

1. Criar um arquivo Markdown.

2. Escrever o conteúdo.

3. Fazer commit.

4. Fazer push.

Nenhuma outra alteração deve ser necessária.

Essa é considerada uma regra permanente do projeto.

---

# Convenções de documentação

O projeto possui dois tipos de documentação.

---

## Documentação histórica

Arquivos:

```text
01-*.md
```

Objetivo:

Registrar como o projeto foi construído.

Esses documentos contam a história do desenvolvimento.

---

## Documentação de referência

Arquivos:

```text
_01-*.md
```

Objetivo:

Descrever o funcionamento atual do projeto.

Esses documentos devem permanecer atualizados.

---

# Convenções de comentários

Comentários devem explicar:

* decisões;
* arquitetura;
* responsabilidades.

Nunca explicar algo óbvio apenas repetindo o código.

---

# Convenções de caminhos

Sempre utilizar caminhos absolutos quando possível.

Exemplo:

```text
/assets/css/style.css
```

Evitar caminhos relativos desnecessários.

A única exceção atual é a configuração oficial do Eleventy em:

```text
.eleventy.js
```

onde o uso de:

```text
../layouts
```

é determinado pela própria ferramenta.

---

# Convenções de arquitetura

Sempre preferir:

* reutilização;
* simplicidade;
* configuração centralizada;
* padrões oficiais da ferramenta.

Evitar soluções personalizadas quando existir uma solução oficial equivalente.

---

# Convenções de evolução

Sempre que uma decisão arquitetural mudar:

1. Atualizar a documentação de referência.

2. Registrar a alteração na documentação histórica correspondente.

3. Criar um Post Mortem caso a mudança tenha sido motivada por um erro ou incidente.

---

# Boas práticas

* Manter responsabilidades bem definidas.
* Centralizar configurações compartilhadas.
* Utilizar convenções oficiais das ferramentas.
* Evitar duplicação de código.
* Documentar decisões importantes.

---

# Más práticas

* Duplicar configurações.
* Criar exceções permanentes.
* Misturar infraestrutura com conteúdo.
* Alterar URLs publicadas sem necessidade.
* Repetir código em vários locais.

---

# Filosofia do projeto

Este projeto possui quatro objetivos permanentes.

1. Simplicidade.

2. Clareza.

3. Manutenibilidade.

4. Documentação.

Toda nova funcionalidade deverá respeitar esses quatro princípios.

Caso uma implementação torne o projeto mais complexo sem trazer benefícios claros, ela deverá ser reavaliada.

---

# Referências

Documentação relacionada:

* `_01-arquitetura-de-diretorios.md`
* `_03-padroes-de-layout.md`
* `_04-fluxo-de-publicacao.md`
* `_06-estrutura-do-blog.md`
