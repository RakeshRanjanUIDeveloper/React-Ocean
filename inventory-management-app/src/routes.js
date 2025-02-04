import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import ProductList from "./pages/ProductList";
import Error from "./pages/Error";

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'',
                element:<Dashboard />
            },
            {
                path:'Departments',
                element: <Departments />
            },
            {
                path:'Products',
                element:<ProductList />
            }
        ],
        errorElement: <Error />
    }
])

export default appRouter

