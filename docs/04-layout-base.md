# Passo 4 — Layout Base do Projeto

**Arquivo:**

```text
docs/04-layout-base.md
```

---

# Objetivo desta etapa

Criar o layout principal do projeto.

O layout principal é a "estrutura" que será compartilhada por praticamente todas as páginas do site.

Pense nele como a fundação de uma casa.

As paredes, portas e móveis podem mudar, mas a fundação continua a mesma.

---

# O arquivo desta etapa

```text
layouts/base.njk
```

---

# O que é um layout?

Imagine que existam 500 páginas.

Todas elas precisam possuir:

* HTML
* HEAD
* BODY
* CSS
* título
* metadados

Seria muito ruim repetir esse código 500 vezes.

Por isso existe um layout.

O layout contém tudo aquilo que é comum a todas as páginas.

---

# Onde ele fica?

```text
layouts/base.njk
```

Todos os layouts do projeto ficarão dentro da pasta:

```text
layouts/
```

---

# Por que utilizamos um layout?

Sem layout:

```text
Página 1
↓

HTML

HEAD

BODY

CSS
```

Página 2

↓

HTML

HEAD

BODY

CSS

Página 3

↓

HTML

HEAD

BODY

CSS

(repetição infinita)

---

Com layout:

```text
Página

↓

Layout

↓

HTML pronto
```

Muito mais simples.

---

# Estrutura do projeto

Neste momento o projeto possui:

```text
layouts/

base.njk

blog.njk
```

O arquivo:

```text
blog.njk
```

ainda não está sendo utilizado.

Ele foi criado porque já faz parte da arquitetura definitiva.

---

# Filosofia deste projeto

O layout principal deve ser completamente neutro.

Isso significa que ele NÃO conhece:

* Blog
* Links
* Fotos
* Projetos

Ele conhece apenas:

* HTML
* CSS global
* estrutura da página

Todo comportamento específico ficará em layouts especializados.

---

# Os blocos existentes

O arquivo possui três blocos principais.

---

## Bloco Title

```text
block title
```

Responsável pelo título exibido na aba do navegador.

Cada layout poderá fornecer um título diferente.

Exemplo:

Página Inicial

↓

Meu Site

Blog

↓

Título do Post

Fotos

↓

Fotos

---

## Bloco Extra CSS

```text
block extraCss
```

Este bloco foi criado para permitir que layouts especializados adicionem folhas de estilo próprias.

Exemplo futuro:

```text
base.njk

↓

style.css
```

Blog

↓

style.css

*

blog.css

Isso evita duplicação de código.

---

## Bloco Body

```text
block body
```

É a área onde o conteúdo real da página será exibido.

Todo conteúdo renderizado pelo Eleventy aparecerá aqui.

---

# Por que não colocamos Sidebar agora?

Porque queremos acompanhar visualmente cada alteração.

Se adicionarmos:

* sidebar
* footer
* menu
* blog

tudo na mesma etapa, ficará muito difícil entender qual alteração produziu determinado resultado.

Por isso construiremos o site lentamente.

Cada etapa terá um objetivo muito claro.

---

# Por que ainda não existe Footer?

Pelo mesmo motivo.

Queremos criar o footer em uma etapa exclusiva.

Assim poderemos observar exatamente:

* quando ele apareceu;
* quais arquivos foram alterados;
* como ele funciona.

---

# Por que ainda não existe Blog?

Porque primeiro precisamos construir a base do projeto.

Depois construiremos uma camada especializada para artigos.

---

# Como o Blog funcionará?

No futuro teremos:

```text
Markdown

↓

blog.njk

↓

base.njk

↓

HTML
```

Ou seja:

o Blog utilizará o layout principal.

Ele não criará um novo site.

---

# Por que existe blog.njk se ele ainda não é utilizado?

Porque decidimos construir primeiro a arquitetura.

Isso facilita bastante o entendimento do projeto.

Quem abrir o repositório perceberá imediatamente que existe um layout específico para o Blog.

---

# Por que existe blog.css se ele ainda não é utilizado?

Pelo mesmo motivo.

Queremos deixar clara a separação entre:

CSS global

↓

style.css

CSS exclusivo do Blog

↓

blog.css

Essa separação facilitará bastante a manutenção futura.

---

# Como testar esta etapa?

Após alterar o arquivo:

```text
layouts/base.njk
```

deve-se:

1. Fazer commit.

2. Fazer push.

3. Aguardar o GitHub Actions.

Resultado esperado:

```text
Build

✅
```

```text
Deploy

✅
```

O site continuará retornando:

```text
404
```

Isso é esperado.

Ainda não existe uma página inicial.

---

# O que pode dar errado?

## Esquecer um endblock

Resultado:

Erro de Build.

---

## Remover

```text
{{ content | safe }}
```

Resultado:

As páginas ficarão vazias.

---

## Alterar o caminho do CSS

Resultado:

O site será publicado sem estilo.

---

# Como identificar esses problemas?

O GitHub Actions informará erro durante o Build.

Sempre consultar primeiro a aba:

```text
Actions
```

---

# Como corrigir?

Comparar cuidadosamente o arquivo com esta documentação.

Evitar modificar o layout sem entender a função de cada bloco.

---

# Boas práticas

* Manter o layout neutro.
* Evitar código específico do Blog.
* Utilizar blocos para permitir especializações.
* Centralizar a estrutura HTML neste arquivo.
* Documentar qualquer alteração importante.

---

# Más práticas

* Colocar CSS do Blog dentro do layout principal.
* Duplicar HTML em vários layouts.
* Misturar conteúdo com estrutura.
* Escrever textos diretamente no layout.

---

# Relação com os outros arquivos

```text
package.json

↓

.eleventy.js

↓

base.njk

↓

style.css

↓

Páginas

↓

GitHub Actions

↓

GitHub Pages
```

---

# O que ainda falta?

Depois desta etapa construiremos:

* style.css
* página inicial
* barra lateral
* layout do Blog
* primeiro post

---

# Resumo da etapa

Nesta etapa aprendemos:

✅ O que é um layout.

✅ O que é um layout mestre.

✅ O que são blocos.

✅ Como reutilizar HTML.

✅ Por que existe blog.njk.

✅ Por que existe blog.css.

✅ Por que o layout principal deve permanecer neutro.

---

# Histórico

## Versão 1

* Criação do layout base.
* Definição da arquitetura de layouts.
* Criação dos blocos principais.
* Registro da filosofia de reutilização de layouts.
