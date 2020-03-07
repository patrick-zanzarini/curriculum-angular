import { Injectable } from '@angular/core';
import { ToastMessageModel } from './toast-message.model';
import { BehaviorSubject } from 'rxjs';
import { ToastMessageState } from './toast-message.enum';

@Injectable()
export class ToastService {
  private messageState = new BehaviorSubject<ToastMessageModel>(null);
  readonly message = this.messageState.asObservable();

  private removeMessageState = new BehaviorSubject<ToastMessageModel>(null);
  readonly removeMessage = this.removeMessageState.asObservable();

  hideMessage(message: ToastMessageModel) {
    this.removeMessageState.next(message);
  }

  showError(description: string, title = 'Error!') {
    this.messageState.next(new ToastMessageModel(description, title, ToastMessageState.Error));
  }

  showSuccess(description: string, title = 'Success!') {
    this.messageState.next(new ToastMessageModel(description, title, ToastMessageState.Success));
  }

  showAlert(description: string, title = 'Alert!') {
    this.messageState.next(new ToastMessageModel(description, title, ToastMessageState.Alert));
  }
}
