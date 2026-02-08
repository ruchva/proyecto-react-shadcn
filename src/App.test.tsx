import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('App component renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  test("App component's count updates on button click", () => {
    render(<App />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button.textContent).toBe('count is 1');
  });
});