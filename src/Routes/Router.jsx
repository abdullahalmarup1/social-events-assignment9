import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/events/:id',
                element: <PrivateRoute> <EventDetails></EventDetails> </PrivateRoute>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ],
    }

])

export default router
