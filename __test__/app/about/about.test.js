import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '@/app/about/page';
describe('About page', () => {
  it('should render properly', () => {
    render(<About />);
    const title = screen.getByTestId('about-title');
    const titleText = 'Digital Manajemen Barang Atau Produk Anda';
    expect(title).toHaveTextContent(titleText);
  });
  it('should render properly', () => {
    render(<About />);
    const title = screen.getByTestId('about-button');
    const titleText = 'Kontak Kami';
    expect(title).toHaveTextContent(titleText);
  });
});
