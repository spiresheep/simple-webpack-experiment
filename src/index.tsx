import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

const LazyHome = React.lazy(() => import('./home'));
const LazySheepPage = React.lazy(() => import('./sheep'));

const App: React.FC = () => {
  return (
    <div >
      <div>HOWDY</div>
      <Router>
      <React.Suspense fallback={<div>Loading</div>}>
        <Route exact path="/"  render={() => {return <LazyHome nextPageUrl='/sheep/'/>}}/>
        <Route path="/sheep/"component={LazySheepPage} />
        </React.Suspense>
      </Router>
    </div>
  );  
}

ReactDOM.render(<App/>, document.getElementById('root'));

