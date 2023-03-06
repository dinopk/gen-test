
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { provideMockActions } from '@ngrx/effects/testing';
import {  of, throwError } from 'rxjs';
import { PostsEffects } from './posts.effects';
import { GetDataService } from '../../../services/get-data.service';
import { marbles } from 'rxjs-marbles';
import * as fromPosts from '../actions/posts.actions';
import { PostsData } from '../../../models/post.model';
import { Observable } from 'rxjs';

describe('PostsEffects', () => {
 let spectator: SpectatorService<PostsEffects>;
 let actions: Observable<any>;
 let getDataService: GetDataService;

 const post = {
    id: 2,
    title: 'Unit Test',
    body: 'test body value',
    userId: '1'
  } as PostsData;

  const initialState: any = {
    posts: [post]
  };

 const createComponent = createServiceFactory({
   service: PostsEffects,
   providers: [
     provideMockStore({
       initialState,
     }),
     provideMockActions(() => actions)
   ],
   mocks: [GetDataService]
 });

 beforeEach(() => {
   spectator = createComponent();
   getDataService = spectator.inject(GetDataService);
 });

 it('should create', () => {
   expect(spectator.service).toBeTruthy();
 });

 it('should load posts', marbles((m) => {
    const expectAction = fromPosts.fetchPostsSuccessfuly({ posts: [post] });
    const expected = m.cold('--b', { b: expectAction });

    const spyGetPostsData = jest.spyOn(getDataService, 'getPostsData')
        .mockImplementation(() => of([post] as PostsData[]));

    const action = fromPosts.fetchPosts();
    actions = m.hot('--a', { a: action });

    m.expect(spectator.service.loadPosts$).toBeObservable(expected);
    m.flush();
    expect(spyGetPostsData).toHaveBeenCalledTimes(1);
  }));

  it('should not load posts', marbles((m) => {
    const expectAction = fromPosts.fetchPostsFailed({ error: {"error":"Test with Error"} });
    const expected = m.cold('--b', { b: expectAction });

    const spyGetPostsData = jest.spyOn(getDataService, 'getPostsData')
        .mockImplementation(() => {
            return throwError({ error: 'Test with Error'  });
        });

    const action = fromPosts.fetchPosts();
    actions = m.hot('--a', { a: action });

    m.expect(spectator.service.loadPosts$).toBeObservable(expected);
    m.flush();
    expect(spyGetPostsData).toHaveBeenCalledTimes(1);
  }));
});