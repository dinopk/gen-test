import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromPosts from '../reducer/posts.reducer';


export const selectPostState = createFeatureSelector<fromPosts.State>('posts');
 
export const selectPostIds = createSelector(
  selectPostState,
  fromPosts.selectPostIds // shorthand for postsState => fromPosts.selectPostIds(postsState)
);
export const selectPostEntities = createSelector(
  selectPostState,
  fromPosts.selectPostEntities
);
export const selectAllPosts = createSelector(
  selectPostState,
  fromPosts.selectPosts
);
export const selectPostTotal = createSelector(
  selectPostState,
  fromPosts.selectPostTotal
);
export const selectCurrentPostId = createSelector(
  selectPostState,
  fromPosts.getSelectedPostId
);
 
export const selectCurrentPost = createSelector(
  selectPostEntities,
  selectCurrentPostId,
  (postEntities, postId) => postEntities && postId ? postEntities[postId] : null
);