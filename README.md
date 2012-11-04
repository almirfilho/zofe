# Zone of Front-enders

Podcast apresentado por [Daniel Filho](http://github.com/danielfilho) & [Zeno Rocha](http://github.com/zenorocha).

## Como funciona?

Nós usamos o [Jekyll](http://jekyllrb.com/), um static generator em Ruby, para criar esse blog.

## Estrutura

A estrutura básica do projeto se dá na seguinte forma:

<pre>
.
|-- _includes
|-- _layouts
|-- _site
|-- assets
|-- _config.yml
`-- index.html
</pre>

### [_includes](https://github.com/braziljs/zofe/tree/master/_includes)

São blocos de código utilizados para gerar a página principal do site ([index.html](https://github.com/braziljs/zofe/blob/master/index.html)).

### [_layouts](https://github.com/braziljs/zofe/tree/master/_layouts)

Contém o template padrão da aplicação.

### _site

É onde os arquivos gerados são armazenados, uma vez que o Jekyll tenha sido rodado. Porém, esse diretório se torna desnecessário no nosso modelo, por isso está ignorado ([.gitignore](https://github.com/braziljs/zofe/blob/master/.gitignore)).

### [assets](https://github.com/braziljs/zofe/tree/master/assets)

Possui as imagens, arquivos CSS e JS.

### [_config.yml](https://github.com/braziljs/zofe/blob/master/_config.yml)

Armazena de forma fácil a maior parte das configurações da aplicação.

### [index.html](https://github.com/braziljs/zofe/blob/master/index.html)

É o arquivo que importa todas as seções da aplicação.

*Mais informações sobre a estrutura de arquivos do Jekyll, [clique aqui](https://github.com/mojombo/jekyll/wiki/Usage).*

## Primeiros passos

Instale o [Git](http://git-scm.com/downloads) e o [Ruby](http://www.ruby-lang.org/pt/downloads/), caso você não os tenha ainda.

Uma vez tendo instalado essas dependências, abra o terminal e instale o [Jekyll](http://jekyllrb.com/) através do comando:

	gem install jekyll

Agora clone o projeto:

	git clone git@github.com:braziljs/zofe.git

Depois vá para pasta do projeto:

	cd zofe

E finalmente rode:

	jekyll --server --auto

Agora você irá ver o site rodando em `localhost:4000` :D