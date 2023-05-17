import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register"
import PhoneLogin from "../components/PhoneLogin/PhoneLogin";
import App from "../App";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/phone',
          element: <PhoneLogin></PhoneLogin>
        },
        {
          path:'/app',
          element:<App></App>
        },
        
        
      ],
    },
  ]);

  export default router;