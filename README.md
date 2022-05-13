# Módulo de Requisições HTTP com React

  Este tópico faz parte do curso que estou fazendo para desenvolver melhor minha habilidades em React. 
  
  Neste módulo aprendi sobre a importância do useEffect. Também foi abordado o resgate de dados de uma API, neste caso em questão criado com o JSON-Server que simula uma API. 
  
  Também, de forma similar ao resgate de dados de uma API, utilizamos o hook useState para resgatar os dados dos forms e após reunirmos eles em uma função utilizamos o request "POST" para a API. 
  
  Foi criado um custom hook, que foi nomeado como useFetch. Refatoramos o POST com ele, além de adicionar os intervalos de loading entre a requisição e o recebimento da resposta. 
  
  Foi realizado o bloqueio de ações indevidas em outras requests, como no POST. Não permitindo o usuário enviar dados "duplicados" por porventura venha haver alguma demora no sistema. Foi então removida a opção de adicionar um novo item à lista enquanto o request anterior ainda não foi finalizado.
  
  Por fim, foram tratados de possíveis erros das requisições, utilizando o try catch, alterando um state para imprimir ao usuário este erro.
  

# HTTP Requests Module with React

  This topic is part of the course I'm taking to better develop my React skills.
  
  In this module I learned about the importance of useEffect. Also discussed was the rescue of data from an API, in this case created with the JSON-Server that simulates an API. 
  
  Also, similarly to retrieving data from an API, we use the useState hook to retrieve the data from the forms and after gathering them in a function we use the "POST" request for the API.
  
  A custom hook was created, which was named useFetch. We refactored the POST with it, in addition to adding the loading intervals between the request and receiving the response. 
  
  Undue actions were blocked in other requests, such as POST. Not allowing the user to send "duplicate" data, there may be some delay in the system. The option to add a new item to the list while the previous request was not finalized was then removed.
  
  Finally, possible errors in the requests were dealt with, using try catch, changing a state to print this error to the user.
  

#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### To learn React, check out the [React documentation](https://reactjs.org/).
