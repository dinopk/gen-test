

import { PostsData } from '@gen-models/post.model';
import * as fromPostActions from './posts.actions';
describe('PostActions', () => {
  it('should load success', () => {
    const post = {
      id: 2,
      title: 'Unit Test',
      body: 'test body value',
      userId: '1'
    } as PostsData;
    const action = fromPostActions.fetchPostsSuccessfuly({ posts: [post] });
    expect(action.type).toEqual(fromPostActions.fetchPostsSuccessfuly.type);
    expect(action.posts).toEqual([post]);
  });

  it('should select post by id', () => {
    const action = fromPostActions.setPostSelected({
      postId: 2,
    });
    expect(action.type).toEqual(fromPostActions.setPostSelected.type);
    expect(action.postId).toEqual(2);
  });
});