# Duvidas
Em main.js é definida a fila do RMQ que este microserviço estará escutando, será que podemos escutar outra?


## Rodar Projeto
- RABBIT_MQ_URI='amqp://guest:guest@localhost:5672' em .env
- npm run start:dev

As filas são lidas no controller.

###### Rabbit MQ só recebe na controller
@EventPattern()

###### TCP E GRCP recebe na controller
@EventPattern()
@MessagePattern()

###### Mais opções
Caso o microserviço esteja escutando, é possivel usar a controller com metodos HTTP.
