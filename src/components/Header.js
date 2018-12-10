//rafc
import React from "react";
import PropTypes from "prop-types";
const Header = props => {
  const { header } = props;
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
};
Header.defaultProps = {
  header: "My App"
};
Header.propTypes = {
  header: PropTypes.string.isRequired
};
export default Header;
