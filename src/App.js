import './App.css';
import Dashboard from './Component/Dashboard';
import Join from './Component/Join';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
function App() {
  return (
    <Router className="app">
      <Route path="/" exact component={Join} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default App;
