import React from 'react';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import Mainnavigation from './shared/components/Navigation/Mainnavigation';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

const App = () => {
  return(
    <Router>
      <Mainnavigation/>
      <main>
      <Switch>
      <Route exact path ="/" >
        <Users/>
      </Route>
       <Route exact path="/:userId/places">
         <UserPlaces/>
       </Route>
      <Route  path ="/places/new" >
        <NewPlace/>
      </Route>
      <Route path="/places/:placeId"><UpdatePlace/></Route>
      <Redirect exact to="/"/>
      </Switch>
      </main>
    </Router>
    
  );
}

export default App;
