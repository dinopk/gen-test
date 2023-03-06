import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DisplayDataComponent } from '../../../display-data/display-data.component';
import * as fromPost from '@gen-store/posts/actions/posts.actions';
import { PostsData } from '@gen-models/post.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DisplayDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostsData,
    public router: Router,
    private store: Store) { }

  dataFromItem: PostsData = this.data;

  ngOnInit(): void {}

  closeDialog(): void {
    
    this.dialogRef.close()
  }

  goToDataScreenPage() {
    this.setPost(this.dataFromItem.id);
    this.router.navigate(['data-screen']);
    this.dialogRef.close();
  }

  setPost(postId: number) {
    this.store.dispatch(fromPost.setPostSelected({ postId }))
  }

}
