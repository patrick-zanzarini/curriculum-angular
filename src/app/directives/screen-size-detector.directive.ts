import { Directive, OnInit, HostListener } from '@angular/core';
import { ScreenSizeService } from '@services/screen-size/screen-size.service';

@Directive({
  selector: '[appScreenSizeDetector]',
})
export class ScreenSizeDetectorDirective implements OnInit {

  constructor(private screenSizeService: ScreenSizeService) {
    this.onResize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize')
  onResize() {
    this.screenSizeService.updateScreenWidth();
  }
}
