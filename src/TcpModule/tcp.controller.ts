import { Controller, Get } from '@nestjs/common';
import { TcpService } from './tcp.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateAnimalEvent } from './events/create-animal-event';

@Controller()
export class TcpController {
  constructor(private readonly tcpService: TcpService) { }

  //Enviado do backend assim:  this.analyticsClient.emit('animal_created', new CreateAnimalEvent(createAnimalRequest.name))
  @EventPattern('animal_created')
  handleAnimalCreated(data: CreateAnimalEvent) {
    console.log('ANIMAL PATTERN')
    return this.tcpService.handleAnimalCreated(data)
  }

  //Enviado do backend assim:  this.analyticsClient.emit('analytics_created', new CreateAnimalEvent(createAnimalRequest.name))
  @EventPattern('analytics_created')
  handleAnalyticsCreated(data: CreateAnimalEvent) {
    console.log('ANALYTICS PATTERN')
    return this.tcpService.handleAnalyticsCreated(data)
  }

  //Enviado do backend assim: this.analyticsClient.send({cmd: 'get_analytics'},{})
  @MessagePattern({ cmd: 'get_analytics' })
  getAnalytics() {
    return this.tcpService.getAnalytics()
  }
}
