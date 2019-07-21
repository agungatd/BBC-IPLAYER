import * as React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Channel } from "./Model";
import ChannelIcon from "./ChannelIcon";

const { width } = Dimensions.get("window");
const height = width / 1.4;
const D = width * 1.2;
const innerR = D / 2;
const styles = StyleSheet.create({
  container: {
    width,
    height
  }
});

interface CircularSelectionProps {
  channels: Channel[];
}

export default ({ channels }: CircularSelectionProps) => {
  const r = 30;
  const R = innerR + 2 * r;
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          ...StyleSheet.absoluteFillObject,
          borderRadius: R,
          width: R * 2,
          height: R * 2,
          left: -(R - width / 2)
        }}
        colors={["#353637", "#161819", "#161819"]}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject
        }}
      >
        {channels.map((_, key) => {
          return (
            <View
              {...{ key }}
              style={{
                position: "absolute",
                top: 0,
                left: 0
              }}
            >
              <ChannelIcon name={`${key + 1}`} radius={r} currentIndex={key} />
            </View>
          );
        })}
      </View>
    </View>
  );
};
