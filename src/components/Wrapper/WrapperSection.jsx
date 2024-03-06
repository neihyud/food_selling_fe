import PropTypes from 'prop-types';

const WrapperSection = ({ children }) => {
  return (
    <div style={{ padding: "100px 0 0" }}>
      {children}
    </div>
  )
}

WrapperSection.propTypes = {
  children: PropTypes.node
}

export default WrapperSection