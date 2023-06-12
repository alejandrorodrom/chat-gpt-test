import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ChatResponse } from "../interfaces/chat.interface";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }

  sendQuestion(question: string): Observable<ChatResponse> {
    console.log(question)
    return this.http.post<ChatResponse>(
      'http://127.0.0.1:5000/chat',
      {
        question: question
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    )
  }
}
