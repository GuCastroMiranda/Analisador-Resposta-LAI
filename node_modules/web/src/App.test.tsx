import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders the main heading and button', () => {
    render(<App />);
    
    const heading = screen.getByRole('heading', { name: /Analisador de Respostas LAI/i });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Analisar/i });
    expect(button).toBeInTheDocument();
  });
});
