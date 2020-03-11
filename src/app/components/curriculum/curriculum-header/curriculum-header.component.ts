import { Component, OnInit } from '@angular/core';
import { ToastService } from '@services/toast/toast.service';

@Component({
  selector: 'app-curriculum-header',
  templateUrl: './curriculum-header.component.html',
  styleUrls: ['./curriculum-header.component.scss']
})
export class CurriculumHeaderComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  instagramNotFound() {
    this.toastService.showError('Instagram not found!');
  }

}
