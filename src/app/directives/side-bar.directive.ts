import { Directive, TemplateRef, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { SideNavService } from '../services/side-bar.service';

@Directive({
  selector: '[appSideBar]',
})
export class SideBarDirective implements OnInit {
  @Output() sideBarVisibilityChanged = new EventEmitter<boolean>();

  constructor(private sideNavService: SideNavService, private ref: TemplateRef<any>) { }

  ngOnInit(): void {
    this.sideNavService.setContent(this.ref);

    this.sideNavService.visibility.subscribe(isVisible => {
      this.sideBarVisibilityChanged.emit(isVisible);
    });
    this.sideBarVisibilityChanged.emit(this.sideNavService.getVisibilityState());
  }
}
