import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pattern } from 'src/app/shared/pattern';

@Component({
  selector: 'etalytics-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  myForm: FormGroup;
  @Output() addComment: EventEmitter<Comment> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(Pattern.EMAIL_PATTERN)]]
    });
  }

  addCommentEvent(event: any) {
    const comment = this.myForm.value;
    comment.postId = 1;
    this.addComment.emit(comment);
  }
}
