# Fluxo de Publicação

**Arquivo:**

```text
docs/_04-fluxo-de-publicacao.md
```

---

# Objetivo

Este documento descreve o fluxo oficial de publicação de conteúdo do projeto.

Seu objetivo é padronizar a criação de novos artigos e garantir que todas as publicações sigam exatamente o mesmo processo.

O fluxo foi projetado para exigir o menor número possível de etapas manuais.

---

# Visão geral

O ciclo completo de publicação é:

```text
Criar um arquivo Markdown

↓

Escrever o conteúdo

↓

Salvar

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

---

# Estrutura dos artigos

Todo artigo pertence à pasta:

```text
content/blog/posts/
```

Cada arquivo Markdown representa exatamente um artigo publicado.

---

# Estrutura mínima

Um artigo deve conter, no mínimo:

```yaml
---
title: Meu título
date: 2026-07-13
---
```

O restante do arquivo corresponde ao conteúdo do artigo.

---

# O que não deve ser informado

Os artigos não precisam repetir:

```yaml
layout:
```

nem

```yaml
tags:
```

Essas configurações são herdadas automaticamente através de:

```text
posts.11tydata.js
```

---

# O que acontece durante o Build

Durante o processo de Build:

1. O Eleventy encontra o novo arquivo.

2. O `posts.11tydata.js` aplica automaticamente as configurações comuns.

3. O permalink é calculado.

4. O layout do Blog é aplicado.

5. O HTML final é gerado.

6. O GitHub Pages publica a nova versão do site.

---

# Resultado esperado

Após alguns instantes, o artigo estará disponível:

* na página principal do Blog;
* na URL individual do artigo.

Nenhuma alteração adicional deverá ser necessária.

---

# Publicação pelo computador

Fluxo recomendado:

1. Editar o arquivo.

2. Commit.

3. Push.

---

# Publicação pelo celular

Fluxo recomendado:

1. Editar o Markdown.

2. Commit.

3. Push.

O restante do processo continua exatamente igual.

---

# Arquivos normalmente alterados

Na maioria das publicações será alterado apenas um arquivo:

```text
content/blog/posts/*.md
```

Essa é considerada a situação ideal.

---

# Quando outros arquivos podem mudar?

Somente quando houver alterações estruturais.

Exemplos:

* criação de novas seções;
* novos layouts;
* novos estilos;
* mudanças na arquitetura.

Publicações comuns não devem exigir essas alterações.

---

# Fluxo de desenvolvimento

O desenvolvimento da arquitetura segue um processo diferente da publicação.

Normalmente envolve:

* edição de layouts;
* configuração do Eleventy;
* documentação;
* testes.

Esse fluxo não faz parte da rotina de publicação.

---

# Como testar uma publicação

Após realizar o Push:

Verificar:

* Build;
* Deploy;
* página do Blog;
* página individual do artigo.

---

# Build

Resultado esperado:

```text
Build

✅
```

---

# Deploy

Resultado esperado:

```text
Deploy

✅
```

---

# Página do Blog

O novo artigo deve aparecer automaticamente na listagem.

---

# Página do artigo

O permalink deve funcionar corretamente.

---

# Erros comuns

## O artigo não aparece

Verificar:

* localização do arquivo;
* Front Matter;
* Build.

---

## O Build falha

Consultar o log do GitHub Actions.

A maioria dos erros estará relacionada a:

* sintaxe do Markdown;
* Front Matter;
* JavaScript;
* Nunjucks.

---

## O Deploy falha

Verificar:

* GitHub Pages;
* GitHub Actions;
* permissões do repositório.

---

# Boas práticas

* Alterar apenas o artigo durante uma publicação.
* Publicar pequenas mudanças.
* Testar cada publicação.
* Manter um histórico claro de commits.

---

# Más práticas

* Misturar alterações estruturais com novos artigos.
* Publicar diversos assuntos em um único commit.
* Alterar layouts durante uma publicação comum.
* Modificar URLs já publicadas sem necessidade.

---

# Filosofia

Publicar um artigo deve ser uma atividade editorial.

Não deve exigir conhecimento sobre:

* Eleventy;
* GitHub Actions;
* layouts;
* configuração interna do projeto.

O sistema deve cuidar automaticamente desses detalhes.

---

# Evolução prevista

No futuro, este fluxo poderá incluir:

* RSS;
* Sitemap;
* SEO automático;
* geração automática de índice;
* feed de últimos artigos na Home.

Essas funcionalidades deverão ser adicionadas sem alterar o processo de publicação descrito neste documento.

---

# Referências

Relacionados:

* `_01-arquitetura-de-diretorios.md`
* `_02-convencoes-do-projeto.md`
* `_06-estrutura-do-blog.md`
* `09-primeiro-post-e-refinamento-da-arquitetura-do-blog.md`
* `10-urls-automaticas-do-blog.md`
