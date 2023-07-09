import React, { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const ArrowRightIcon = (props: SvgProps) => (
  <Svg width="24" height="24" fill="none" {...props}>
    <Path
      d="M5 12H19"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 5L19 12L12 19"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(ArrowRightIcon);
