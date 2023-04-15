import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';


@Controller()
export class ProductGrpcController {
    //serviço do proto + metodo
    @GrpcMethod('ProductService', 'Create')
    create(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        //token no metada
        console.log(data);
        return { id: 1, ...data }

    }

}
