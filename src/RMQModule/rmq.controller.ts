import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { RmqService } from './rmq.service';

@Controller()
export class RmqController {
    constructor(private readonly rmqService: RmqService) { }
    @MessagePattern({ cmd: 'ian' }, {})
    getGreetingMessage() {
        console.log('To recebendo cmd do ian');
    }

    @EventPattern('billing_created')
    handleBillingCreated(data: Record<string, unknown>) {
        console.log('To lendo a lista parça');
    }
}
