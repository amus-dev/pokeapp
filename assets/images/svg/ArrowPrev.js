import React from "react";
import Svg, { Path } from "react-native-svg";

const Pokeball = ({ fill }) => {
  return (
    <Svg width={8} height={16} fill={fill}>
      <Path
        d="m7.228 14.81.619-.62a.375.375 0 0 0 0-.53L2.2 8l5.647-5.66a.375.375 0 0 0 0-.53l-.619-.62a.375.375 0 0 0-.53 0L.153 7.736a.375.375 0 0 0 0 .53l6.545 6.544a.375.375 0 0 0 .53 0Z"
        fill="#212121"
      />
    </Svg>
  );
};

export default Pokeball;
