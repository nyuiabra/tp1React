import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profil from "../../pages/Profil/Profil";


const router  = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path :'/login',
        element : <Login />
    },
    {
        path :'/profile',
        element : <Profil />
    }
])
const Router = () => {
    return  (
        <RouterProvider router ={router} />
    )
}

export default Router
