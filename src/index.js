import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import emails from './emails';
import './inlined.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      {Object.keys(emails).map(key => (
        <Route key={key} path={`/${key}`} component={emails[key].email} />
      ))}
    </BrowserRouter>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
