import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from './home';

const LazyHome = React.lazy(() => import('./home').then());
//const LazySheepPage = React.lazy(() => import('./sheep'));


const App: React.FC = () => {
  return (
    <div >
      <div>HOWDY</div>
      <Router>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
        </ul>
      <React.Suspense fallback={<div>Loading</div>}>
        <Route path="/" exact component={LazyHome} />
        </React.Suspense>
      </Router>
    </div>
  );  
}

export default App;
