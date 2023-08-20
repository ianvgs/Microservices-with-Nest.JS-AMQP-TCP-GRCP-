import { Injectable } from '@nestjs/common';
import { CreateAnimalEvent } from './events/create-animal-event';


@Injectable()
export class TcpService {
  private readonly analytics: any[] = [];

  handleAnimalCreated(data: CreateAnimalEvent) {
    console.log('Handling Animal Created - COMMUNICATIONS', data)
  }

  getAnalytics() {
    console.log('Receiving commands from microservices')
  }
}
