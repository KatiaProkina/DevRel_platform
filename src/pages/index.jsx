import{
    createBrowserRouter,
} from 'react-router-dom'
import CatalogPage from './CatalogPage'
import CommunityPage from './CommunityPage'
import LoginPage from './LoginPage'
import MainPage from './MainPage'
import ProtectedRoutes from './ProtectedRoutes'

export const router = createBrowserRouter([
    {
        path: '/',
       children: [
        {
            index: true,
            element: <MainPage/>
        },
        {
            path: '/login',
            element: <LoginPage/>
            
        }

       ]
    },
    {
        path: '/catalog',
        element: <ProtectedRoutes/>,
        children: [
            {
            index: true,
            element: <CatalogPage/>

        },
        {
            path:':id',
            element: <CommunityPage/>
        }
        ]
        
    }
])