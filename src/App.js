import { Box } from '@mui/system';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { HomeComponent } from './Components/HomePageComponents/HomeComponent';
import BaseAppComponent from './Components/MainComponents/BaseAppComponent';

const routes = createBrowserRouter([
  {
    path : '/',
    element : <BaseAppComponent />,
    children : [
        {
          path : '/',
          element : <HomeComponent />
        },
        {
          path : 'about-us',
          element : <Box>About Us</Box>
        },
        {
          path : 'contact-us',
          element : <Box>Contact Us</Box>
        }
    ]
  },
  
])


function App() {

  
  return (
      <RouterProvider 
        router={routes} 
      />
  )
  
  
}

export default App;
