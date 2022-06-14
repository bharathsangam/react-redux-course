import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import themeReducer from "../features/theme/themeSlice";



export const store = configureStore({
    reducer: {
        //this is the state to access ex: state.counter.count
        counter: counterReducer,
        theme: themeReducer,
        posts: postsReducer,
    },
});
