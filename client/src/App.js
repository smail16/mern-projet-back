
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import NavBar from './components/NavBar';




function App() {
  return (
    <div className="App">
    
     <Router>
      <NavBar/>
        <Routes>
          <Route path="/signup" exact element={ <SignUp/> } />
          <Route path="/signin" exact element={ <SignIn/> } />
          <Route path="/profile"  element={ <Profile/> } />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
