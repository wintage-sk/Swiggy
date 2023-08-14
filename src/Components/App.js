 import React,{useState,useEffect,lazy,Suspense} from "react";
 import Footer from "./Footer";
 import About from "./About";
import Body from "./Body";
import { BrowserRouter,Routes ,Route,} from "react-router-dom";
import Error from "./Error";
import RestaurentMenu from "./RestaurentMenu";
 import userContext from "./userContext";
import { Provider } from "react-redux";
  import appStore from "../utils/appStore";
  
 import Cart from "./Cart";

  import LoginPage from "./LoginPage";
import Header from "./Header";




 const Grocery = lazy(() => import("./Grocery"));
 const Help=lazy(() => import("./Help"));
 
const AppLayout = () => {

  const [userName, setUserName] = useState();

 
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Satheesh Kumar",
    };
    setUserName(data.name);
  }, []);
 
  return (
    <Provider store={appStore}>
    <div>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <BrowserRouter>
        <div className="">
        <Header/>
      <Routes>
       <Route path="/about" element ={<About/>}/>
       <Route path="/" element ={<Body/>}/>
       <Route path="/grocery" element ={(
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        )}/>
       <Route path="/help" element ={(
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Help />
          </Suspense>
        )}/>
       <Route path="/cart" element ={<Cart/>}/>
      <Route path = "/restaurant/:resID"
        element ={ <RestaurentMenu />}/>
        <Route path = "/loginPage"
        element ={ <LoginPage />}/>
       <Route path="*" errorElement={<Error />}/>
        
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
       </userContext.Provider>
       </div>
    </Provider>

  );
};

export default AppLayout;

/* <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Footer />
        </div>
       </userContext.Provider>
    </Provider> */