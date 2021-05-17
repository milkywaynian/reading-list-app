import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReadingList from './components/ReadingList';
import AddBook from './components/AddBook';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/reading-list" component={ReadingList} />
          <Route path="/add-book" component={AddBook} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
