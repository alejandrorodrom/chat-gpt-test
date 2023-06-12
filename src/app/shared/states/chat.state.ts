import { Injectable } from '@angular/core';
import { Message } from "../interfaces/chat.interface";

@Injectable({
  providedIn: 'root'
})
export class ChatState {
  private _messages: Message[] = [];

  get messages() {
    return this._messages;
  }

  set message(value: Message) {
    const beforeMessages = [...this.messages];
    this._messages = [
      ...beforeMessages,
      value
    ];
  }
}
