import { ToastMessageState } from './toast-message.enum';

export class ToastMessageModel {
  descrition: string;
  title: string;
  state: ToastMessageState;

  constructor(description: string, title: string, state: ToastMessageState) {
    this.descrition = description;
    this.title = title;
    this.state = state;
  }
}
