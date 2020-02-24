import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  /* expected format YYYY-MM */
  @Input() date: string;
  @Input() isLast: boolean;

  getDisplayDate(date: string): string {
    if (!date) {
      return 'Jan / 0001';
    }

    const parsedDate = moment(date);
    if (parsedDate.isValid()) {
      return moment(date).format('MMM / YYYY');
    }

    return 'Jan / 0001';
  }
  constructor() { }

  ngOnInit() {
  }
}
