import * as React from "react"
import type { CustomIconProps } from "@/types/props/CustomIconProps.ts"

export const GitfellaIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
  ({size = 16, className, ...props}, ref) => {
    return (
      <svg
        version="1.2"
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 -0.48299999999994725 798.483 798.483"
        fill="currentColor"
        className={className}
        {...props}
      >
        <style>
          {`.a{
          fill:none;
          stroke:currentColor;
          stroke-miterlimit:100;
          stroke-width:38
        }`}
        </style>
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="100"
          strokeWidth="38"
        />
        <path d="m204.5 110.4c-35.1 35.2-25.1 71.9-19.3 85.8-13.9-5.8-50.7-15.7-85.8 19.5-35.7 35.8-40.9 93.5 6.9 141.1 19.3 19.3 39.6 32.2 68.3 40.4 65.2 18.7 224.1 11.7 224.1 11.7 0 0 6.6-158.3-12.5-224-8.3-28.6-21.2-48.8-40.6-68.1-47.8-47.7-105.4-42.2-141.1-6.4z" />
        <path
          className="a"
          d="m588.8 692c31.2-31.3 22.3-63.9 17.1-76.3 12.4 5.2 45 13.9 76.2-17.4 31.8-31.8 36.4-83-6.1-125.4-17.2-17.1-35.1-28.6-60.6-35.9-58-16.6-199-10.2-199-10.2 0 0-6.1 140.6 10.8 198.9 7.4 25.5 18.9 43.4 36.1 60.6 42.5 42.3 93.7 37.5 125.5 5.7z"
        />
        <path d="m697.1 214.8c-35.2-35.1-71.9-25.1-85.9-19.2 5.9-14 15.7-50.7-19.5-85.8-35.8-35.7-93.4-41-141.1 6.8-19.3 19.4-32.1 39.6-40.3 68.3-18.7 65.2-11.7 224-11.7 224 0 0 158.3 6.7 223.9-12.3 28.7-8.3 48.9-21.3 68.1-40.6 47.7-47.8 42.3-105.5 6.5-141.2z" />
        <path
          className="a"
          d="m117.3 599.2c31.1 31.1 63.6 22.2 75.9 17-5.1 12.4-13.9 44.9 17.3 75.9 31.7 31.6 82.6 36.3 124.8-6 17.1-17.1 28.4-35.1 35.7-60.4 16.6-57.7 10.6-198.2 10.6-198.2 0 0-140.3-5.9-198.4 10.9-25.3 7.3-43.2 18.8-60.3 35.9-42.1 42.3-37.3 93.3-5.6 124.9z"
        />
        <path fillRule="evenodd" className="a" d="m418 384.5v28h-39v-28z" />
      </svg>
    )
  }
)