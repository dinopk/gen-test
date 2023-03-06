import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { PostsData } from '../core/models/post.model';
import { updatePost } from '@gen-store/posts/actions/posts.actions';
import { selectCurrentPost } from '../core/store/posts/selectors/posts.selectors';

@Component({
  selector: 'app-data-screen',
  templateUrl: './data-screen.component.html',
  styleUrls: ['./data-screen.component.css']
})
export class DataScreenComponent implements OnInit {

  itemData$ = this.store.select(selectCurrentPost).pipe(take(1));

  itemDataForm: FormGroup;
  
  constructor(private router: Router, private store: Store) {
    this.initForm();
   }

  initForm() {
    this.itemData$.pipe(take(1)).subscribe((post) => {
      this.itemDataForm = new FormGroup({
        id: new FormControl(post?.id),
        title: new FormControl(post?.title),
        body: new FormControl(post?.body),
        userId: new FormControl(post?.userId)
      });
    });
  }

  ngOnInit(): void {  }

  // Method used to revert changes made on clicked item data
  revertChanges(){
    this.initForm();
  }

  //  Alters (only locally) data recieved from given URL (that is coming through DisplayDataComponent)
  applyChanges(){
    this.updatePost(this.itemDataForm.getRawValue());
    this.router.navigate(['/display-data']);
  }

  private updatePost(post: PostsData) {
    this.store.dispatch(updatePost({ post }));
  }

}
