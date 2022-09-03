import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import DonatePage from './pages/donate';
import Books from './pages/books'
import Meet from './pages/meet'
import trade from './Trade/trade'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/donate' component={DonatePage} exact />
        <Route path='/App' component={Books} exact />
        <Route path='/meet' component={Meet} exact />
        <Route path='/trade' component={trade} exact />

        
      </Switch>
    </Router>
  );
}

export default App;
