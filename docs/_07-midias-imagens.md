# Mídias — Imagens

Este documento descreve o padrão oficial para utilização de imagens nos artigos do Blog.

O objetivo é manter uma aparência consistente e evitar configurações específicas em cada publicação.

---

# Local de armazenamento

Imagens pertencentes ao projeto devem ser armazenadas em:

```text
assets/images/
```

Caso existam muitas imagens, recomenda-se criar subpastas.

Exemplo:

```text
assets/images/

├── livros/
├── viagens/
├── screenshots/
└── foto.jpg
```

---

# Inserindo uma imagem local

A forma recomendada é utilizar Markdown.

```markdown
![Vista de Roma](/assets/images/viagens/roma.jpg)
```

A descrição entre colchetes é utilizada para acessibilidade e caso a imagem não possa ser carregada.

---

# Exemplo completo

```markdown
Lorem ipsum dolor sit amet.

![Vista de Roma](/assets/images/viagens/roma.jpg)

Continuação do artigo...
```

---

# Inserindo uma imagem usando HTML

Também é permitido utilizar HTML.

```html
<img
    src="/assets/images/viagens/roma.jpg"
    alt="Vista de Roma">
```

Utilize HTML apenas quando realmente necessário.

Para a maioria dos artigos, Markdown é suficiente.

---

# Imagens hospedadas externamente

Também é possível utilizar imagens hospedadas em outro servidor.

Exemplo utilizando Imgur:

```markdown
![Minha imagem](https://i.imgur.com/abcdefg.jpg)
```

Ou utilizando HTML:

```html
<img
    src="https://i.imgur.com/abcdefg.jpg"
    alt="Minha imagem">
```

---

# Quando utilizar imagens externas

Utilize imagens externas apenas quando:

* a imagem não pertence ao projeto;
* a imagem é mantida por outro serviço;
* deseja evitar aumentar o tamanho do repositório.

Sempre que possível, imagens do próprio site devem permanecer dentro do repositório.

---

# Comportamento automático

O CSS do projeto garante automaticamente que:

* imagens menores permanecem em seu tamanho original;
* imagens nunca são ampliadas;
* imagens maiores são reduzidas para caber na largura do artigo;
* todas permanecem centralizadas.

Nenhuma configuração adicional é necessária.

---

# Boas práticas

* utilizar nomes em minúsculas;
* evitar espaços;
* evitar acentos;
* utilizar hífens para separar palavras.

Bom exemplo:

```text
segunda-guerra-mundial.jpg
```

Evitar:

```text
Segunda Guerra Mundial.JPG
```

---

# Resumo

Imagem local:

```markdown
![Descrição](/assets/images/foto.jpg)
```

Imagem externa:

```markdown
![Descrição](https://i.imgur.com/abcdefg.jpg)
```
