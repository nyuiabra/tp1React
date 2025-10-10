import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/login";


const router  = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path :'/login',
        element : <Login />
    }
])
const Router = () => {
    return  (
        <RouterProvider router ={router} />
    )
}

export default Router