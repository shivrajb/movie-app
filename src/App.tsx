import './App.css'
import Navbar from './components/navbar';
import AllRoutes from './components/routes/AllRoutes';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Navbar></Navbar>
      <AllRoutes/>
    </MovieProvider>
  );
}

export default App
