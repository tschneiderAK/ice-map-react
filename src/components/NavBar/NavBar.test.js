import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

it('renders nav bar', () => {
    render(<NavBar />)
    const navBarComponent = screen.getByRole("navigation")
})