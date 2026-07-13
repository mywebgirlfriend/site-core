# GitHub Actions e Publicação

**Arquivo:**

```text
docs/_05-github-actions.md
```

---

# Objetivo

Este documento descreve a infraestrutura responsável pela geração e publicação automática do site.

Seu objetivo é explicar como o projeto passa do código-fonte para um site publicado no GitHub Pages.

---

# Visão geral

A publicação do projeto é totalmente automatizada.

Nenhum arquivo HTML é editado manualmente.

Todo o site é gerado durante o processo de Build.

---

# Fluxo completo

```text
Alteração no repositório

↓

Commit

↓

Push

↓

GitHub Actions

↓

Instalação das dependências

↓

Eleventy

↓

Geração da pasta docs/

↓

GitHub Pages

↓

Site publicado
```

---

# Componentes utilizados

Atualmente a infraestrutura utiliza:

* GitHub
* GitHub Actions
* GitHub Pages
* Node.js
* Eleventy

Cada ferramenta possui apenas uma responsabilidade.

---

# GitHub

Responsável por:

* armazenar o código;
* histórico de commits;
* controle de versões;
* execução do GitHub Actions.

---

# GitHub Actions

Responsável por:

* instalar as dependências;
* executar o Build;
* preparar os arquivos finais;
* realizar o Deploy.

Nenhum arquivo do site é publicado diretamente pelo computador do desenvolvedor.

---

# Eleventy

Responsável por:

* processar Markdown;
* processar Nunjucks;
* aplicar layouts;
* gerar HTML;
* copiar arquivos estáticos.

O Eleventy gera o site final.

---

# GitHub Pages

Responsável apenas por servir os arquivos gerados.

Ele não executa Eleventy.

Ele apenas publica o conteúdo produzido durante o Build.

---

# Pasta docs/

O site final é gerado em:

```text
docs/
```

Essa pasta representa exclusivamente a saída do Build.

Nenhum arquivo deve ser editado manualmente dentro dela.

Sempre que um novo Build ocorrer, seu conteúdo poderá ser sobrescrito.

---

# Arquivos de origem

Os arquivos que devem ser editados encontram-se em:

```text
content/
```

```text
layouts/
```

```text
assets/
```

Jamais em:

```text
docs/
```

---

# Build

O Build possui três objetivos.

Primeiro:

Transformar Markdown em HTML.

Segundo:

Aplicar layouts.

Terceiro:

Gerar a estrutura final do site.

---

# Deploy

Após um Build bem-sucedido, o GitHub Pages publica automaticamente a nova versão.

Não existe etapa manual de publicação.

---

# Como verificar uma publicação

Após realizar um Push:

Verificar:

```text
Build

✅
```

Depois:

```text
Deploy

✅
```

Somente então acessar o site.

---

# Erros comuns

## Build falhou

Possíveis causas:

* erro de JavaScript;
* erro de Nunjucks;
* erro de Front Matter;
* erro de sintaxe.

---

## Deploy falhou

Possíveis causas:

* GitHub Pages desabilitado;
* configuração incorreta do repositório;
* falha de autenticação do GitHub.

---

## Site não atualiza

Verificar:

* se o Build terminou;
* se o Deploy terminou;
* atualizar o navegador sem utilizar cache.

---

# Dependências

O projeto depende do ambiente Node.js.

A versão utilizada pode evoluir ao longo do tempo.

Sempre utilizar versões oficialmente suportadas.

---

# Atualizações

Alertas de depreciação do GitHub Actions não significam necessariamente falha.

Uma Action pode continuar funcionando mesmo após um aviso de atualização.

Entretanto, esses avisos devem ser acompanhados e corrigidos periodicamente.

---

# Boas práticas

* Commits pequenos.
* Um Build para cada alteração.
* Corrigir erros imediatamente.
* Nunca ignorar falhas de Build.

---

# Más práticas

* Editar arquivos da pasta `docs/`.
* Publicar alterações sem testar.
* Misturar várias mudanças estruturais em um único commit.
* Ignorar erros recorrentes no GitHub Actions.

---

# Filosofia

A publicação do site deve ser totalmente automática.

O desenvolvedor deve preocupar-se apenas com:

* conteúdo;
* layouts;
* arquitetura.

Toda a infraestrutura de publicação deve permanecer transparente durante o uso cotidiano.

---

# Evolução prevista

No futuro poderão ser adicionados:

* testes automatizados;
* validação de links;
* validação do Front Matter;
* geração de Sitemap;
* geração de RSS.

Essas funcionalidades deverão integrar-se ao fluxo atual sem alterar a forma como o projeto é publicado.

---

# Referências

Relacionados:

* `_01-arquitetura-de-diretorios.md`
* `_02-convencoes-do-projeto.md`
* `_04-fluxo-de-publicacao.md`
* `04-github-actions.md`
* `05-github-pages.md`
