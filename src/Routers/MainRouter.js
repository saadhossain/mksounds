import { createBrowserRouter } from "react-router-dom";
import ContactUsLayout from "../Layout/ContactUsLayout";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

export const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    },
    {
        path: '/contact',
        element: <ContactUsLayout/>,
        children: [
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])