import PropTypes from 'prop-types';

import Header from '../components/Header'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}


DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout