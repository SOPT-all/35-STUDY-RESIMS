import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 토큰 저장 (예: 인증 성공 시)
    localStorage.setItem("token", "user-auth-token");

    // 로그인 후 대시보드로 리다이렉트
    navigate("/home");
  };

  const handleLogout = () => {
    // 토큰 제거 (로그아웃)
    localStorage.removeItem("token");

    // 로그아웃 후 로그인 페이지로 리다이렉트
    navigate("/login");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
