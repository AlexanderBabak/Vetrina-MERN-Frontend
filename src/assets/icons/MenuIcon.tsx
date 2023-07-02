import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const MenuIcon = (props: SvgProps) => (
  <Svg width="24" height="24" fill="none" {...props}>
    <Path
      d="M3 12H21"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 6H21"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 18H21"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(MenuIcon);
