import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pattern } from 'src/app/shared/pattern';

@Component({
  selector: 'etalytics-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  createCommentForm: FormGroup;
  @Output() addComment: EventEmitter<Comment> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createCommentForm = this.formBuilder.group({
      name: ['', Validators.required],
      body: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(Pattern.EMAIL_PATTERN)]]
    });
  }

  addCommentEvent(event: any) {
    const comment = this.createCommentForm.value;
    comment.postId = 1;
    this.addComment.emit(comment);
  }
}
