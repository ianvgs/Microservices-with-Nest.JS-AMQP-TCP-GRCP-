# MicroServices with Nest.Js 📜

## RabbitMQ(AMQP) / TCP / GRCP

This project is built with three main modules, one for RabbitMQ, other for TCP and another for GRPC.

This was minded to be a central of microservices for receiving EventPatterns and MessagePatterns from my Nest.js API, and reading queues from a RabbitMQ Tool.

If you want to try, replace at .env a working RABBIT_MQ_URI and replace "queue" name at main.js for one that you have already in RMQ, and set yours event Patterns at rmq.controller.ts.


*** This project isn't listening any port, but you can find configs to startmicroservices listening to any port at main.ts *** 

Best Regards, 
Ian
