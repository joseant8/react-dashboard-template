import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import DashBoardPage from './pages/DashBoardPage';
import LifeCycle from './components/LifeCycle';

// TODO Pasarlo a SessionStorage.
// Variable para controlar las rutas de la app
let loggedIn = true;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          { loggedIn ?
            <Redirect from='/' to='/dashboard'></Redirect>
            :
            <Redirect from='/' to='/login'></Redirect>
          }
        </Route>
        <Route exact path='/login' component={LoginPage}>

        </Route>
        <Route exact path='/dashboard'>
          { loggedIn ?
            <DashBoardPage></DashBoardPage>
            :
            <Redirect from='/dashboard' to='/login'></Redirect>
          }
        </Route>
        <Route exact path='/lifecycle' component={LifeCycle} />
      </Switch>
    </Router>
  )
}

export default App;
