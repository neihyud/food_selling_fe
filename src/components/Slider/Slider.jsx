import './slider.css'
import Slider from 'react-slick'
import SliderItem from './SliderItem'

const SliderComponent = () => {

	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		dots: true,
		arrows: false,
	}

	const config = [
		{
			imgSrc: 'src/assets/images/menu2_img_1.jpg	',
			discount: 10,
			title: 'Different spice for a Different taste',
			subTitle: 'Fast Food & Restaurants',
			content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minimaet debitis ut distinctio optio qui voluptate natus.',
			alt: 'Food Image'
		},
		{
			imgSrc: 'src/assets/images/slider_img_1.png',
			discount: 20,
			title: 'Different spice for a Different taste',
			subTitle: 'Fast Food & Restaurants',
			content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minimaet debitis ut distinctio optio qui voluptate natus.',
			alt: 'Food Image'
		}
	]

	const renderSlider = config.map((data, index) => {
		return (
			<div key={index}>
				<SliderItem key={index} {...data} />
			</div>)
	})

	return (
		<section className="fp__banner" style={{ backgroundImage: `url(${'/src/assets/images/banner_bg.jpg'})` }}>
			<div className="fp__banner_overlay">
				<div className=''>
					<Slider {...settings}>
						{renderSlider}
					</Slider>
				</div>
			</div >
		</section >
	)
}

export default SliderComponent
