import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
    return (
        <Svg width="30px" height="14px" viewBox="0 0 30 14" {...props}>
            <G
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
                opacity={0.459999979}
            >
                <G
                    id="uza-app-25"
                    transform="translate(-332.000000, -377.000000)"
                    fill="#B5DAFF"
                    fillRule="nonzero"
                >
                    <Path
                        d="M361.747933,383.392802 L355.595529,377.251611 C355.259407,376.91613 354.714447,376.91613 354.378326,377.251611 C354.042205,377.587093 354.042205,378.131016 354.378326,378.466498 L359.061727,383.140989 L332.860648,383.140989 C332.385325,383.140989 332,383.525581 332,384 C332,384.474419 332.385325,384.859011 332.860648,384.859011 L359.061727,384.859011 L354.378326,389.533502 C354.042205,389.868984 354.042205,390.412907 354.378326,390.748389 C354.714447,391.08387 355.259407,391.08387 355.595529,390.748389 L361.747933,384.607198 C361.909325,384.446183 362,384.227759 362,384 C362,383.772241 361.909325,383.553817 361.747933,383.392802 L361.747933,383.392802 Z"
                        id="Path"
                        transform="translate(347.000000, 384.000000) scale(-1, -1) rotate(-180.000000) translate(-347.000000, -384.000000)"
                    />
                </G>
            </G>
        </Svg>
    );
}

export default SvgComponent;
