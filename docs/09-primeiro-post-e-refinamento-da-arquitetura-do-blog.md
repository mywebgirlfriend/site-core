# Passo 9 — Publicando o primeiro post e refinando a arquitetura do Blog

**Arquivo:**

```text
docs/09-primeiro-post-e-refinamento-da-arquitetura-do-blog.md
```

---

# Objetivo desta etapa

Nesta etapa publicamos o primeiro artigo do Blog e concluímos a primeira validação completa da arquitetura do projeto.

Ao final desta etapa conseguimos comprovar que:

* um arquivo Markdown gera automaticamente uma página HTML;
* o GitHub Actions constrói corretamente o site;
* o GitHub Pages publica o resultado;
* o layout especializado do Blog funciona;
* a coleção do Blog identifica corretamente seus artigos.

Além disso, encontramos e corrigimos dois problemas importantes na arquitetura.

---

# Arquivos envolvidos

Criado:

```text
content/blog/posts/primeiro-post.md
```

Criado:

```text
content/blog/posts/posts.11tydata.json
```

Alterado:

```text
content/blog/index.njk
```

Utilizado:

```text
layouts/base.njk
```

```text
layouts/blog.njk
```

```text
.eleventy.js
```

---

# Estrutura oficial do Blog

A partir desta etapa a organização oficial do Blog passa a ser:

```text
content/

└── blog/

    index.njk

    posts/

        posts.11tydata.json

        primeiro-post.md
```

Essa estrutura passa a ser considerada definitiva.

---

# Responsabilidade de cada arquivo

## content/blog/index.njk

Representa apenas a página principal do Blog.

Sua única responsabilidade é listar automaticamente os artigos.

Ela não representa um artigo.

Ela não deve herdar configurações específicas dos posts.

---

## content/blog/posts/

Essa pasta contém exclusivamente artigos.

Tudo que existir dentro dela será considerado um post.

---

## posts.11tydata.json

Esse arquivo aplica automaticamente configurações comuns a todos os artigos da pasta.

Exemplos:

* layout;
* tags;
* futuras configurações compartilhadas.

Isso evita repetir as mesmas informações em centenas de arquivos.

---

## primeiro-post.md

Representa um único artigo.

Seu objetivo é conter apenas informações editoriais.

Exemplo:

* título;
* data;
* conteúdo.

Nenhuma configuração comum precisa ser repetida.

---

# Filosofia de publicação

O objetivo permanente deste projeto continua sendo:

Para publicar um novo artigo será necessário apenas:

1. Criar um novo arquivo Markdown.

2. Escrever o conteúdo.

3. Fazer commit.

4. Fazer push.

Nenhum outro arquivo deverá ser alterado.

---

# Como testar

Após criar um novo artigo:

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

Depois acessar:

```text
/blog/
```

O novo artigo deverá aparecer automaticamente na lista.

---

# Boas práticas

* Um arquivo Markdown representa exatamente um artigo.
* Todos os artigos ficam dentro de:

```text
content/blog/posts/
```

* Nunca repetir layout e tags manualmente.
* Manter a página principal do Blog separada dos artigos.

---

# Más práticas

* Misturar páginas da seção com artigos.
* Repetir configurações em todos os posts.
* Criar listas manuais de artigos.
* Duplicar lógica em vários arquivos.

---

# O que ainda será implementado?

Nas próximas etapas serão adicionados:

* permalink automático;
* URLs no formato:

```text
/blog/AAAA/MM/DD/titulo-do-post/
```

* geração automática do slug;
* obrigatoriedade dos campos editoriais;
* últimos posts na Home.

---

# Post Mortem nº 1 — Duplicação da barra lateral

## Sintoma

Ao acessar:

```text
/blog/
```

a barra lateral aparecia duas vezes.

Exemplo:

```text
Home
Blog
Pics
Links

Home
Blog
Pics
Links
```

---

## Primeira hipótese

Inicialmente acreditamos que o problema estivesse em:

```text
layouts/base.njk
```

porque tanto o layout base quanto o layout do Blog continham:

```njk
{{ content | safe }}
```

Foi feita uma reorganização dos blocos de renderização.

Embora essa alteração tenha melhorado a organização do código, ela não resolveu completamente o problema.

---

## Causa real

O verdadeiro problema estava na arquitetura da pasta:

```text
content/blog/
```

O arquivo:

```text
blog.11tydata.json
```

era herdado automaticamente por todos os arquivos da pasta.

Inclusive por:

```text
content/blog/index.njk
```

Consequentemente:

* a página principal do Blog passou a ser tratada como se fosse um artigo;
* layouts foram aplicados onde não deveriam;
* ocorreu duplicação inesperada durante a renderização.

---

## Primeira correção

Foi adicionada uma exceção dentro do:

```text
content/blog/index.njk
```

sobrescrevendo:

* layout;
* tags.

Essa solução funcionava.

Entretanto, criava uma exceção permanente na arquitetura.

---

## Segunda análise

Percebemos que a exceção indicava um problema maior.

O arquivo:

```text
index.njk
```

não é um artigo.

Logo, ele não deveria compartilhar a mesma pasta utilizada pelos artigos.

---

## Solução definitiva

Foi criada a pasta:

```text
content/blog/posts/
```

Todos os artigos foram movidos para essa pasta.

O arquivo de configuração também foi movido.

---

## Mudança importante

O antigo:

```text
blog.11tydata.json
```

deixou de existir.

Foi criado:

```text
posts.11tydata.json
```

---

# Por que o nome mudou?

Os arquivos:

```text
nome-da-pasta.11tydata.json
```

são chamados de Directory Data Files.

Eles são aplicados automaticamente à pasta que possui o mesmo nome.

Portanto:

```text
posts.11tydata.json
```

configura automaticamente:

```text
posts/
```

Essa é a convenção oficial do Eleventy.

---

# Vantagens da nova arquitetura

Agora existe uma separação clara.

```text
content/blog/

index.njk
```

↓

Página principal do Blog.

---

```text
content/blog/posts/
```

↓

Artigos.

---

Essa organização elimina exceções e torna a arquitetura mais previsível.

---

# Lições aprendidas

Quando uma página possui responsabilidade diferente das demais, ela não deve compartilhar automaticamente a mesma configuração.

Separar infraestrutura de conteúdo reduz significativamente a quantidade de exceções necessárias.

Sempre que um Directory Data File começar a exigir sobrescritas frequentes, vale a pena reavaliar a organização das pastas.

---

# Resumo

Ao concluir esta etapa aprendemos:

✅ Como publicar o primeiro artigo.

✅ Como funciona um Directory Data File.

✅ Como organizar corretamente os artigos.

✅ Como evitar que páginas institucionais sejam tratadas como posts.

✅ Como identificar problemas de herança de configuração.

✅ Como refatorar a arquitetura mantendo o projeto simples.

---

# Histórico

## Versão 1

* Publicação do primeiro artigo.
* Criação da pasta `posts`.
* Migração para `posts.11tydata.json`.
* Correção da duplicação da barra lateral.
* Correção da inclusão indevida da página de índice na coleção do Blog.
* Consolidação da arquitetura definitiva da seção Blog.
