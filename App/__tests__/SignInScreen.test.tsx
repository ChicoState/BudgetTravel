import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignInScreen from '../Screens/SignInScreens/SignInScreen';

describe('SignInScreen tests', () => {
  test('navigates to Home screen on successful sign-in', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText } = render(
      <SignInScreen navigation={mockNavigation} />
    );

    const emailInput = getByPlaceholderText('user@email.com');
    const passwordInput = getByPlaceholderText('Password');
    const signInButton = getByText('Sign In');

    fireEvent.changeText(emailInput, 'user1@example.com');
    fireEvent.changeText(passwordInput, 'P@ssword1');
    fireEvent.press(signInButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
  });

  test('displays error message on unknown signin', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <SignInScreen navigation={{}} /> // Pass an empty object as navigation for simplicity
    );

    const emailInput = getByPlaceholderText('user@email.com');
    const passwordInput = getByPlaceholderText('Password');
    const signInButton = getByText('Sign In');

    fireEvent.changeText(emailInput, 'invaliduser@example.com');
    fireEvent.changeText(passwordInput, 'invalidpassword');
    fireEvent.press(signInButton);

    // Get the error message by test ID
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe("Look's like you're a new user, create an account.");
  });
  test('displays error message on wrong password', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <SignInScreen navigation={{}} /> // Pass an empty object as navigation for simplicity
    );

    const emailInput = getByPlaceholderText('user@email.com');
    const passwordInput = getByPlaceholderText('Password');
    const signInButton = getByText('Sign In');

    fireEvent.changeText(emailInput, 'user1@example.com');
    fireEvent.changeText(passwordInput, 'invalidpassword');
    fireEvent.press(signInButton);

    // Get the error message by test ID
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe("Wrong password, you sure this is you?");
  });

});
