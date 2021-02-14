import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavigationBar from './component/Navbar/NavigationBar'
import HomePage from './component/pages/HomePage'
import SettingsPage from './component/pages/SettingsPage';
import LandingPage from './component/pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage}/>  
          
          <Route path="/Home" component={HomePage}/>
          
          <Route path="/Settings" component={SettingsPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
