import { Controller, Get } from '@nestjs/common';

import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';

@Controller('')
export class KafkaController {
    constructor(private readonly kafkaService: KafkaService) { }

    @MessagePattern('kafka_order')
    async payment(@Payload() message) {
        await this.kafkaService.payment({
            amount: message.price,
            order_id: message.id,
            client_id: message.client_id,
        });
    }
}
