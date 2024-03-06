import Slider from "../../components/Slider"
import Header from "../../layouts/components/Header/Header"
import WhyChooseUs from '../../components/About/WhyChooseUs'
import FoodMenu from "../../components/FoodMenu"

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <WhyChooseUs />
      <FoodMenu />
    </>
  )
}

export default Home