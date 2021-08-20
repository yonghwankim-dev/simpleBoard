import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomeComponent from "../home/HomeComponent";
import NavComponent from "../NavComponent"
import SignUpComponent from "../signUp/SignUpComponent";
import LoginComponent from "../login/LoginComponent";
import ForgotPasswordComponent from "../login/ForgotPasswordComponent";
import BoardComponent from "../board/BoardComponent";
import BoardInsertComponent from "../board/BoardInsertComponent";
import BoardDetailComponent from "../board/BoardDetailComponent";
const AppRouter = () =>{
    return (
       <div>
           <BrowserRouter>
           <div>
               <Route path="*" component={NavComponent}/>
                <Switch>
                   <Route exact path="/" component={HomeComponent}/>
                   <Route path="/home" component={HomeComponent}/>
                   <Route path="/signUp" component={SignUpComponent}/>
                   <Route path="/login" component={LoginComponent}/>
                   <Route path="/forgotPassword" component={ForgotPasswordComponent}/>
                   <Route path="/board/insert" component={BoardInsertComponent}/>
                   <Route path="/board/detail" component={BoardDetailComponent}/>
                   <Route path="/board" component={BoardComponent}/>
                   
                   
                </Switch>
           </div>
           </BrowserRouter>
       </div> 
    );
}

export default AppRouter;