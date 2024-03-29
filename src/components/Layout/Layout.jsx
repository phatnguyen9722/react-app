import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Router from '../../routers/Router'

const Layout = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Router />
            </div>
            <Footer />
        </>
    )
}

export default Layout;
