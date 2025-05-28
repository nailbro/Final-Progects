import React from 'react'
import Specialtext from './special/Specialtext'
import Breadtop10 from './Breadtop10/Breadtop10'
import Subscribe from './Subscribe/Subscribe'
import Fashiontop10 from './Fashiontop10/Fashiontop10'
import Relatestpost from './Fashiontop10/Relatestpost'
import Comments from './Fashiontop10/Comments'
import Commentform from './Fashiontop10/Commentform'

const Fashionnews = () => {
  return (
    <>
     <Specialtext/>
     <Breadtop10/>
     <Fashiontop10/>
     <Relatestpost/>
     <Comments/>
     <Commentform/>
     <Subscribe/> 
    </>
  )
}

export default Fashionnews
