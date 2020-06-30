import React from "react";
import NotFound from "./NotFound";
import {render} from "@testing-library/react";

describe('<NotFound />', function () {
    test('renders NotFound page', () => {
        const {queryByTestId} = render(<NotFound/>);
        expect(queryByTestId('not-found')).toBeTruthy();
    });
});