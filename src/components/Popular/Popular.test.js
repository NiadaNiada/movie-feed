import React from 'react';
import {render, screen} from '@testing-library/react';
import Popular from "../Movie/Movie";
import * as movieAPI from '../../Services/Services';

jest.mock('../../Services/Services')

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


describe('<Popular />', function () {

    test('renders with empty data', () => {
        render(<Popular/>);
        expect(screen.queryByTestId('no-movie-poster')).toBeInTheDocument();
    });
    test('renders popular movies with data', () => {

    });
});