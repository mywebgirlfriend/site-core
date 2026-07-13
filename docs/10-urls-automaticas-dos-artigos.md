# Passo 10 — URLs automáticas dos artigos

---

# Objetivo

Até esta etapa, a estrutura do Blog já havia sido reorganizada para separar a infraestrutura dos artigos.

O próximo passo foi automatizar completamente a geração das URLs dos artigos.

O objetivo era eliminar qualquer necessidade de definir manualmente o endereço de uma publicação.

---

# Situação anterior

Inicialmente, cada artigo poderia definir sua própria URL.

Essa abordagem apresentava algumas desvantagens:

* duplicação de configuração;
* possibilidade de erros;
* inconsistência entre diferentes artigos;
* necessidade de editar informações que poderiam ser calculadas automaticamente.

---

# Nova abordagem

A geração das URLs passou a ser centralizada em:

```text
content/blog/posts/posts.11tydata.js
```

A partir dessa mudança, todos os artigos passaram a compartilhar a mesma convenção de publicação.

---

# Estrutura oficial das URLs

Foi adotado o seguinte formato:

```text
/blog/YYYY/MM/DD/slug-do-artigo/
```

Exemplo:

```text
/blog/2026/07/12/meu-primeiro-post/
```

Essa estrutura é gerada automaticamente durante o Build.

---

# Origem das informações

A URL passa a ser construída utilizando apenas os metadados do artigo.

Campos obrigatórios:

```yaml
---
title:
date:
---
```

O campo `title` é utilizado para gerar o *slug*.

O campo `date` define o ano, mês e dia presentes na URL.

---

# Nome do arquivo

O nome físico do arquivo deixou de influenciar a URL publicada.

Exemplo:

```text
primeiro-post.md
```

pode gerar:

```text
/blog/2026/07/12/meu-primeiro-post/
```

Essa separação permite reorganizar arquivos internamente sem alterar os links públicos.

---

# Publicação retroativa

Como a URL depende da data informada no Front Matter, tornou-se possível publicar artigos antigos preservando sua data original.

Basta informar a data desejada:

```yaml
date: 2024-03-18
```

A URL será gerada automaticamente utilizando essa data.

---

# Benefícios

A nova arquitetura trouxe as seguintes vantagens:

* URLs consistentes;
* eliminação de configuração repetitiva;
* suporte a publicações retroativas;
* independência entre nome do arquivo e endereço público;
* redução da possibilidade de erro humano.

---

# Arquivos alterados

* `content/blog/posts/posts.11tydata.js`

---

# Resultado

A publicação de um novo artigo passou a exigir apenas:

1. criar um arquivo Markdown;
2. informar `title`;
3. informar `date`;
4. escrever o conteúdo.

Nenhuma configuração adicional de URL tornou-se necessária.

---

# Próxima etapa

Após automatizar a geração das URLs, o próximo passo do projeto foi melhorar a navegação do site através da criação do botão global "Back to Home", presente em todas as páginas, exceto na Home.
