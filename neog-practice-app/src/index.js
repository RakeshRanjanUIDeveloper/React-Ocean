import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductListing from './practiceset8/ProductListing';
import Cart from './practiceset8/Cart';
import WishList from './practiceset8/WishList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './practiceset8/Error';

const appRouter = createBrowserRouter([
  {
      path: '/',
      element: <App />, 
      children :[
          {
              path: '',
              element: <ProductListing />
          },
          {
              path: "cart",
              element: <Cart />
          },
          {
              path: "WishList",
              element: <WishList />
          }
      ],
    errorElement :<Error />

  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
// root.render(
//   <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
