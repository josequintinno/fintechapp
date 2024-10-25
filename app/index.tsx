import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { Video } from 'expo-av';

const Page = () => {
    const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  return (
    <View style={styles.container}>
      { assets && (
        <Video
            isMuted
            isLooping
            shouldPlay
            source={{ uri: assets[0].uri }} 
            style={styles.video}/>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    video: {
        width: "100%",
        height: "100%",
        position: "absolute",
        objectFit: "cover"
    },
});

export default Page