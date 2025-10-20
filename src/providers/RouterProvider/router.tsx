import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profil from "../../pages/Profil/Profil";

import TaskCreate from "../../pages/Task/Create/Create";
import TaskList from "../../pages/Task/List/List";
import TaskShow from "../../pages/Task/Show/Show";
import TaskEdit from "../../pages/Task/Edit/Edit";


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
        path :'/profil',
        element : <Profil />
    },

{
 path :'/task',
 children:[
{
    index:true,
    element:<TaskList />
},
{
    path:'create',
    element :<TaskCreate />
},
{
    path:':id/edit',
    element :<TaskEdit />
},
{
    path:':id/show',
    element :<TaskShow/>
},


 ]
}
])
const Router = () => {
    return  (
        <RouterProvider router ={router} />
    )
}

export default Router
