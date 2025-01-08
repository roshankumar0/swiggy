import React from 'react'
import CorporateNavbar from './CorporateNavbar'
import Footer from './Footer'
import About from './About'
import Bussiness from '../pages/bussiness'
import Delivering from '../pages/Delivering'
import Newsroom from './Newsroom'
import Investors from './Investors'
import Sustainability from './Sustainability'
import ContactUs from './ContactUs'

const MainNavScreen = () => {
  return (
    <Layout>
      <div>
        <About />
        <Bussiness />
        <Delivering />
        <Newsroom />
        <Investors />
        <Sustainability />
        <ContactUs />
      </div>
    </Layout>
  )
}

export default MainNavScreen
export const Layout = ({ children }) => {
  return (
    <>
      <CorporateNavbar />
      {children}
      <Footer />
    </>
  )
}
