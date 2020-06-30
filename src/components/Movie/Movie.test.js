import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Movie from './Movie';
import {BASE_POSTER_PATH} from "../../Constants/Constants";


const poster_path = '/fOvqEunubL3wPskvtk2Ficfl0pH.jpg';

describe('<Movie />', function () {
    test('renders movie without poster path', () => {
        const {queryByTestId} = render(<Movie/>);
        expect(queryByTestId('no-movie-poster')).not.toBeNull();
    });
    test('renders movie with poster path', () => {
        const props = {
            poster: poster_path
        };
        const {queryByTestId} = render(<Movie {...props}/>);
        expect(queryByTestId('movie-poster')).toBeTruthy();
        expect(queryByTestId('movie-poster')).toHaveAttribute('src', `${BASE_POSTER_PATH}/w300${props.poster}`);
    });

    test('renders movie with poster and fires onClick event', () => {

        const onClick = jest.fn();
        const props = {
            poster: poster_path,
        };
        const {queryByTestId} = render(<Movie {...props} onClick={onClick}/>);
        const element = queryByTestId('movie-component');
        fireEvent.click(element);
        expect(onClick).toHaveBeenCalled();
    });

    test('renders movie without poster path and fires onClick event', () => {
        const onClick = jest.fn();
        const {queryByTestId} = render(<Movie onClick={onClick}/>);
        const element = queryByTestId('no-movie-poster');
        fireEvent.click(element);
        expect(onClick).toHaveBeenCalled();
    });

});