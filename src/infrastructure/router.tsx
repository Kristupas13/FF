import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "../pages/game/game";
import Control from "../pages/control/control";
import React from "react";

const router = createBrowserRouter([
    { path: "/", element: <Game/> },
    { path: '/controls', element: <Control/> }
])

export default function Routing() {
    return (
        <RouterProvider router={router}/>
    )
}