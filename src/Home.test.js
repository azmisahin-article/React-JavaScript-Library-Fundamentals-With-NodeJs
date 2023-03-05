/**
 * @file Home.test
 */

// assert library
import { render, screen } from '@testing-library/react';

// Target 
import Home from './Home';

// Target condination.
const target = 'Home'

/**
 * application initiation tests.
 */
describe(`${target}`, function () {

    /**
     * should be
     */
    test(`${target} shuld contain 'Hello World!'`, () => {
        // mock
        let _parameters = 'Hello World!'

        // parameters
        let expected = _parameters

        // operation
        render(<Home></Home>)
        //
        let result = screen.getByText(_parameters)

        // result
        let actual = result.textContent

        // condination
        expect(actual).toBe(expected)
    });
});