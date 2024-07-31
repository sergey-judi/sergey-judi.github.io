import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import "./assets/sass/style.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "*",
                element: <Error />
            }
        ]
    }
])

export default function App() {
    return <RouterProvider router={router}/>;
};
