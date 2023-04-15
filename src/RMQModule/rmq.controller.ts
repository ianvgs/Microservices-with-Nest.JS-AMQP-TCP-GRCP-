import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from './rmq.service';

@Controller()
export class RmqController {
    constructor(private readonly rmqService: RmqService) { }
    @MessagePattern({ cmd: 'ian' }, {})
    getGreetingMessage() {
        console.log('To recebendo cmd do ian');
    }

    @EventPattern('billing_created')
    handleBillingCreated(@Payload() data: number[], @Ctx() context: RmqContext) {
        console.log(`Pattern: ${context.getPattern()}`);
        console.log(`Data: ${JSON.stringify(data)}`);
        console.log(context.getMessage());
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();
        channel.ack(originalMsg);
    }

    @EventPattern('order_created')
    handleOrderCreated(@Payload() data: number[], @Ctx() context: RmqContext) {
        console.log(`Pattern: ${context.getPattern()}`);
        console.log(`Data: ${JSON.stringify(data)}`);
        console.log(context.getMessage());
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();
        channel.ack(originalMsg);
    }
}
