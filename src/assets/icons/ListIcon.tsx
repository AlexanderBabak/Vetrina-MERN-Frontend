import React, { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const ListIcon = (props: SvgProps) => (
  <Svg width="25" height="24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6C7.5 5.44772 7.94772 5 8.5 5H21.5C22.0523 5 22.5 5.44772 22.5 6C22.5 6.55228 22.0523 7 21.5 7H8.5C7.94772 7 7.5 6.55228 7.5 6Z"
      fill="#103B66"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 12C7.5 11.4477 7.94772 11 8.5 11H21.5C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13H8.5C7.94772 13 7.5 12.5523 7.5 12Z"
      fill="#103B66"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 18C7.5 17.4477 7.94772 17 8.5 17H21.5C22.0523 17 22.5 17.4477 22.5 18C22.5 18.5523 22.0523 19 21.5 19H8.5C7.94772 19 7.5 18.5523 7.5 18Z"
      fill="#103B66"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 6C2.5 5.44772 2.94772 5 3.5 5H3.51C4.06228 5 4.51 5.44772 4.51 6C4.51 6.55228 4.06228 7 3.51 7H3.5C2.94772 7 2.5 6.55228 2.5 6Z"
      fill="#103B66"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 12C2.5 11.4477 2.94772 11 3.5 11H3.51C4.06228 11 4.51 11.4477 4.51 12C4.51 12.5523 4.06228 13 3.51 13H3.5C2.94772 13 2.5 12.5523 2.5 12Z"
      fill="#103B66"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 18C2.5 17.4477 2.94772 17 3.5 17H3.51C4.06228 17 4.51 17.4477 4.51 18C4.51 18.5523 4.06228 19 3.51 19H3.5C2.94772 19 2.5 18.5523 2.5 18Z"
      fill="#103B66"
    />
  </Svg>
);

export default memo(ListIcon);
