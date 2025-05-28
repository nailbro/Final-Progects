import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ScrollToTop from '../ScroollToTop'


const Layout: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout