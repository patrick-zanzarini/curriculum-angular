import { Component, OnInit, Input } from '@angular/core';
import { ToastMessageModel } from 'src/app/services/toast/toast-message.model';
import { ToastMessageState } from 'src/app/services/toast/toast-message.enum';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss']
})
export class ToastItemComponent implements OnInit {
  @Input() message: ToastMessageModel;
  @Input() delay: number;
  state = ToastMessageState;
  requestedRemove = false;

  constructor(private service: ToastService) { }

  ngOnInit(): void {
    this.createTimeoutClose();
  }

  private createTimeoutClose() {
    this.validateDelay();

    setTimeout(() => {
      if (!this.requestedRemove) {
        this.close();
      }
    }, this.delay);
  }

  private validateDelay() {
    if (!this.delay || this.delay <= 0) {
      this.delay = 3000;
    }
  }

  close() {
    this.requestedRemove = true;
    this.service.hideMessage(this.message);
  }
}
