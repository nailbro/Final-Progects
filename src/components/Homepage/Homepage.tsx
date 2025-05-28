import Hero from '../Hero/Hero'
import Specialtext from '../special/Specialtext'
import Trendingnow from './Trendingnow/Trendingnow'
import NewArivals from './NewArivals/NewArivals'
import PopularCategories from './PopularCategories/PopularCategories'
import SummerCollections from './SummerCollections/SummerCollections'
import Categories from '../categories/Categories'
import SaleUp from './SaleUp/SaleUp'

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
    </>
  )
}

export default Homepage
