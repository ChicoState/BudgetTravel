import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Usernamescreen from '../Screens/CreateAccountScreens/CreateAccountScreen';

test('navigates to setPass screen on valid email', () => {
  const mockNavigation = { navigate: jest.fn() };
  const { getByPlaceholderText, getByText } = render(
    <Usernamescreen navigation={mockNavigation} />
  );

  const input = getByPlaceholderText('user@email.com');
  const continueButton = getByText('Continue');

  fireEvent.changeText(input, 'valid@email.com');
  fireEvent.press(continueButton);

  expect(mockNavigation.navigate).toHaveBeenCalledWith('setPass');
});

test('displays error message on invalid email', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Usernamescreen navigation={mockNavigation} />
    );
  
    const input = getByPlaceholderText('user@email.com');
    const continueButton = getByText('Continue');
  
    fireEvent.changeText(input, 'invalidemail');
    fireEvent.press(continueButton);
  
    // Assuming you have a testID on the error message element
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe('Invalid email address');
  });
  test('displays error message on empty string', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Usernamescreen navigation={mockNavigation} />
    );
  
    const input = getByPlaceholderText('user@email.com');
    const continueButton = getByText('Continue');
  
    fireEvent.changeText(input, '');
    fireEvent.press(continueButton);
  
    // Assuming you have a testID on the error message element
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe('Invalid email address');
  });
  test('displays error message on space in email', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Usernamescreen navigation={mockNavigation} />
    );
  
    const input = getByPlaceholderText('user@email.com');
    const continueButton = getByText('Continue');
  
    fireEvent.changeText(input, 'use r@email.com');
    fireEvent.press(continueButton);
  
    // Assuming you have a testID on the error message element
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe('Invalid email address');
  });
test('navigates to Login screen on "Already have an account?" click', () => {
  const mockNavigation = { navigate: jest.fn() };
  const { getByText } = render(<Usernamescreen navigation={mockNavigation} />);

  const existingAccountText = getByText('Already have an account?');
  fireEvent.press(existingAccountText);

  expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
});
