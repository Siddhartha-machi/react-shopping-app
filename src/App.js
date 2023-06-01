import { Box } from '@mui/system';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutComponent from './Components/AboutPageComponents/AboutComponent';
import ContactPage from './Components/ContactPageComponents/ContactPage';
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
          element : <AboutComponent />
        },
        {
          path : 'contact-us',
          element : <ContactPage />
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
