import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../components/Homepage/Homepage";
import Auth from "../pages/Auth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Homepage/>
        },
        {
            path: 'Auth',
            element: <Auth/>
        }
    ]
    }
])