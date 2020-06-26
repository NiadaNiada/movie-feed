import React from 'react';
import { render } from '@testing-library/react';
import Movie from './Movie';

const poster_path = 'https://image.tmdb.org/t/p/w500/fOvqEunubL3wPskvtk2Ficfl0pH.jpg';

describe('<UserDetailsGeneral />', function () {
    test('renders movie without poster path', () => {
        const {queryByTestId} = render(<Movie/>);
        expect(queryByTestId('no-movie-poster')).not.toBeNull();
    });
    test('renders movie with poster path', () => {
        const props = {
            poster: poster_path
        };
        const {queryByTestId} = render(<Movie {...props}/>);
        expect(queryByTestId('movie-poster')).not.toBeNull();
        expect(queryByTestId('movie-poster')).toHaveAttribute('src', poster_path);
    });

});