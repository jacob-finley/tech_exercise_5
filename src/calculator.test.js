import { render, screen, cleanup } from '@testing-library/react';
import Calculator from "./calculator";

afterEach(() => {
    cleanup();
})

test('should render calculator component', () => {
    render(<Calculator/>);
    const calculatorComponents = screen.getByTestId('main div');
    expect(calculatorComponents).toBeInTheDocument();
})

test('should render button components', () => {
    render(<Calculator/>);
    const buttonsComponents = screen.getByTestId("buttons div");
    expect(buttonsComponents).toBeInTheDocument();
})

test('should render ipnut components', () => {
    render(<Calculator/>);
    const inputComponents = screen.getByTestId('input div');
    expect(inputComponents).toBeInTheDocument();
})