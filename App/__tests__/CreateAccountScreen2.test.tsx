import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CreateAccountScreen2 from '../Screens/CreateAccountScreens/CreateAccountScreen2';

describe('CreateAccountScreen2 tests', () => {
  test('navigates to Home screen on valid password', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText } = render(
      <CreateAccountScreen2 navigation={mockNavigation} />
    );

    const passwordInput = getByPlaceholderText('password');
    const checkPasswordInput = getByPlaceholderText('check password');
    const continueButton = getByText('Continue');

    fireEvent.changeText(passwordInput, 'ValidP@ssword1');
    fireEvent.changeText(checkPasswordInput, 'ValidP@ssword1');
    fireEvent.press(continueButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
  });

  test('displays error message on less than 8 characters', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <CreateAccountScreen2 navigation={mockNavigation} />
    );
  
    const passwordInput = getByPlaceholderText('password');
    const checkPasswordInput = getByPlaceholderText('check password');
    const continueButton = getByText('Continue');
  
    fireEvent.changeText(passwordInput, 'VaidP@1');
    fireEvent.changeText(checkPasswordInput, 'VaidP@1');
    fireEvent.press(continueButton);
  
    // Get the error message by test ID
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe('Invalid Password');
  });
  test('displays error message on missing special character', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <CreateAccountScreen2 navigation={mockNavigation} />
    );
  
    const passwordInput = getByPlaceholderText('password');
    const checkPasswordInput = getByPlaceholderText('check password');
    const continueButton = getByText('Continue');
  
    fireEvent.changeText(passwordInput, 'ValidPassword1');
    fireEvent.changeText(checkPasswordInput, 'ValidPassword1');
    fireEvent.press(continueButton);
  
    // Get the error message by test ID
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe('Invalid Password');
  });
  test('displays error message on missing upper case', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <CreateAccountScreen2 navigation={mockNavigation} />
    );
  
    const passwordInput = getByPlaceholderText('password');
    const checkPasswordInput = getByPlaceholderText('check password');
    const continueButton = getByText('Continue');
  
    fireEvent.changeText(passwordInput, 'validp@ssword1');
    fireEvent.changeText(checkPasswordInput, 'validp@ssword1');
    fireEvent.press(continueButton);
  
    // Get the error message by test ID
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe('Invalid Password');
  });
  test('displays error message missing lowercase', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <CreateAccountScreen2 navigation={mockNavigation} />
    );
  
    const passwordInput = getByPlaceholderText('password');
    const checkPasswordInput = getByPlaceholderText('check password');
    const continueButton = getByText('Continue');
  
    fireEvent.changeText(passwordInput, 'VALIDP@SSWORD1');
    fireEvent.changeText(checkPasswordInput, 'VALIDP@SSWORD1');
    fireEvent.press(continueButton);
  
    // Get the error message by test ID
    const errorMessage = getByTestId('error-message');
  
    // Assert that the error message is displayed
    expect(errorMessage.props.children).toBe('Invalid Password');
  });
});