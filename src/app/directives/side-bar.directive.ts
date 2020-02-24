import { Directive, TemplateRef, OnInit } from '@angular/core';
import { SideNavService } from '../services/side-bar.service';

@Directive({
  selector: '[appSideBar]',
})
export class SideBarDirective implements OnInit {
  constructor(private sideNavService: SideNavService, private ref: TemplateRef<any>) {}

  ngOnInit(): void {
    this.sideNavService.set(this.ref);
  }
}
