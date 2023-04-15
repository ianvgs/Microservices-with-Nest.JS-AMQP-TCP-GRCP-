import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TcpController } from './TcpModule/tcp.controller';
import { ProductGrpcController } from './GRPCModule/product-grpc-controller';
import { RmqController } from './RMQModule/rmq.controller';
import { TcpService } from './TcpModule/tcp.service';
import { RmqService } from './RMQModule/rmq.service';


@Module({
  imports: [],
  controllers: [TcpController, RmqController, ProductGrpcController],
  providers: [ConfigService, TcpService, RmqService],
})
export class AppModule { }

