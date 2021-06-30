
 import {
     BrowserRouter,
     Route,
     Switch,
     Redirect,
 } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register"
import ForgetPassword from "./pages/Auth/ForgetPassword"
 import NotFound from "./pages/NotFound";
 function App() {
     return (
         <BrowserRouter>
             <div className="app">
                 <div class="main-content">
                     <Switch>
                         <Route path="/" exact component={Home} />
                         <Route path="/login" component={Login} />
                         <Route path="/register" component={Register} />
                         <Route path="/forgot-password" component={ForgetPassword} />
                         <Route path="/404" component={NotFound} />
                         <Route render={() => <Redirect to="/404" />} />
                     </Switch>
                 </div>
             </div>
         </BrowserRouter>
     );
}

export default App;
