import React from 'react';
import { useLocation } from 'react-router-dom';
import PublicRoutes from '../config/router';
import PublicAuthorized from '../config/router-public';
import Footer from './footer';
import Header from './header';

const LoginRoutes = (props) => {
    return (
        <PublicAuthorized />
    )
}

const InlineRoutes = (props) => {
    return (
        <>
            <Header />
                <PublicRoutes />
            <Footer />
        </>
    )
}

const Layout = (props) => {
    const { pathname } = useLocation()
    return (
        <>
            {pathname !== '/login' ? <InlineRoutes {...props} /> : <LoginRoutes {...props} />}
        </>
    )
}

export default Layout