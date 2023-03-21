import { Injectable } from '@nestjs/common';
import { CreateAnimalEvent } from './events/create-animal-event';


@Injectable()
export class TcpService {
  private readonly analytics: any[] = [];

  handleAnimalCreated(data: CreateAnimalEvent) {
    console.log('Handling Animal Created - COMMUNICATIONS', data)
    //todo: email user to welcome
  }

  handleAnalyticsCreated(data: CreateAnimalEvent) {
    this.analytics.push({
      name: data.name,
      timestamp: new Date()
    })
    console.log('Handling Analytics Created - ANAL LYTICS', data)
  }

  getAnalytics() {
    console.log('Receiving commands from microservices')
    return this.analytics
  }
}
