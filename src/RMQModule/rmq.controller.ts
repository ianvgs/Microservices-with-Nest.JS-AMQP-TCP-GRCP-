import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from './rmq.service';


//Somente @EventPattern
@Controller()
export class RmqController {
    constructor(private readonly rmqService: RmqService) { }

    @EventPattern('billing_created')
    handleBillingCreated(@Payload() data: number[], @Ctx() context: RmqContext) {
        /* console.log("Payload", data) */
        //returns data sent
        const pattern = context.getPattern()
        //Returns "billing_created"
        /* console.log("Pattern", pattern) */
        const channel = context.getChannelRef();
        /*  console.log("Channel", channel) */
        //Opções: ConfirmChannel
        const originalMsg = context.getMessage();
        /* console.log("Original", originalMsg?.fields?.routingKey) */
        //Nome da fila
        this.rmqService.handleRmqCmd()
        //.ack libera a mensagem pra ser apagada
        /* channel.ack(originalMsg); */
    }

}
