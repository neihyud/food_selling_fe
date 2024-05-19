import PropTypes from 'prop-types'

const WrapperContent = (props) => {
	const { children, title, subTitle, action, isCloseHeader = false, isDisableScroll = false } = props

	return (
		<section className="section wrapper-content">
			{title && <div className="section-header">
				<h1>{title}</h1>
			</div>
			}

			{!title && <p style={{ paddingTop: '50px' }}></p>}

			<div className="card card-primary">
				{!isCloseHeader && <div className="card-header">
					<h4>{subTitle}</h4>
					<div className="card-header-action" >
						{action}
					</div>
				</div>}
				<div className={`card-body ${isDisableScroll && 'disable-scroll'}`}>
					{children}
				</div>
			</div>
		</section>
	)
}

WrapperContent.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	action: PropTypes.node,
	isCloseHeader: PropTypes.bool,
	isDisableScroll: PropTypes.bool
}

export default WrapperContent
