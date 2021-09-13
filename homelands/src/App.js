import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider} from './compontens/Login/AuthProvider';
import { Routes} from './Routes/routes';
import './App.css';
import { Navigation } from './compontens/Navigation/navigation';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Navigation/>
      <Routes/>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
