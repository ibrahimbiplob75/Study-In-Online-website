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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import UpdateAssignment from './Components/Assignment/Assignments/UpdateAssignment.jsx';

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
        element: (
          <PrivateRoute>
            <AddAssignment></AddAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/allAssignment",
        element: (
          <PrivateRoute>
            <Assignments></Assignments>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/assignments"),
      },
      {
        path: "/submission",
        element: (
          <PrivateRoute>
            <Submission></Submission>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateAssignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignments/${params.id}`),
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
