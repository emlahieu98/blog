
 import {
     BrowserRouter,
     Link,
     Route,
     Switch,
     Redirect,
 } from "react-router-dom";
// Import layout
import Header from "./shared/components/layouts/Header";
// import Menu from "./shared/components/layout/Menu";
import Slider from "./shared/components/layouts/Slider";
// import Sidebar from "./shared/components/layout/Sidebar";
import Footer from "./shared/components/layouts/Footer";
// Import pages
 import Home from "./pages/Home";
// import Category from "./pages/Category";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Search from "./pages/Search";
// import Success from "./pages/Success";
 import NotFound from "./pages/NotFound";
 function App() {
     return (
         <BrowserRouter>
             <div className="App">
                 <Header />
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
