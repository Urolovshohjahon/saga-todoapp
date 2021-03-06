import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
    return (
        <Svg width={17} height={17} viewBox="0 0 17 17" fill="none" {...props}>
            <Path
                d="M14.375 8.38462C14.0298 8.38462 13.75 8.66014 13.75 9.00002V15.1538C13.75 15.4937 13.4702 15.7692 13.125 15.7692H1.875C1.52981 15.7692 1.24999 15.4937 1.24999 15.1538V2.84616C1.24999 2.50628 1.52981 2.23076 1.875 2.23076H9.375C9.72019 2.23076 10 1.95524 10 1.61536C10 1.27548 9.72019 1 9.375 1H1.875C0.839465 1 0 1.82655 0 2.84616V15.1538C0 16.1734 0.839465 17 1.875 17H13.125C14.1605 17 15 16.1734 15 15.1538V8.99998C15 8.66014 14.7202 8.38462 14.375 8.38462Z"
                fill="black"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7378 1.85972e-05C15.3378 -5.065e-05 15.9133 0.238298 16.3376 0.662645C17.2209 1.54607 17.2208 2.97831 16.3374 3.86162L8.55387 11.6451C8.48902 11.71 8.4099 11.759 8.32282 11.7881L4.77735 12.9699C4.71711 12.9897 4.65406 12.9999 4.59062 13C4.52733 12.9999 4.46442 12.9897 4.40435 12.9697C4.09471 12.8666 3.9273 12.532 4.03045 12.2224L5.21226 8.6769C5.24138 8.58999 5.29009 8.51091 5.35467 8.44586L13.1382 0.663026C13.5613 0.237052 14.1374 -0.00171258 14.7378 1.85972e-05ZM7.81995 10.7085L15.5018 3.02664C15.7049 2.8243 15.8187 2.54925 15.8179 2.2626C15.8171 1.97748 15.7036 1.70426 15.5022 1.50244C15.0805 1.07996 14.3962 1.07927 13.9737 1.50092L6.28889 9.18271L5.52484 11.4749L7.81995 10.7085Z"
                fill="black"
            />
        </Svg>
    );
}

export default SvgComponent;
