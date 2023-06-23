import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';
describe('Home page', () => {
  it('should render properly', () => {
    render(<Home />);
    const title = screen.getByTestId('home-title');
    const titleText = 'Jalankan Manajemen Produk Bisnis Anda Lebih Mudah!';
    expect(title).toHaveTextContent(titleText);
  });
  it('should render properly', () => {
    render(<Home />);
    const title = screen.getByTestId('home-button');
    const titleText = 'Login';
    expect(title).toHaveTextContent(titleText);
  });
});
