import { createAction, props } from '@ngrx/store';
import { PostsData } from '@gen-models/post.model';


export const fetchPosts = createAction(
    '[POSTS] Fetch Posts'
);

export const fetchPostsSuccessfuly = createAction(
    '[POSTS] Set Posts',
    props<{ posts: PostsData[] }>()
);

export const fetchPostsFailed = createAction(
    '[POSTS] Fetch Posts Failed',
    props<{ error: any }>()
);

export const setPostSelected = createAction(
    '[POSTS] Set Post Selected',
    props<{ postId: number }>()
);

export const addPost = createAction(
    '[POSTS] Add Post',
    props<{ post: PostsData }>()
);

export const updatePost = createAction(
    '[POSTS] Add Post',
    props<{ post: PostsData }>()
);