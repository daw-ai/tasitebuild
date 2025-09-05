import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Privacy from './Privacy.jsx';
import TermsOfService from './TermsOfService.jsx';
import { Router, Route } from './Router.jsx';
import './index.css';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={TermsOfService} />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
