import { Injectable } from '@angular/core';
import io from 'socket.io-client';
 

@Injectable()
export class AbwsService {
  socket;
  constructor() { }

  connect() {
    console.log('connecting');

    const socket = io('http://localhost:7777');

    socket.on('connect', (f) => {
      console.log('connected');
    });

    socket.on('event', (data) => {

    });

    socket.on('disconnect', (f) => {
      console.log('disconnected');
    });

    this.socket = socket;
  }
}
