import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const FileTextIcon = (props: SvgProps) => (
  <Svg width="25" height="24" fill="none" {...props}>
    <Path
      d="M14.5 2H6.5C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V8L14.5 2Z"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.5 2V8H20.5"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.5 13H8.5"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.5 17H8.5"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 9H9.5H8.5"
      stroke="#103B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(FileTextIcon);
