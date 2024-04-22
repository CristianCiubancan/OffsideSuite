import React from "react";

export function ArrowLongLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-slot="icon"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
}

export default ArrowLongLeftIcon;
