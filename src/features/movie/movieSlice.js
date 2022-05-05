import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: null,
    img: null,
    backdrop: null,
    overview: null,
    date: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.title = action.payload.title;
            state.img = action.payload.img;
            state.backdrop = action.payload.backdrop;
            state.overview = action.payload.overview;
            state.date = action.payload.date;
        }
    }
})

export const { setMovie } = movieSlice.actions;
export const titleState = state => state.movie.title;
export const imgState = state => state.movie.img;
export const backdropState = state => state.movie.backdrop;
export const overviewState = state => state.movie.overview;
export const dateState = state => state.movie.date;

export default movieSlice.reducer;