import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const EyeIcon = (props: SvgProps) => (
  <Svg width="25" height="24" fill="none" {...props}>
    <Path
      d="M1.5 12C1.5 12 5.5 4 12.5 4C19.5 4 23.5 12 23.5 12C23.5 12 19.5 20 12.5 20C5.5 20 1.5 12 1.5 12Z"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(EyeIcon);
