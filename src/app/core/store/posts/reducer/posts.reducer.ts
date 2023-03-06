
import { Action, createReducer, on } from '@ngrx/store';
import { PostsData } from '@gen-models/post.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromPosts from '../actions/posts.actions';

export interface State extends EntityState<PostsData> {
  // additional entities state properties
  selectedPostId: number | null;
  error: any
}

export function selectPostId(a: PostsData): number {
  //In this case this would be optional since primary key is id
  return a.id;
}

export const adapter: EntityAdapter<PostsData> = createEntityAdapter<PostsData>({
  selectId: selectPostId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedPostId: null,
  error: null
});

const postReducer = createReducer(
  initialState,
  on(fromPosts.addPost, (state, { post }) => {
    return adapter.addOne(post, state)
  }),
  on(fromPosts.updatePost, (state, { post }) => {
    return adapter.upsertOne(post, state);
  }),
  on(fromPosts.fetchPostsSuccessfuly, (state, { posts }) => {
    return adapter.addMany(posts, state);
  }),
  on(fromPosts.setPostSelected, (state, { postId }) => {
    return ({ ...state, selectedPostId: postId, error: true });
  }),
  on(fromPosts.fetchPostsFailed, state => {
    return ({ ...state, selectedPostId: null, error: true });
  })
);

export function reducer(state: State | undefined, action: Action) {
  return postReducer(state, action);
}

export const getSelectedPostId = (state: State) => state.selectedPostId

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
 
// select the array of post ids
export const selectPostIds = selectIds;
 
// select the dictionary of post entities
export const selectPostEntities = selectEntities;
 
// select the array of posts
export const selectPosts = selectAll;
 
// select the total post count
export const selectPostTotal = selectTotal;