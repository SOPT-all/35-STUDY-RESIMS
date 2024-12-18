import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import FilterList from './components/FilterList';
import LoginForm from './components/LoginForm';
import { members } from './assets/members';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterList items={members} />
      <LoginForm />
    </QueryClientProvider>
  );
};

export default App;
