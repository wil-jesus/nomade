import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert,ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView>
    <View>
      <YoutubePlayer
        height={235}
        play={playing}
        videoId={"Si9RaP30_ts"}
        onChangeState={onStateChange}
      />
       <YoutubePlayer
        height={235}
        play={playing}
        videoId={"O9zO2OGAhoA"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={235}
        play={playing}
        videoId={"j3a5WROy8F8"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={235}
        play={playing}
        videoId={"4OjJ4qPzRxc"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={235}
        play={playing}
        videoId={"O9zO2OGAhoA"}
        onChangeState={onStateChange}
      />
      
    </View>
    </ScrollView>
  );
}

