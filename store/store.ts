import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV !== 'production') {
    // add logger middleware
    middlewares.push(logger);
}

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
