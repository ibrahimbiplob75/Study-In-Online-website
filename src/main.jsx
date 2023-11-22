import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home.jsx';
import Login from "../src/Components/Login/Login.jsx"
import Register from "../src/Components/Register/Register.jsx"
import ContextProvider from './ContextProvider/ContextProvider.jsx';
import AddAssignment from './Components/Assignment/AddAssignment.jsx';
import Assignments from './Components/Assignment/Assignments/Assignments.jsx';
import Submission from './Components/Assignment/Submission/Submission.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/assignment",
        element: <AddAssignment></AddAssignment>,
      },
      {
        path: "/allAssignment",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/assignments"),
      },
      {
        path: "/submission",
        element: <Submission></Submission>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
