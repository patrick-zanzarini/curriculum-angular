import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideNavService {
  private templateState = new BehaviorSubject<TemplateRef<any>|null>(null);
  readonly contents = this.templateState.asObservable();

  private visibilityState = new BehaviorSubject<boolean>(true);
  readonly visibility = this.visibilityState.asObservable();

  setContent(ref: TemplateRef<any>): void {
    this.templateState.next(ref);
  }

  clear(): void {
    this.templateState.next(null);
  }

  setVisibility(isVisible: boolean): void {
    this.visibilityState.next(isVisible);
  }
}
