
 import {
     BrowserRouter,
     Route,
     Switch,
     Redirect,
 } from "react-router-dom";
// Import layout
import Header from "./shared/components/layouts/Header";
import Menu from "./shared/components/layouts/Menu";
import Slider from "./shared/components/layouts/Slider";
import Footer from "./shared/components/layouts/Footer";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register"
import ForgetPassword from "./pages/Auth/ForgetPassword"
 import NotFound from "./pages/NotFound";
 function App() {
     return (
         <BrowserRouter>
             <div className="app">
                 <Route path="/login" component={Login} />
                 <Route path="/register" component={Register} />
                 <Route path="/forgot-password" component={ForgetPassword} />
                 <Header />
                 <Menu />
                 <div class="main-content">
                     <Slider />
                     <Switch>
                         <Route path="/" exact component={Home} />
                         <Route path="/404" component={NotFound} />
                         <Route render={() => <Redirect to="/404" />} />
                     </Switch>
                 </div>
                 <Footer />
             </div>
         </BrowserRouter>
     );
}

export default App;
