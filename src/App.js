import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';
import CountryDetails from './components/Home/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/name/:countryName">
          <CountryDetails></CountryDetails>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
