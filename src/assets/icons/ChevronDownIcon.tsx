import React, { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const ChevronDownIcon = (props: SvgProps) => (
  <Svg width="21" height="21" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.91075 7.41083C5.23619 7.08539 5.76382 7.08539 6.08926 7.41083L10.5 11.8216L14.9107 7.41083C15.2362 7.08539 15.7638 7.08539 16.0893 7.41083C16.4147 7.73626 16.4147 8.2639 16.0893 8.58934L11.0893 13.5893C10.7638 13.9148 10.2362 13.9148 9.91075 13.5893L4.91075 8.58934C4.58531 8.2639 4.58531 7.73626 4.91075 7.41083Z"
      fill={props.color}
    />
  </Svg>
);

export default memo(ChevronDownIcon);
