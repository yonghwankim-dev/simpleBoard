import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './css/sb-admin-2.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Board from './pages/board';
function App() {
  return (
    <>
    <Router>
      <Route path='/main' component={Nav} />  
      <Switch>        
        <Route path='/main/board' component={Board}/>
        <Route path='/login' component={Login} />
        <Route path='/signUp' component={SignUp}/>
        <Route render={()=>{<div className='error'>에러 페이지</div>}}/>
      </Switch>
    </Router>
    </>
  );

}

export default App;
