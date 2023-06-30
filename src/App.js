import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './redux/Store';
import Home from './components/Home'
import UserListing from './components/UserListing'
import AddUser from './components/AddUser'
import Update from './components/Update'
import Navbar from './components/Navbar';
import './App.css';




const router = createBrowserRouter([
  { path:'/', 
    element:<Navbar/>,
    children:[
      { index:true, element:<Home /> },
      { path:'user', element:<UserListing /> },
      { path:'user/add', element:<AddUser /> },
      { path:'user/edit/:inputId', element:<Update /> },
    ]
  },
 
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer className="toast-position" position="bottom-right"></ToastContainer>
    </Provider>
  );
}

export default App;
