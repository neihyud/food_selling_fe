import BenefitItem from './BenefitItem'
import './whyChooseUs.css'
import { faBurger, faHatHard, faPercent } from '@fortawesome/free-solid-svg-icons'
import IntroductionSection from '../../Introduction/IntroductionSection'
import WrapperSection from '../../Wrapper/WrapperSection'

const WhyChooseUS = () => {
  const benefit = [
    {
      title: "Fresh Healthy Foods",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis expedita.",
      icon: faPercent
    },
    {
      title: "Fresh Healthy Foods",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis expedita.",
      icon: faBurger
    },
    {
      title: "Fresh Healthy Foods",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, debitis expedita.",
      icon: faHatHard
    }
  ]

  const renderBenefit = () => {
    return benefit.map((item, index) => {
      return <BenefitItem key={index} {...item} />
    })
  }

  return (
    <WrapperSection>
      <section className="fp__why_choose mt_100 xs_mt_70">
        <div className="container">
          <IntroductionSection
            title={"why choose us"}
            subTitle={"why choose us"}
            content={"Objectively pontificate quality models before intuitive information. Dramatically recaptiualize multifunctional materials."}
          />

          <div className='row'>
            {renderBenefit()}
          </div>
        </div>
      </section>
    </WrapperSection>
  )
}

export default WhyChooseUS