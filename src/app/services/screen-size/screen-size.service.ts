import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ScreenSize } from './screen-size.model';

@Injectable()
export class ScreenSizeService {
  private screenSizeState = new BehaviorSubject<ScreenSize>(ScreenSize.Small);
  readonly screenSize = this.screenSizeState.asObservable();
  
  public getValue(): ScreenSize {
    return this.screenSizeState.value;
  }

  updateScreenWidth() {
    const width = window.innerWidth;

    if (width <= ScreenSize.Small) {
      this.screenSizeState.next(ScreenSize.Small);
      return;
    }

    if (width > ScreenSize.Small && width <= ScreenSize.Medium) {
      this.screenSizeState.next(ScreenSize.Medium);
      return;
    }

    this.screenSizeState.next(ScreenSize.Large);
  }
}
