// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.5 10a.5.5 0 001 0h-1zM4.354.646a.5.5 0 00-.708 0L.464 3.828a.5.5 0 10.708.708L4 1.707l2.828 2.829a.5.5 0 10.708-.708L4.354.646zM4.5 10V1h-1v9h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowIcon;
/* prettier-ignore-end */
