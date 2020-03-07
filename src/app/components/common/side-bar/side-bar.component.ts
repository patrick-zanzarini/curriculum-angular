import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, EmbeddedViewRef, HostListener } from '@angular/core';
import { SideNavService } from 'src/app/services/side-bar.service';
import { ScreenSizeService } from 'src/app/services/screen-size/screen-size.service';
import { ScreenSize } from 'src/app/services/screen-size/screen-size.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements AfterViewInit, OnInit {
  currentView: EmbeddedViewRef<any>|null = null;
  isVisible = true;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private sideNavService: SideNavService, private screenSizeService: ScreenSizeService) { }

  ngOnInit(): void {
    this.screenSizeService.screenSize.subscribe(
      screenSize => this.updateScreenSize(screenSize));
    this.updateScreenSize(this.screenSizeService.getValue(), true);
  }

  ngAfterViewInit() {
    this.updateSizeBar();
  }

  updateSizeBar() {
    this.sideNavService
      .contents
      .subscribe(content => {
        if (this.container && this.currentView) {
          this.currentView.destroy();
          this.currentView = null;
        }

        if (content === null) {
          return;
        }

        this.currentView = this.container.createEmbeddedView(content);
      });
  }

  updateScreenSize(screenSize: ScreenSize, forceUpdate = false) {
    const visible = screenSize > ScreenSize.Small;

    if (this.isVisible !== visible || forceUpdate) {
      this.updateVisibility(visible);
    }
  }

  private updateVisibility(isVisible: boolean) {
    this.isVisible = isVisible;
    this.sideNavService.setVisibility(this.isVisible);
  }
}
