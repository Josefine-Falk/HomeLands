import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider} from './compontens/Login/AuthProvider';
import { Routes} from './Routes/routes';
import './App.css';
import { Navigation } from './compontens/Navigation/navigation';
import { Footer } from './compontens/footer/footer';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Navigation/>
      <Routes/>
    </Router>
    <Footer/>
    </AuthProvider>
    </>
  );
}

export default App;
