
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GetDataService } from '@gen-services/get-data.service';

import * as fromPosts from '@gen-store/posts/actions/posts.actions';

@Injectable()
export class PostsEffects {

    loadPosts$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromPosts.fetchPosts),
            switchMap(() => this.getDataService.getPostsData()
                .pipe(
                    map(posts => fromPosts.fetchPostsSuccessfuly({ posts })),
                    catchError((error) => of(fromPosts.fetchPostsFailed({ error })))))
        ));


    constructor(public actions$: Actions, private getDataService: GetDataService) { }
}
