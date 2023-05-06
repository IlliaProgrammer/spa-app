
import Home from "./pages/home/Home.jsx";
import Posts from "./pages/posts/Posts.jsx";
import Photoes from "./pages/photoes/Photos.jsx";
import { HOME_ROUTE, POSTS_ROUTE, CONTACTS_ROUTE, PHOTOS_ROUTE, USER_ROUTE } from "./utils/consts";
import Contacts from "./pages/contacts/Contacts.jsx";
import User from "./pages/user/User.jsx";


export const RoutesArr = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
    {
        path: POSTS_ROUTE,
        Component: <Posts/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts/>
    },
    {
        path: PHOTOS_ROUTE,
        Component: <Photoes/>
    },
    {
        path: USER_ROUTE + '/:id',
        Component: <User />
    }
]
     
