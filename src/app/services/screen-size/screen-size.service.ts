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
    let newScreenSize: ScreenSize;

    if (!CSS.supports('display', 'grid')) {
      newScreenSize = ScreenSize.Small;
    } else {
      newScreenSize = this.screenSizeToEnum(window.innerWidth);
    }

    if (newScreenSize !== this.screenSizeState.value) {
      this.screenSizeState.next(newScreenSize);
    }
  }

  screenSizeToEnum(width: number): ScreenSize {
    if (width <= ScreenSize.Small) {
      return ScreenSize.Small;
    }

    if (width > ScreenSize.Small && width <= ScreenSize.Medium) {
      return ScreenSize.Medium;
    }

    return ScreenSize.Large;
  }
}
