import withAuthRedirect from './hoc/withAuthRedirect';
import Home from './Home';

const ProtectedHome = withAuthRedirect(Home);

export default ProtectedHome;
