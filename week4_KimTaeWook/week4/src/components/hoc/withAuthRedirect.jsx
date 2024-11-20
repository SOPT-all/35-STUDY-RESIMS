import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuthRedirect = (WrappedComponent) => {
  const WithAuthRedirect = (props) => {
    const navigate = useNavigate();

    const redirectPath = "/login";

    const isAuthenticated = Boolean(localStorage.getItem("token"));

    useEffect(() => {
      if (!isAuthenticated) {
        console.log(
          `인증이 유효하지 않습니다. ${redirectPath}으로 리다이렉트 됩니다`
        );
        navigate(redirectPath);
      }
    }, [isAuthenticated, navigate, redirectPath]);

    if (!isAuthenticated) {
      return null; // 인증되지 않으면 아무것도 렌더링하지 않음
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthRedirect.displayName = `WithAuthRedirect(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithAuthRedirect;
};

export default withAuthRedirect;
