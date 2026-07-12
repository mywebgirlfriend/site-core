# Passo 3 — Infraestrutura e Primeiro Deploy

**Arquivo:**

```text
docs/03-infraestrutura-e-primeiro-deploy.md
```

---

# Objetivo desta etapa

Nesta etapa configuramos toda a infraestrutura necessária para que qualquer alteração feita no projeto seja publicada automaticamente na internet.

Ao final desta etapa, o projeto passou a ter:

* GitHub Actions funcionando;
* GitHub Pages funcionando;
* Build automático;
* Deploy automático.

Isso significa que, daqui para frente, bastará fazer um commit para que o site seja reconstruído automaticamente.

---

# O que construímos nesta etapa

Criamos o arquivo:

```text
.github/workflows/deploy.yml
```

Esse arquivo é conhecido como **Workflow**.

Ele informa ao GitHub exatamente como construir o site.

---

# O que é um Workflow?

Imagine que exista um funcionário trabalhando para você 24 horas por dia.

Sempre que você faz um commit, esse funcionário faz automaticamente:

1. baixa o código;
2. instala as ferramentas necessárias;
3. constrói o site;
4. publica o site.

Esse funcionário é o GitHub Actions.

O arquivo `deploy.yml` é uma lista de instruções dizendo exatamente como ele deve trabalhar.

---

# Fluxo completo

Sempre que um commit é enviado para o GitHub, acontece isto:

```text
Commit

↓

GitHub Actions

↓

Checkout do projeto

↓

Instalação do Node.js

↓

Instalação das dependências

↓

Execução do comando

npm run build

↓

Eleventy gera o site

↓

Pasta docs/

↓

GitHub Pages publica o site
```

Todo esse processo acontece automaticamente.

---

# Arquivos envolvidos

Durante esta etapa utilizamos:

```text
package.json
```

```text
.eleventy.js
```

```text
.github/workflows/deploy.yml
```

---

# Como testar

Depois de criar o workflow:

1. Fazer commit.
2. Fazer push.
3. Abrir a aba **Actions**.
4. Aguardar o término da execução.

O esperado é:

```text
Build

✅
```

e

```text
Deploy

✅
```

---

# Primeiro erro encontrado

Durante o desenvolvimento encontramos o seguinte erro:

```text
Dependencies lock file is not found
```

---

## O que significava?

O workflow estava tentando utilizar o cache do npm.

Esse cache necessita da existência de um arquivo chamado:

```text
package-lock.json
```

Como esse arquivo ainda não existia, o GitHub interrompeu o processo.

---

## Como corrigimos?

Comentamos temporariamente a linha:

```yaml
cache: npm
```

Essa solução foi utilizada apenas para permitir a continuação dos testes.

No futuro, quando o projeto possuir seu `package-lock.json`, essa linha poderá ser reativada.

---

# Segundo aviso encontrado

Durante o Build apareceu:

```text
Node.js 20 is deprecated...
```

---

## Isso é um problema?

Não.

Trata-se apenas de um aviso emitido pelas próprias Actions oficiais do GitHub.

O projeto continuou funcionando normalmente.

No futuro verificaremos se existe uma versão mais nova dessas Actions.

---

# Configuração do GitHub Pages

Depois da criação do workflow foi necessário configurar o repositório.

Entramos em:

```text
Settings

↓

Pages
```

Selecionamos:

```text
GitHub Actions
```

Importante:

Não utilizamos os botões:

```text
Configure Jekyll
```

nem

```text
Configure Static HTML
```

Esses botões criariam um workflow diferente do nosso.

Como já possuímos um workflow personalizado, eles não devem ser utilizados.

---

# Renomeação do repositório

Inicialmente o projeto chamava-se:

```text
site-core
```

Posteriormente foi renomeado para:

```text
mywebgirlfriend.github.io
```

Essa decisão simplificou bastante o projeto.

Agora o site será publicado em:

```text
https://mywebgirlfriend.github.io/
```

Em vez de:

```text
https://usuario.github.io/site-core/
```

Isso elimina a necessidade de trabalhar com caminhos relativos mais complexos.

---

# Primeiro Deploy

Após a configuração do GitHub Pages:

* Build ficou verde.
* Deploy ficou verde.

Isso confirmou que toda a infraestrutura estava funcionando.

---

# O primeiro erro 404

Depois do primeiro deploy o navegador mostrou:

```text
404
```

---

## Isso significava que algo estava quebrado?

Não.

Na verdade era um excelente sinal.

O GitHub Pages já estava funcionando.

O problema era apenas que ainda não existia uma página inicial.

Em outras palavras:

O servidor estava funcionando.

O site ainda não existia.

---

# Como saber se a infraestrutura está funcionando?

Se o GitHub Actions apresentar:

```text
Build

✅
```

e

```text
Deploy

✅
```

então a infraestrutura está funcionando corretamente.

Mesmo que ainda apareça um erro 404.

---

# Boas práticas

* Nunca editar diretamente arquivos gerados dentro da pasta `docs`.
* Sempre verificar a aba **Actions** depois de um commit importante.
* Corrigir um erro por vez.
* Não modificar o workflow sem documentar a alteração.
* Utilizar apenas Actions oficiais do GitHub, salvo necessidade comprovada.

---

# Más práticas

* Instalar Actions do Marketplace sem necessidade.
* Ignorar erros do Build.
* Alterar o workflow copiando exemplos da internet sem entender seu funcionamento.
* Modificar o processo de deploy sem atualizar a documentação.

---

# Problemas comuns

## O Build falha

Verificar:

* package.json
* .eleventy.js
* workflow

---

## O Deploy falha

Verificar:

* GitHub Pages configurado para GitHub Actions.

---

## Continua aparecendo 404

Verificar:

Existe uma página inicial?

Enquanto não existir um `index`, o GitHub Pages continuará retornando 404.

---

# Resumo da etapa

Ao terminar esta etapa aprendemos:

✅ O que é GitHub Actions.

✅ O que é GitHub Pages.

✅ O que é um Workflow.

✅ Como acontece o Build.

✅ Como acontece o Deploy.

✅ Como identificar um erro de infraestrutura.

✅ Como corrigir o problema do cache do npm.

✅ Como interpretar o erro 404 inicial.

✅ Como verificar se a infraestrutura está funcionando.

---

# Histórico deste documento

## Versão 1

* Criação da infraestrutura.
* Primeiro Build.
* Primeiro Deploy.
* Configuração do GitHub Pages.
* Renomeação do repositório.
* Registro dos erros encontrados.
* Registro das soluções adotadas.
