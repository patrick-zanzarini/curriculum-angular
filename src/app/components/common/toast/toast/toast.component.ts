import { Component, OnInit } from '@angular/core';
import { ToastMessageModel } from '@services/toast/toast-message.model';
import { ToastService } from '@services/toast/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  messages: ToastMessageModel[] = [];

  constructor(private service: ToastService) {}

  ngOnInit(): void {
    this.service.message.subscribe(msg => this.messages.push(msg));

    this.service.removeMessage.subscribe(msg => {
      const index: number = this.messages.indexOf(msg);
      if (index !== -1) {
        this.messages.splice(index, 1);
      }
    });
  }
}
