import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders a home page', () => {
    render(<Home />);

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
