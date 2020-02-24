import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideNavService {
  private state = new BehaviorSubject<TemplateRef<any>|null>(null);
  readonly contents = this.state.asObservable();

  set(ref: TemplateRef<any>): void {
    this.state.next(ref);
  }

  clear(): void {
    this.state.next(null);
  }
}
