import React from "react";
import Header from "./Header";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";

describe('<Header />', function () {
    test('renders Header page', () => {
        const {firstChild} = render(<MemoryRouter><Header/></MemoryRouter>);
        expect(firstChild).toMatchSnapshot();
    });

    test('renders Header page and check fot the valid title', () => {
        const {getByText} = render(<MemoryRouter><Header/></MemoryRouter>);
        expect(getByText('Enjoy best movies')).toBeTruthy();
    });
});