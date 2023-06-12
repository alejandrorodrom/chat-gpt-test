import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
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
