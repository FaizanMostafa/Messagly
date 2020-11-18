import React from 'react';
import { Switch } from 'react-native-switch';
import { theme } from '../../Constants';

export default function CustomSwitch(props) {

  return (
    <Switch
      value={props.isEnabled}
      onValueChange={props.toggleSwitch}
      disabled={false}
      circleSize={22}
      barHeight={24}
      circleBorderWidth={0.5}
      backgroundActive={theme.colors.primary}
      backgroundInactive={theme.colors.dimGray}
      changeValueImmediately={true}
      innerCircleStyle={{borderColor: props.isEnabled ? theme.colors.primary : theme.colors.dimGray}}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2.2}
      switchRightPx={2.2}
      switchWidthMultiplier={2}
      switchBorderRadius={30}
    />
  )
}
