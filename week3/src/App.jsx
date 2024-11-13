import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Parent from './Practice1/Parent';
import Window from './practice2/Window';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/practice1",
      element: <Parent />,
    },
    {
      path: "/practice2",
      element: <Window />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;