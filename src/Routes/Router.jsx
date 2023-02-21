import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Contact from "./Contact";
import Index from "./Index";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Index/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            }
        ]
    },
])