import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class KafkaService {
    /*    constructor(
           @Inject('PAYMENTS_SERVICE')
           private kafkaClient: ClientKafka,
       ) { } */

    async payment(data: any) {
        //Salva no banco de dados e emite outra mensagem se quiser
        /*  const payment = await debugger.creat()
         await lastValueFrom(this.kafkaClient.emit('payments', payment));
         return payment; */
    }
}
