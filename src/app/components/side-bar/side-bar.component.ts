import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, EmbeddedViewRef, HostListener } from '@angular/core';
import { SideNavService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements AfterViewInit {
  currentView: EmbeddedViewRef<any>|null = null;
  isVisible = true;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private sideNavService: SideNavService) { }

  ngAfterViewInit() {
    this
      .sideNavService
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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateScreenSize(event.target.innerWidth);
  }

  updateScreenSize(width: number) {
    if (width < 768 && this.isVisible) {
      this.isVisible = false;
      this.updateVisibility();
      return;
    }

    if (width >= 768 && !this.isVisible) {
      this.isVisible = true;
      this.updateVisibility();
    }
  }

  private updateVisibility() {
    this.sideNavService.setVisibility(this.isVisible);
  }
}
