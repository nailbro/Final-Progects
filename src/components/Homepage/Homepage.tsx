import Hero from '../Hero/Hero'
import Specialtext from '../special/Specialtext'
import Trendingnow from './Trendingnow/Trendingnow'
import NewArivals from './NewArivals/NewArivals'
import PopularCategories from './PopularCategories/PopularCategories'
import SummerCollections from './SummerCollections/SummerCollections'
import Categories from '../categories/Categories'
import SaleUp from './SaleUp/SaleUp'
import Gtamobile from '../gta/Gtamobile'
import Services from './services/Services'
import Instagram from './instagram/Instagram'
import Fashion from './Fashion/Fashion'
import Brands from '../brands/Brands'
import Subscribe from '../Subscribe/Subscribe'

const Homepage = () => {
  return (
    <>
      <Specialtext/>
      <Hero/>
      <Categories/>
      <NewArivals/>
      <SummerCollections/>
      <PopularCategories/>
      <Trendingnow/>
      <SaleUp/>
      <Gtamobile/>
      <Services/>
      <Instagram/>
      <Fashion/>
      <Brands/>
      <Subscribe/>
    </>
  )
}

export default Homepage
