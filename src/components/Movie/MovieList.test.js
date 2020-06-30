import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import MovieList from './MovieList';
import {MemoryRouter} from "react-router";
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {BASE_POSTER_PATH} from "../../Constants/Constants";

const movies = [{
    adult: false,
    backdrop_path: "https://image.tmdb.org/t/p/w300/jAtO4ci8Tr5jDmg33XF3OZ8VPah.jpg",
    genre_ids: [28, 18],
    id: 619592,
    original_language: "en",
    original_title: "Force of Nature",
    overview: "A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.",
    popularity: 79.403,
    poster_path: "/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
    release_date: "2020-07-02",
    title: "Force of Nature",
    video: false,
    vote_average: 5.7,
    vote_count: 23
}, {
    adult: false,
    backdrop_path: "https://image.tmdb.org/t/p/w300/72r4uAQGsa8KEv0DB2TpSu31lEB.jpg",
    genre_ids: [18, 36, 53],
    id: 451184,
    original_language: "en",
    original_title: "Wasp Network",
    overview: "Havana, Cuba, 1990. René González, an airplane pilot, unexpectedly flees the country, leaving behind his wife Olga and his daughter Irma, and begins a new life in Miami, where he becomes a member of an anti-Castro organization.",
    popularity: 65.617,
    poster_path: "/fOvqEunubL3wPskvtk2Ficfl0pH.jpg",
    release_date: "2020-01-29",
    title: "Wasp Network",
    video: false,
    vote_average: 6.4,
    vote_count: 80
}, {
    adult: false,
    backdrop_path: "https://image.tmdb.org/t/p/w300/vLX1fc75h4CJVjAXPth1SlByBTq.jpg",
    genre_ids: [16],
    id: 663459,
    original_language: "en",
    original_title: "Jungle Beat: The Movie",
    overview: "The Jungle Beat animals think it’s the best thing ever when an alien arrives in the jungle bringing with him the power of speech. They also surprisingly think it’s the best thing ever when they find out that he’s been sent to conquer them.",
    popularity: 50.635,
    poster_path: "/cgC67SOxd9xkjN4Bnvjtuj1vI8T.jpg",
    release_date: "2020-06-26",
    title: "Jungle Beat: The Movie",
    video: false,
    vote_average: 4.3,
    vote_count: 3
}]


describe('<MovieList />', function () {
    test('renders empty movies list', () => {
        const props = {
            movies: []
        };
        const {queryByTestId} = render(<MemoryRouter>
            <MovieList {...props}/>
        </MemoryRouter>);
        expect(queryByTestId('movies')).not.toBeNull();
    });
    test('renders movies list and check for the valid poster path', () => {
        const props = {
            movies: movies
        };
        const {queryAllByTestId} = render(<MemoryRouter>
            <MovieList {...props}/>
        </MemoryRouter>);
        const list = queryAllByTestId('movie-list');
        expect(list[0]).toBeInTheDocument();
        expect(list[0].querySelector("[data-testid='movie-poster']").getAttribute('src')).toEqual(`${BASE_POSTER_PATH}/w300${props.movies[0].poster_path}`);
    });

    test('renders movies list, fire onClick event and check that the routing is working', () => {
        const history = createMemoryHistory({
            initialEntries: ['/']
        });
        const props = {
            movies: movies,
            loading: false,
            error: false
        };
        const {queryAllByTestId} = render(<Router history={history}>
            <MovieList {...props}/>
        </Router>);
        expect(history.location.pathname).toEqual('/');
        const element = queryAllByTestId('movie-component');
        fireEvent.click(element[0]);
        expect(history.location.pathname).toEqual('/619592');
    });

    test('renders movies list while loading', () => {

        const props = {
            movies: [],
            loading: true,
            error: false
        };
        const {queryAllByTestId,getByText} = render(<MemoryRouter>
            <MovieList {...props}/>
        </MemoryRouter>);
        const list = queryAllByTestId('movie-list');
        expect(list[0]).not.toBeTruthy();
        expect(getByText('Loading movie data now...')).toBeInTheDocument();
    });

    test('renders movies list while error', () => {

        const props = {
            movies: [],
            loading: false,
            error: true
        };
        const {queryAllByTestId,getByText} = render(<MemoryRouter>
            <MovieList {...props}/>
        </MemoryRouter>);
        const list = queryAllByTestId('movie-list');
        expect(list[0]).not.toBeTruthy();
        expect(getByText('Woops, something went wrong trying to fetch movies.')).toBeInTheDocument();
    });

});
