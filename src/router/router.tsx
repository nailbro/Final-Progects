import { FC } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Layout from '../components/Layout/Layout'
import Homepage from '../components/Homepage/Homepage'
import Singin from '../components/SingIn/Singin'
import SingUp from '../components/SingUp/SingUp'
import Megamenu from '../components/Megamenu/Megamenu'
import Clothergit from '../components/Clothergit'
import Fashioncit from '../components/Fashioncit'

import Components from '../components/Components'
import Account from '../components/Account'
import ErrorPage from '../pages/Error/ErrorPage'
import Fashionnews from '../components/Fashionnews'
import Detailtools from '../components/Detailtools'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const AnimatedRoutes: FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <motion.div {...pageTransition}>
                <Homepage />
                <Components/>
              </motion.div>
            }
          />
          <Route
          path='profile'
          element={
            <motion.div {...pageTransition}>
              <Account/>
            </motion.div>
          }
          />
          <Route
            path="megamenu"
            element={
              <motion.div {...pageTransition}>
                <Megamenu />
              </motion.div>
            }
          />
                 <Route
            path="fashionnews"
            element={
              <motion.div {...pageTransition}>
                <Fashionnews />
              </motion.div>
            }
          />
          <Route
            path="women/clother"
            element={
              <motion.div {...pageTransition}>
                <Clothergit />
              </motion.div>
            }
          />
          <Route
            path="fashionblock"
            element={
              <motion.div {...pageTransition}>
                <Fashioncit />
              </motion.div>
            }
          />
          <Route
          path='clother/detail'
          element={
            <motion.div {...pageTransition}>
              <Detailtools/>
            </motion.div>
          }
          />
        </Route>
          <Route
            path="*"
            element={
              <motion.div {...pageTransition}>
                <ErrorPage />
              </motion.div>
            }
          />
      </Routes>
    </AnimatePresence>
  )
}

const Router: FC = () => (
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
)

export default Router