import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/footer/Footer';
describe('Footer page', () => {
  it('should render properly', () => {
    render(<Footer />);
    const title = screen.getByTestId('footer');
    const titleText = 'Created With Prodin 2023';
    expect(title).toHaveTextContent(titleText);
  });
});
