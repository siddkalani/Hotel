import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import Main from './components/layout/Main.jsx';
import hotelStore from './store/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      // {
      //   path: "/stay",
      //   element: <Stay />
      // }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={hotelStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
