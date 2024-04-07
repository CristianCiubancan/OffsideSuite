/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import People from '@/pages/home/people';

describe('People', () => {
  it('renders without crashing', () => {
    render(<People />);
  });

  it('renders a heading', () => {
    render(<People />);

    const heading = screen.getByRole('heading', {
      name: /hello people!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
