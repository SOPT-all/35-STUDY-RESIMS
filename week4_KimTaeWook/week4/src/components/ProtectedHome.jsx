import withAuthRedirect from "./hoc/withAuthRedirect";
import Home from './home';

const ProtectedHome = withAuthRedirect(Home);

export default ProtectedHome;