import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async() => {
  const { findByText } = render(<App />);
  expect (await findByText('Biblioteca')).toBeTruthy()
  expect (await findByText('Perfil')).toBeTruthy()
  expect (await findByText('Registro')).toBeTruthy()
  expect (await findByText('Bem vindo a Biblioteca')).toBeTruthy()
  expect (await findByText('Livros disponíveis')).toBeTruthy()
  expect (await findByText('Doar livro')).toBeTruthy()
});
