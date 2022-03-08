import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
    return (
        <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0.579757C9.45184 0.742896 8.91776 0.938704 8.4 1.16492V18.0579C8.4 21.1251 10.9072 23.6116 14 23.6116C17.0619 23.6116 19.5498 21.1746 19.5993 18.1497L19.6 18.0579V1.16492C19.0822 0.938704 18.5482 0.742896 18 0.579757V17.9524C18 20.1878 16.2091 22 14 22C11.8163 22 10.0412 20.2292 10.0007 18.0293L10 17.9524V0.579757ZM16.5882 0.23877C15.7494 0.0819855 14.8843 0 14 0C13.1157 0 12.2506 0.0819853 11.4118 0.23877V17.9524C11.4118 19.3988 12.5706 20.5714 14 20.5714C15.4068 20.5714 16.5514 19.4358 16.5874 18.021L16.5882 17.9524V0.23877ZM5.41176 2.94286C5.91488 2.55152 6.44542 2.19376 7 1.87295V18.0579L7.00094 18.1727C7.06275 21.9537 10.1727 25 14 25C17.866 25 21 21.8919 21 18.0579V1.87295C21.5546 2.19376 22.0851 2.55152 22.5882 2.94286V18.094L22.5871 18.2347C22.5112 22.8684 18.6957 26.6015 14 26.6015C9.25685 26.6015 5.41176 22.7926 5.41176 18.094V2.94286ZM4 4.20203C1.52563 6.72711 0 10.1854 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 10.1854 26.4744 6.72711 24 4.20203V18.094C24 23.5649 19.5228 28 14 28C8.53238 28 4.08965 23.6532 4.00134 18.2578L4 18.094V4.20203Z"
                fill="white"
            />
        </Svg>
    );
}

export default SvgComponent;