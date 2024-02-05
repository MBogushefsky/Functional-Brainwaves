import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export const VerticalBrainwaveDesign = () => {
  return (
    <View>
      <Svg height="200" width="200" style={{transform: [{rotate: '90deg'}]}}>
        <Path
          d="M100 10 C 190 40, 190 65, 100 95 S 10 150, 100 180"
          fill="none"
          stroke="black"
          strokeWidth="5"
        />
      </Svg>
    </View>
  );
};
