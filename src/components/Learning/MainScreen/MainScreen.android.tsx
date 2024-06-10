import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions
} from "react-native";
import { TrackStep } from "../../../models";
import { Video, ResizeMode } from 'expo-av';
import YoutubeIframe from 'react-native-youtube-iframe';

const MainScreen = ({ subTrack, style }: { subTrack: TrackStep, style?: Object }) => {
    const [currentSubTrack, setCurrentSubTrack] = useState({} as TrackStep);
    const [videoUrl, setVideoUrl] = useState("");
    const video = React.useRef(null as any);
    const [status, setStatus] = React.useState({} as any);

    useEffect(() => {
        setCurrentSubTrack(subTrack);
        switch (subTrack.platform) {
            case "youtube":
                setVideoUrl(subTrack.content_url);
                break;
            case "vimeo":
                break;
            case "google-drive":
                setVideoUrl(`https://drive.google.com/uc?export=download&id=${subTrack.content_url}`);
                break;
            default:
                setVideoUrl(subTrack.content_url);
                break;
        }
    }, [subTrack]);

    return (
        <View style={[styles.container, style]}>
            {subTrack.platform === "youtube" ? (
                <YoutubeIframe
                    height={Dimensions.get('screen').height}
                    width={Dimensions.get('window').width}
                    play={true}
                    videoId={videoUrl}
                />
            ) : (
                <Video
                    ref={video}
                    style={styles.video}
                    source={{ uri: videoUrl }}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    onPlaybackStatusUpdate={setStatus}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3.3,
        alignItems: "center"
    },
    video: {
        flex: 1,
        alignSelf: 'stretch',
        width: "100%",
        height: "100%",
    }
});

export default MainScreen;
