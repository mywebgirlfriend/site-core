# Passo 8 — Configuração permanente da seção Blog

**Arquivo:**

```text
docs/08-configuracao-da-secao-blog.md
```

---

# Objetivo desta etapa

Nesta etapa transformamos a pasta do Blog em uma seção com comportamento próprio.

A partir deste momento o Blog deixa de ser apenas uma pasta contendo arquivos Markdown e passa a possuir uma configuração centralizada.

Essa configuração será herdada automaticamente por todos os artigos publicados futuramente.

---

# Arquivos envolvidos

Alterado:

```text
.eleventy.js
```

Criado:

```text
content/blog/blog.11tydata.json
```

Mantido:

```text
content/blog/index.njk
```

---

# O que é o arquivo blog.11tydata.json?

O arquivo:

```text
content/blog/blog.11tydata.json
```

é um recurso oficial do Eleventy chamado **Directory Data File**.

Ele permite definir propriedades que serão herdadas automaticamente por todos os arquivos existentes dentro da mesma pasta.

Isso evita repetição de configuração em todos os posts.

---

# Por que utilizamos blog.11tydata.json?

Antes dessa etapa, cada artigo precisaria repetir informações como:

```yaml
layout: blog.njk

tags:
  - blog
```

Depois dessa etapa essas informações passam a existir em apenas um lugar.

Consequentemente, todos os novos artigos herdarão automaticamente essas configurações.

---

# Estrutura atual da pasta Blog

```text
content/

└── blog/

    blog.11tydata.json

    index.njk

    (posts futuramente)
```

Essa passa a ser a estrutura oficial da seção Blog.

---

# O que cada arquivo faz?

## blog.11tydata.json

Responsável por definir o comportamento padrão de todos os artigos.

Exemplos:

* layout utilizado;
* tags herdadas;
* permalink (futuramente);
* outras propriedades compartilhadas.

---

## index.njk

Representa a página principal da seção Blog.

Essa página será responsável por listar automaticamente todos os artigos publicados.

Ela não é um artigo.

Ela funciona como a "capa" do Blog.

---

# Coleção oficial do Blog

Também criamos a coleção:

```text
collections.blog
```

Essa coleção reúne automaticamente todos os arquivos marcados com:

```yaml
tags:
  - blog
```

Ela será utilizada por:

* página principal do Blog;
* página inicial do site;
* RSS (futuramente);
* sitemap (futuramente);
* qualquer outra funcionalidade que necessite listar artigos.

---

# Ordem dos artigos

A coleção do Blog é ordenada automaticamente.

A ordem escolhida para este projeto é:

```text
Mais recente

↓

Mais antigo
```

Essa decisão foi tomada porque o Blog possui natureza cronológica.

---

# Diferença entre Blog e as demais seções

O Blog é a única seção cronológica do projeto.

As demais seções possuem natureza documental.

Por isso, apenas o Blog possui uma coleção específica.

Neste momento:

```text
Blog
```

possui comportamento automático.

Enquanto:

```text
Disease

Links

Pics
```

continuam sendo seções documentais.

---

# Arquitetura adotada

O projeto passa oficialmente a possuir dois tipos de seção.

## Seções cronológicas

Exemplo:

```text
Blog
```

Características:

* crescimento contínuo;
* ordenação automática;
* artigos aparecem do mais recente para o mais antigo.

---

## Seções documentais

Exemplos:

```text
Disease

Links

Pics
```

Características:

* organização manual;
* páginas permanentes;
* não dependem de datas.

---

# Boas práticas

* Utilizar o Directory Data File para evitar repetição.
* Centralizar configurações compartilhadas.
* Criar apenas uma coleção cronológica para o Blog.
* Utilizar o mecanismo oficial do Eleventy sempre que possível.

---

# Más práticas

* Repetir layout e tags em todos os artigos.
* Criar listas manuais de posts.
* Duplicar configurações em vários arquivos.
* Criar coleções desnecessárias para páginas documentais.

---

# O que pode dar errado?

## O post não aparece na coleção

Verificar:

* se herdou corretamente a configuração do `blog.11tydata.json`;
* se o arquivo realmente está dentro da pasta:

```text
content/blog/
```

---

## O Build falha

Verificar:

* sintaxe do JSON;
* vírgulas;
* chaves;
* aspas duplas.

---

# Decisões arquiteturais

## Regra nº 1

O Blog utilizará um único arquivo de configuração compartilhado:

```text
content/blog/blog.11tydata.json
```

---

## Regra nº 2

Todos os artigos herdarão automaticamente suas configurações desse arquivo.

Nenhum artigo deverá repetir configurações comuns.

---

## Regra nº 3

A coleção oficial do Blog continuará sendo a única coleção cronológica do projeto.

---

## Regra nº 4

Sempre que existir um recurso oficial do Eleventy para resolver um problema de arquitetura, ele terá preferência sobre soluções personalizadas.

---

# Próxima etapa

Na próxima etapa implementaremos a publicação completa do primeiro artigo.

Também definiremos definitivamente:

* URL automática no formato:

```text
/blog/AAAA/MM/DD/titulo-do-post/
```

* obrigatoriedade dos campos:

  * `title`
  * `date`

* geração automática do *slug* a partir do título.

A partir dessa etapa será possível publicar novos artigos criando apenas um arquivo Markdown.

---

# Resumo

Ao concluir esta etapa aprendemos:

✅ O que é um Directory Data File.

✅ Como o Eleventy herda configurações automaticamente.

✅ O papel da coleção `blog`.

✅ A diferença entre uma seção cronológica e uma seção documental.

✅ Como evitar repetição de configuração.

✅ Como preparar a arquitetura para centenas de posts futuros.

---

# Histórico

## Versão 1

* Criação da configuração centralizada da seção Blog.
* Adoção do `blog.11tydata.json`.
* Consolidação da arquitetura cronológica do Blog.
* Definição da filosofia de herança automática de configurações.
