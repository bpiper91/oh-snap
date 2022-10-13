import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>);
    });

    it('renders', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
});
