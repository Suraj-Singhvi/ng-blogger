import { Component, OnInit, Input } from '@angular/core';
import { Comments } from '../../interfaces/comments.interface';

@Component({
  selector: 'etalytics-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.scss']
})
export class ViewCommentsComponent implements OnInit {
  @Input() comments: Comments[];
  constructor() {}

  ngOnInit(): void {}
}
