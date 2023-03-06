import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';
import { environment } from '@environment';

import * as fromPosts from './posts/reducer/posts.reducer';

export interface State {
    posts: fromPosts.State
}

export const reducers: ActionReducerMap<State> = {
    posts: fromPosts.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
