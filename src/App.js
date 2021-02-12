import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavigationBar from './component/Navbar/NavigationBar'
import HomePage from './component/pages/HomePage'
import SettingsPage from './component/pages/SettingsPage';
import LandingPage from './component/pages/LandingPage';
// import ExtrasPages from './component/pages/ExtrasPages'

// practice 
// import Nav from './practiceComponents/Nav'
// import SISUFormArea from './practiceComponents/SISUFormArea';
// import UserInfo from './practiceComponents/UserInfo';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <NavigationBar/> */}
        <Switch>
          <Route path="/" exact component={LandingPage}/>  
          
          <Route path="/Home" component={HomePage}/>
          
          <Route path="/Settings" component={SettingsPage}/>
        </Switch>

        {/* <ExtrasPages /> */}

          {/* 
          Paractice 
          <Nav />
          <SISUFormArea />
          <UserInfo /> */}
      </div>
    </Router>
  );
}

export default App;
