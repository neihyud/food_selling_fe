import BenefitItem from './BenefitItem'
import './whyChooseUs.css'
import { faBurger, faHatHard, faPercent } from '@fortawesome/free-solid-svg-icons'
import IntroductionSection from '../../Introduction/IntroductionSection'
import WrapperSection from '../../Wrapper/WrapperSection'

const WhyChooseUS = () => {
	const benefit = [
		{
			title: 'Fresh Healthy Foods',
			content: 'Experience the goodness of vibrant flavors and nutritious ingredients with every bite.',
			icon: faPercent
		},
		{
			title: 'Great Food',
			content: 'Discover culinary perfection with our great food. Savor each bite as we redefine your dining experience with flavors that inspire and satisfy.',
			icon: faBurger
		},
		{
			title: 'Taste Good',
			content: 'Delight your palate with flavors that truly satisfy. Experience the joy of food that tastes good, crafted with care and expertise.',
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
						title={'why choose us'}
						subTitle={'why choose us'}
						content={'Elevate your dining experience with our delectable dishes, meticulously prepared to tantalize your taste buds.'}
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
