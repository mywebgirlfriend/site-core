# Mídias — Áudio

Este documento descreve o padrão oficial para utilização de áudio nos artigos.

---

# Local de armazenamento

Áudios pertencentes ao projeto devem ser armazenados em:

```text
assets/audio/
```

Caso essa pasta ainda não exista, recomenda-se criá-la.

---

# Inserindo um áudio local

Utilize HTML.

```html
<audio controls>

    <source
        src="/assets/audio/exemplo.mp3"
        type="audio/mpeg">

    Seu navegador não suporta áudio.

</audio>
```

---

# Áudio hospedado externamente

Também é possível utilizar arquivos hospedados em outro servidor.

```html
<audio controls>

    <source
        src="https://meuservidor.com/audio/exemplo.mp3"
        type="audio/mpeg">

</audio>
```

---

# Quando utilizar áudio local

Prefira áudio local quando:

* o arquivo pertence ao projeto;
* faz parte permanente do artigo;
* deseja manter o conteúdo independente de serviços externos.

---

# Quando utilizar áudio externo

Utilize hospedagem externa quando:

* o arquivo é muito grande;
* pertence a outro serviço;
* é atualizado frequentemente.

---

# Resumo

Áudio local:

```html
<audio controls>

    <source
        src="/assets/audio/exemplo.mp3"
        type="audio/mpeg">

</audio>
```

Áudio externo:

```html
<audio controls>

    <source
        src="https://meuservidor.com/audio/exemplo.mp3"
        type="audio/mpeg">

</audio>
```
