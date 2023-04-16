import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Learn React', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Learn Angular', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Angular/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Learn Vue', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Vue/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByTestId('title');
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 elements button', () => {
  render(<App />);
  const buttonElements = screen.getAllByRole('button')
  expect(buttonElements).toHaveLength(3);
});

test('renders title "click me !', () => {
  render(<App />);
  const buttonElements = screen.getAllByRole('button')
  expect(buttonElements[0]).toHaveTextContent('click me !');
});

test('renders title "Learn Angular" after click event', () => {
  render(<App />);
  const heading1 = screen.getByTestId('title')
  const buttonElements = screen.getAllByRole('button')
  fireEvent.click(buttonElements[1])
  expect(heading1).toHaveTextContent('Learn Angular');
});