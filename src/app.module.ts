import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TcpController } from './TCPModule/tcp.controller';
import { ProductGrpcController } from './GRPCModule/product-grpc-controller';
import { RmqController } from './RMQModule/rmq.controller';
import { TcpService } from './TCPModule/tcp.service';
import { RmqService } from './RMQModule/rmq.service';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  //Somente como Publicador, se quiser ser publicador, claro
  /*  imports: [ClientsModule.register([
     {
       name: 'PAYMENTS_SERVICE',
       transport: Transport.KAFKA,
       options: {
         client: {
           clientId: 'payments',
           brokers: ['kafka:29092'],
         },
       },
     },
   ]),], */
  controllers: [TcpController, RmqController, ProductGrpcController],
  providers: [ConfigService, TcpService, RmqService],
})
export class AppModule { }

