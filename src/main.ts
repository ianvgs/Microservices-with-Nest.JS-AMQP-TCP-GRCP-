
import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'Rabbit',
      noAck: false,
      persistent: true,
    }
  })
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { /* port:3001, */ retryAttempts: 5, retryDelay: 3000 }
  })
  /* app.connectMicroservice({
    transport: Transport.GRPC,
    package: 'product',
    protoPath: join(__dirname, 'GRPCModule/proto/product.proto'),

  }) */
  await app.startAllMicroservices()

  //Cria 1 microserviço e escuta se quiser.
  /*  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
     AppModule,
     {
       transport: Transport.TCP,
       options: { retryAttempts: 5, retryDelay: 3000 },
     },
   );
   app.listen() 
   */

  // Configuração varios microserviços + http
  /*const app = await NestFactory.create(AppModule);
    const rmqService = app.get<RmqService>(RmqService)
    app.connectMicroservice(rmqService.getOptions('TESTING'))  
    app.connectMicroservice({
        transport: Transport.TCP,
        options:{
          port:3001
        }
      })
    await app.startAllMicroservices()
    app.listen(3001) 
    await app.listen(configService.get('PORT');
  */

}
bootstrap();
