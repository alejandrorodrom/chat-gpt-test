import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from "./shared/services/chat.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ChatState } from "./shared/states/chat.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup;

  @ViewChild('conversation') conversation!: ElementRef;

  get question() {
    return this.form.get('question');
  }

  constructor(
    private chatService: ChatService,
    public chatState: ChatState
  ) {
    this.form = new FormGroup({
      question: new FormControl('', [Validators.required]),
    });
  }

  sendQuestion(): void {
    this.chatState.message = {
      type: 'request',
      message: this.question?.value
    };

    this.chatService.sendQuestion(this.question?.value)
      .subscribe({
        next: (value) => {
          this.chatState.message = {
            type: 'response',
            message: value.response
          };
        },
        complete: () => {
          this.form.enable();
          setTimeout(() => {
            this.conversation.nativeElement.scrollTop = this.conversation.nativeElement.scrollHeight;
          })
        }
      })
    this.form.reset();
    this.form.disable();
    setTimeout(() => {
      this.conversation.nativeElement.scrollTop = this.conversation.nativeElement.scrollHeight;
    })
  }
}
