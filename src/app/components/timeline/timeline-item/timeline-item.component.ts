import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  /* expected format YYYY-MM */
  @Input() from: string;
  @Input() to: string;
  @Input() isLast: boolean;
  @Input() endDateOnly: boolean;

  getDisplayDate(date: string): string {
    if (!date) {
      return 'Present Day';
    }

    const parsedDate = moment(date);
    if (parsedDate.isValid()) {
      return moment(date).format('MM / YYYY');
    }

    return date;
  }
  constructor() { }

  ngOnInit() {
  }
}
