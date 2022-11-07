<div align="center">
  <img src="https://res.cloudinary.com/dorzadlpq/image/upload/v1667849122/Github/reactjs/git-feed-img_c6nnyq.png" width=100%/>
</div>

## :robot: Fake API com JSON Server
<p>
 Essa aplicação utilizar o JSON Server para simular uma API que possui as informações das postagens.

 Navegue até a pasta criada, abra no Visual Studio Code e execute os seguintes comandos no terminal:
 ```
  yarn  
  yarn server
 ```
 Feito isso iniciara uma fake API com os recursos `/posts` em `localhost` na porta `3000` a partir das informações do arquivo db.json
 localizado na raiz do projeto.
 Acessando essa rota no navegador, você consegue ver o retorno das informações já em JSON:
  
  `loocalhost:3000/posts`
   ```JSON
     [
  {
    "id": 1,
    "author": {
      "avatar_url": "https://images.unsplash.com/photo-1508179522353-11ba468c4a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "name": "Gabriel Fernandes",
      "role": "Back-end Developer | Análise e Desenvolvimentos de Sistemas"
    },
    "content": [
      {
        "type": "paragraph",
        "content": "Devs 🚀🚀"
      },
      {
        "type": "paragraph",
        "content": "Boa tarde a todos queria compartilhar com vocês um projeto de um site para uma clínica que eu desenvolvi,ainda não acabei tudo mas estou quase."
      },
      {
        "type": "link",
        "content": "https://github.com/gabriFer"
      }
    ],
    "published_at": "2022-10-27T00:45:52.053Z"
  },
  {
    "id": 2,
    "author": {
      "avatar_url": "https://avatars.githubusercontent.com/u/12402324?v=4",
      "name": "Lucas Caresia",
      "role": "Full Stack"
    },
    "content": [
      {
        "type": "paragraph",
        "content": "Fala dev ✨"
      },
      {
        "type": "paragraph",
        "content": "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare"
      },
      {
        "type": "link",
        "content": "https://github.com/lcaresia"
      }
    ],
    "published_at": "2022-10-27T00:45:52.053Z"
  },
  {
    "id": 3,
    "author": {
      "avatar_url": "https://images.unsplash.com/photo-1530452540414-c17a65a637fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      "name": "Francisco de Assis",
      "role": "Dev JavaScript | TypeScript"
    },
    "content": [
      {
        "type": "paragraph",
        "content": ""
      },
      {
        "type": "paragraph",
        "content": "Essa é uma aplicação onde o principal objetivo é uma página para listagem de filmes de acordo com gênero."
      },
      {
        "type": "link",
        "content": "https://github.com/fdAssis"
      }
    ],
    "published_at": "2022-10-27T00:45:52.053Z"
  }
]
   ```
 Dessa forma, basta consumir essas rotas da API normalmente com o Axios. Caso queira estudar mais sobre o JSON Server, dê uma olhada aqui:
 Json Server **[typicode/json-server](https://github.com/typicode/json-server)**.
</p>

## :zap: Executando Aplicação
Navegue até a pasta do projeto, abra o terminal e execute o seguinte comando:
```
  yarn dev
```