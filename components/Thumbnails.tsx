import * as React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";

import { Channel } from "./Model";
import Thumbnail from "./Thumbnail";
import Header from "./Header";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 0.8
  },
  content: {
    flex: 1
  }
});

interface ThumbnailsProps {
  channels: Channel[];
}

export default ({ channels }: ThumbnailsProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header />
      <View style={styles.content}>
        {channels.map((channel, key) => {
          return (
            <View
              style={{
                ...StyleSheet.absoluteFillObject
              }}
              {...{ key }}
            >
              <Thumbnail {...{ channel }} />
            </View>
          );
        })}
      </View>
    </View>
  );
};
