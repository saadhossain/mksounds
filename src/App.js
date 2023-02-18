import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { MainRouter } from './Routers/MainRouter';

function App() {
  const routes = MainRouter
  return (
    <div>
      <RouterProvider router={routes}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
