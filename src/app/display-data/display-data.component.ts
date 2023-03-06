import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EditDialogComponent } from '../core/dialogs/edit-dialog/edit-dialog.component';

import * as fromLogin from '@gen-store/posts/actions/posts.actions';
import { selectAllPosts } from '@gen-store/posts/selectors/posts.selectors';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  posts$ = this.store.select(selectAllPosts);

  constructor(
    private store: Store,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.showPostsData();
    
  }

  openEditDialog(itemData: any){
    // Data flow: GetData Service -> DisplayData Component -> EditDialog Component -> DataScreen Component.
    // This data object send the clicked card data to the next component via MatDialog object 
    this.dialog.open(EditDialogComponent, {data: {userId: itemData.userId, id: itemData.id, title: itemData.title, body: itemData.body}});
  }

  showPostsData(){
    this.store.dispatch(fromLogin.fetchPosts());
  }

}
