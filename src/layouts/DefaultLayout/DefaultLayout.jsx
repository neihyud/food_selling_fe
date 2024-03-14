import PropTypes from "prop-types";

import Header from "../components/Header";
import SideBarCart from "../../components/Cart/SidebarCart";
import { useSelector } from "react-redux";

const DefaultLayout = ({ children }) => {
  const { isOpenCartCheckout } = useSelector((state) => state.homeReducer);
  
  const getSideBarCart = () => {
    if (!isOpenCartCheckout) {
      return null;
    }

    return <SideBarCart />;
  };

  return (
    <>
      <Header />
      {getSideBarCart()}

      <p style={{ padding: "40px 0" }}></p>
      {children}
      <p style={{ padding: "40px 0" }}></p>

    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
