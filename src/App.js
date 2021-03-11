import './App.css';
import Navbar from './components/Navbar/Navbar';
import Logo from './containers/logo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Signup from './components/Navbar/Signup';
import Login from './components/Navbar/Login';
import Header from './components/Header';


function App() {
  
  return (
    <Router>
    <div className="App">
      <Header />
       <Logo />
       <Navbar />
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/about-us' component={About} />
       <Route path='/login' component={Login} />
       <Route path='/signup' component={Signup} />
       </Switch>
       
    </div>
    </Router>
  );
 
}

export default App;
