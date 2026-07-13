# Passo 11 — Back to Home

---

# Objetivo

Após consolidar a arquitetura do Blog e automatizar a geração das URLs dos artigos, o próximo objetivo foi melhorar a navegação global do site.

Foi criado um botão permanente de retorno para a página inicial, disponível em todas as páginas do projeto, com exceção da própria Home.

A intenção foi oferecer um ponto único de retorno ao visitante, independentemente da seção em que ele esteja navegando.

---

# Situação anterior

Cada página era responsável por decidir se possuía ou não um botão de retorno.

Inicialmente esse botão existia apenas nos artigos do Blog.

Essa abordagem apresentava alguns problemas:

* comportamento inconsistente entre as seções;
* duplicação de código;
* necessidade de lembrar de adicionar manualmente o botão em novas páginas.

---

# Nova arquitetura

A responsabilidade pela navegação global passou a pertencer ao layout base do projeto.

O botão:

```text id="4xvv2j"
← Back to Home
```

passou a ser renderizado automaticamente pelo:

```text id="5w8kmw"
layouts/base.njk
```

Como consequência, qualquer página que utilize o layout base herda automaticamente esse comportamento.

---

# Exceção

A única exceção é a própria página inicial.

Como o visitante já se encontra na Home, o botão não é exibido quando:

```text id="b3msq5"
page.url == "/"
```

---

# Separador visual

Acima do botão foi adicionado um separador visual reutilizável.

Foi adotada a mesma linguagem visual utilizada pelos artigos do Blog, utilizando uma linha pontilhada discreta.

Essa decisão cria uma identidade visual consistente entre o conteúdo principal e a navegação global.

---

# Organização dos estilos

Durante a implementação foi observado que o separador passou a pertencer ao layout base.

Por esse motivo, seu estilo deixou de ficar em:

```text id="qs5xfk"
assets/css/blog.css
```

e passou para:

```text id="i9z1t8"
assets/css/style.css
```

Essa alteração evita que páginas que não carregam `blog.css` utilizem o estilo padrão do navegador.

---

# Responsabilidades

## layouts/base.njk

Responsável por:

* exibir o botão "Back to Home";
* ocultar o botão na Home;
* renderizar o separador visual do rodapé.

---

## assets/css/style.css

Responsável pela aparência do separador compartilhado por todas as páginas.

---

# Decisões descartadas

Durante o desenvolvimento foram avaliadas outras abordagens.

Entre elas:

* criação de um separador exclusivo para os artigos;
* utilização de blocos Nunjucks sobrescritos para alterar o rodapé;
* utilização de linhas tracejadas independentes.

Essas alternativas foram descartadas por aumentarem a complexidade da arquitetura sem benefício significativo.

A solução final passou a reutilizar um único separador visual compartilhado por todo o site.

---

# Arquivos alterados

```text id="hk3l6u"
layouts/base.njk

assets/css/style.css
```

---

# Resultado

Após essa etapa, todas as páginas do projeto passaram a apresentar uma navegação consistente de retorno à Home.

Novas seções criadas futuramente herdarão automaticamente esse comportamento, sem necessidade de qualquer configuração adicional.

---

# Considerações arquiteturais

Esta etapa reforçou um princípio adotado pelo projeto:

Elementos de navegação global pertencem ao layout base.

Elementos relacionados exclusivamente à leitura de artigos permanecem sob responsabilidade do:

```text id="n2p1gj"
layouts/blog.njk
```

Essa separação reduz duplicação, simplifica a manutenção e torna mais clara a responsabilidade de cada layout.
