import React from 'react';
import {render} from '@testing-library/react';
import Popular from "../Movie/Movie";

jest.mock('../../Services');

describe('<Popular />', function () {

    test('renders with empty data', () => {
        const {queryByTestId} = render(<Popular/>);
        expect(queryByTestId('no-movie-poster')).toBeInTheDocument();
    });
    test('renders popular movies with data', () => {
        // const { getByText } = render(<Popular />);
        // expect(getByText('Popular Movies')).toBeInTheDocument();
    });

});