import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '@/app/contact/page';
describe('Contact page', () => {
  it('should render properly', () => {
    render(<Contact />);
    const title = screen.getByTestId('contact-title');
    const titleText = 'Kontak Kami';
    expect(title).toHaveTextContent(titleText);
  });
});
