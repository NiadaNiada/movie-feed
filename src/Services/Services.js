import axios from 'axios';
import {
    API_KEY,
    BASE_MOVIE_PATH,
} from '../Constants/Constants';


export const getNowPlaying = async () => {
    try {
        const response = await axios.get(
            `${BASE_MOVIE_PATH}now_playing?${API_KEY}`,
        );
        // console.log(response.data);
        return response.data.results;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};

export const getPopular = async () => {
    try {
        const response = await axios.get(
            `${BASE_MOVIE_PATH}popular?${API_KEY}`,
        );
        // console.log(response.data);
        return response.data.results;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};

export const getLatest = async () => {
    try {
        const response = await axios.get(
            `${BASE_MOVIE_PATH}latest?${API_KEY}`,
        );
       //  console.log(response.data);
        return response.data;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};

export const getUpcoming = async () => {
    try {
        const response = await axios.get(`${BASE_MOVIE_PATH}upcoming?${API_KEY}`);
        // console.log(response.data);
        return response.data.results;
    } catch (err) {
        console.error(`Something went wrong fetching the now playing data: ${err}`);
        throw err;
    }
};


export const getMovieDetailsById = async movieId => {
    try {
        const response = await axios.get(`${BASE_MOVIE_PATH}${movieId}?${API_KEY}`);
        // console.log(response.data);
        return response.data;
    } catch (err) {
        console.error(
            `There was a problem finding the details of this movie: ${err}`,
        );
        throw err;
    }
};