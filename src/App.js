import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ReviewCard from './components/ReviewCard';
import './styles/Review.css';

const App = props => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          Logged Out
        </Route>
        <Route exact path='/:slug'>
          <ReviewCard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
