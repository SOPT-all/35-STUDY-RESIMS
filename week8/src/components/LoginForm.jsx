import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/api/login', { username, password });
      onLoginSuccess(response.data);
      window.alert('로그인에 성공했습니다!');
    } catch (err) {
      setError('로그인에 실패했습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid='login-form'>
      <div>
        <label htmlFor='username'>사용자 이름:</label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          data-testid='username-input'
        />
      </div>
      <div>
        <label htmlFor='password'>비밀번호:</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid='password-input'
        />
      </div>
      {error && <div role='alert'>{error}</div>}
      <button type='submit'>로그인</button>
    </form>
  );
};

export default LoginForm;
