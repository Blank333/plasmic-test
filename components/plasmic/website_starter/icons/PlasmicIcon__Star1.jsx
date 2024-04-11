// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 0l2.351 4.764 5.257.764-3.804 3.708.898 5.236L8 12l-4.702 2.472.898-5.236L.392 5.528l5.257-.764L8 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star1Icon;
/* prettier-ignore-end */
