import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

const Pokeball = () => {
  return (
    <Svg width={24} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.857 16a2.857 2.857 0 1 1-5.714 0 2.857 2.857 0 0 1 5.714 0Z"
        fill="#212121"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 28c6.045 0 11.047-4.47 11.878-10.286H16.85a5.145 5.145 0 0 1-9.7 0H.122C.953 23.53 5.955 28 12 28ZM7.15 14.286H.122C.953 8.47 5.955 4 12 4s11.047 4.47 11.878 10.286H16.85a5.145 5.145 0 0 0-9.7 0ZM14.857 16a2.857 2.857 0 1 1-5.714 0 2.857 2.857 0 0 1 5.714 0Z"
        fill="#212121"
      />
    </Svg>
  );
};

export default Pokeball;
