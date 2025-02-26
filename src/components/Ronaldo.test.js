// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Cristiano';

test('deve dizer "Siuuuu" ao usuário quando o botão for clicado', () => {
  render(<Button text="Aperta aqui, para o Cr7 bater a falta!" />);

  const buttonElement = screen.getByText(/Aperta aqui, para o Cr7 bater a falta!/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  const updatedButton = screen.getByText(/Siuuuu!/i);
  expect(updatedButton).toBeInTheDocument();
});