import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import Add from './pages/Add';
import AllStudent from './pages/AllStudent';
import Delete from './pages/Delete';
import Home from './pages/Home';
import Search from './pages/Search';
import Update from './pages/Update';
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element = {<App/>}>
        <Route index element={<Home/>} />
        <Route path='add' element={<Add/>} />
        <Route path='update' element={<Update/>} />
        <Route path='search' element={<Search/>} />
        <Route path='delete' element={<Delete/>} />
        <Route path='allStudent' element={<AllStudent/>} />
      </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);

