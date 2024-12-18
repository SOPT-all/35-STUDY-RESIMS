import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import axios from 'axios';

// axios를 모킹합니다.
jest.mock('axios');

describe('LoginForm', () => {
  // window.alert를 모킹합니다.
  beforeAll(() => {
    global.alert = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('사용자가 올바른 데이터를 입력하고 제출하면 로그인 성공 콜백이 호출되고 alert가 표시됩니다.', async () => {
    // 모킹된 axios.post가 반환할 값을 설정합니다.
    const mockResponse = { data: { token: 'fake-jwt-token' } };
    axios.post.mockResolvedValueOnce(mockResponse);

    // 로그인 성공 시 호출될 콜백을 모킹합니다.
    const onLoginSuccess = jest.fn();

    render(<LoginForm onLoginSuccess={onLoginSuccess} />);

    // 사용자 이름과 비밀번호 입력
    fireEvent.change(screen.getByTestId('username-input'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } });

    // 폼 제출
    fireEvent.click(screen.getByText('로그인'));

    // axios.post가 올바른 인자로 호출되었는지 확인
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/login', {
        username: 'testuser',
        password: 'password123',
      });
    });

    // 로그인 성공 콜백이 호출되었는지 확인
    await waitFor(() => {
      expect(onLoginSuccess).toHaveBeenCalledWith(mockResponse.data);
    });

    // alert가 호출되었는지 확인
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('로그인에 성공했습니다!');
    });
  });

  test('로그인 실패 시 에러 메시지가 표시되고 alert는 호출되지 않습니다.', async () => {
    // axios.post가 에러를 던지도록 설정합니다.
    axios.post.mockRejectedValueOnce(new Error('Invalid credentials'));

    const onLoginSuccess = jest.fn();

    render(<LoginForm onLoginSuccess={onLoginSuccess} />);

    // 사용자 이름과 비밀번호 입력
    fireEvent.change(screen.getByTestId('username-input'), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'wrongpassword' } });

    // 폼 제출
    fireEvent.click(screen.getByText('로그인'));

    // 에러 메시지가 표시되는지 확인
    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('로그인에 실패했습니다.');

    // 로그인 성공 콜백이 호출되지 않았는지 확인
    expect(onLoginSuccess).not.toHaveBeenCalled();

    // alert가 호출되지 않았는지 확인
    expect(window.alert).not.toHaveBeenCalled();
  });
});
