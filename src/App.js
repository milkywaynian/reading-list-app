import './App.css';
import ReadingList from './components/ReadingList';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Switch>
          <Route path="/reading-list" component={ReadingList} />
          <Route path="/add-book" component={AddBook} />
        </Switch>
      </div>
    </Router>    </div>
  );
}

export default App;
