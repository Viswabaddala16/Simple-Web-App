import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRouter';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/home"
                    element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }
          />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
