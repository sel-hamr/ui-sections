import { SvgIconProps } from "@/lib/types";
import React from "react";

export function LogoIcon(props: SvgIconProps) {
  return (
    <svg
      width="17px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.24229 11.1591C7.69079 9.62498 9.4111 8.04803 11.0847 7.6369L21.5187 5.07371C23.1923 4.66258 24.1854 5.57295 23.7369 7.10709L20.9407 16.6716C20.4922 18.2057 18.7719 19.7827 17.0983 20.1938L6.66432 22.757C4.99072 23.1681 3.99758 22.2577 4.44609 20.7236L7.24229 11.1591Z"
        fill="#1E1E1E"
      />
      <path
        d="M3.05936 7.32467C3.50787 5.79054 5.22818 4.21359 6.90178 3.80245L17.3358 1.23927C19.0094 0.828138 20.0025 1.73851 19.554 3.27265L16.7578 12.8371C16.3093 14.3713 14.589 15.9482 12.9154 16.3594L2.48139 18.9225C0.807793 19.3337 -0.185344 18.4233 0.263164 16.8892L3.05936 7.32467Z"
        fill="black"
      />
    </svg>
  );
}
