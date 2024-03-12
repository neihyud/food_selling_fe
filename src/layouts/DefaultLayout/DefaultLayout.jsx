import PropTypes from 'prop-types';

import Header from '../components/Header'
// import SideBarCart from '../../components/Cart/SidebarCart';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      {/*  to do
          <SideBarCart /> 
      */}
      <p style={{ padding: "40px 0" }}></p>
      {children}
    </>
  )
}


DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout