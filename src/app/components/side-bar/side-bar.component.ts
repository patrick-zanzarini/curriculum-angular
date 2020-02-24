import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, EmbeddedViewRef } from '@angular/core';
import { SideNavService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements AfterViewInit {
  currentView: EmbeddedViewRef<any>|null = null;

  @ViewChild('container', { read: ViewContainerRef, static: false })
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
}
