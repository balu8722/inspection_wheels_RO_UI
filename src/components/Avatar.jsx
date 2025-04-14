// import React from 'react';
// import PropTypes from '../utils/propTypes';

// import classNames from 'classnames';

// import userImage from '../assets/img/users/100_4.jpg';

// const Avatar = ({
//   rounded,
//   circle,
//   src,
//   size,
//   tag: Tag,
//   className,
//   style,
//   ...restProps
// }) => {
//   const classes = classNames({ 'rounded-circle': circle, rounded }, className);
//   return (
//     <Tag
//       src={src}
//       style={{ width: size, height: size, ...style }}
//       className={classes}
//       {...restProps}
//     />
//   );
// };

// Avatar.propTypes = {
//   tag: PropTypes.component,
//   rounded: PropTypes.bool,
//   circle: PropTypes.bool,
//   size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   src: PropTypes.string,
//   style: PropTypes.object,
// };

// Avatar.defaultProps = {
//   tag: 'img',
//   rounded: false,
//   circle: true,
//   size: 40,
//   src: userImage,
//   style: {},
// };

// export default Avatar;


import React from "react";
import PropTypes from "../utils/propTypes";

import classNames from "classnames";
import userImage from "../assets/img/users/100_4.jpg";

const Avatar = ({
  rounded = false,
  circle = true,
  src = userImage,
  size = 40,
  tag: Tag = "img",
  className = "",
  style = {},
  ...restProps
}) => {
  const classes = classNames({ "rounded-circle": circle, rounded }, className);
  return (
    <div>
      <Tag
        src={src}
        style={{ width: size, height: size, ...style }}
        className={classes}
        {...restProps}
      />
      <span className="px-2 cursor-pointer mobile-fs-12">John</span>
    </div>
  );
};

Avatar.propTypes = {
  tag: PropTypes.component,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  style: PropTypes.object,
};

export default Avatar;
