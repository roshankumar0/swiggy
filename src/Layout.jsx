import React from 'react'
import Footer from './Components/Footer'
import SwiggyApp from './Components/SwiggyApp'
import CorporateNavbar from './Components/CorporateNavbar'

const Layout = ({ children }) => {
    return (
        <div>
            <CorporateNavbar/>
            {children}
            <SwiggyApp />
            <Footer />
        </div>
    )
}

export default Layout
