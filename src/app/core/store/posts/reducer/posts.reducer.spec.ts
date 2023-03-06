
import * as fromPostReducer from './posts.reducer';
import * as fromPostActions from '../actions/posts.actions';
import { PostsData } from '@gen-models/post.model';

describe('PostReducer', () => {
  const initialState = fromPostReducer.initialState;

  const post = {
    id: 2,
    title: 'Unit Test',
    body: 'test body value',
    userId: '1'
  } as PostsData;
  it('should set the posts on the store', () => {
    const action = fromPostActions.fetchPostsSuccessfuly({
        posts: [post],
    });
    const state = fromPostReducer.reducer(initialState, action);

    expect(state.ids).toEqual([2]);
  });

  it('should set post id', () => {
    const action = fromPostActions.setPostSelected({
        postId: 2,
    });
    const state = fromPostReducer.reducer(initialState, action);

    expect(state.selectedPostId).toEqual(2);
  });

  it('should add new post id', () => {
    const action = fromPostActions.addPost({
        post
    });
    const state = fromPostReducer.reducer(initialState, action);

    expect(state.ids).toEqual([2]);
  });

  it('should set error value', () => {
    const action = fromPostActions.fetchPostsFailed({
        error: 'Error message'
    });
    const state = fromPostReducer.reducer(initialState, action);

    expect(state.error).toEqual(true);
  });

  it('should select post id', () => {
    const action = fromPostActions.setPostSelected({
        postId: 2,
    });
    const state = fromPostReducer.reducer(initialState, action);

    expect(state.selectedPostId).toEqual(post.id);
  });
});