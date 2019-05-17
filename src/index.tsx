import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LazyHome = React.lazy(() => import('./home'));
const LazySheepPage = React.lazy(() => import('./sheep'));


const App: React.FC = () => {
  return (
    <div >
      <div>HOWDY</div>
      <Router>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/sheep/"> Sheep </Link>
          </li>
        </ul>
      <React.Suspense fallback={<div>Loading</div>}>
        <Route exact path="/"  component={LazyHome} />
        <Route path="/sheep/"component={LazySheepPage} />
        </React.Suspense>
      </Router>
    </div>
  );  
}


ReactDOM.render(<App/>, document.getElementById('root'));

