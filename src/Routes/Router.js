import { createBrowserRouter } from "react-router-dom"
// import AboutPage from "../components/About/About"
import AppLayout from "../Layout/Layout";
import Body from "../components/Body/Body";
import ContactUs from "../components/Contact/ContactUs"
import ParticularRest from "../components/ParticularResturant/ParticularResturant";
import Cart from "../components/Cart/Cart";
import { lazy, Suspense } from "react";
const AboutPage = lazy(() => import('../components/About/About'))
const Practice = lazy(() => import('../components/Practice'))
const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading...</h1>}><AboutPage /></Suspense>
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/resturant/:restId',
                element: <ParticularRest />
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: 'practice',
                element: <Suspense fallback={<h1>Loading Pracice page.... Please wait</h1>}><Practice/></Suspense>
            },
        ],
    },
]);
export default routes;