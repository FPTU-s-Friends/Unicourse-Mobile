import React, { useContext, useEffect, useRef, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Alert,
    PixelRatio,
    Button
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Tags, Blogs, Blog } from "../../types";
import { tagsData, blogsData } from "../../assets/data/blogData";
import { Video, ResizeMode } from 'expo-av';
import YoutubeIframe from 'react-native-youtube-iframe';

// IMPORT COMPONENTS
import LoadingOverlay from "../../components/Common/LoadingOverlay/LoadingOverlay";
import Header from "../../components/Learning/Header/Header";

// IMPORT LOGIC STATE
import { RootContext } from "../../context/providers/AppProvider";

// IMPORT API SERVICES
//...

// IMPORT MODEL
import { Course, Track, TrackStep } from "../../models";

//IMPORT FAKE DATA
import learningCourseData from '../../assets/data/learningCourseData.json';

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const LearningScreen = () => {
    const { state, dispatch } = useContext(RootContext);
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [data, setData] = useState({} as any);
    const [videoId, setVideoId] = useState("");

    const video = React.useRef(null as any);
    const [status, setStatus] = React.useState({} as any);

    // Behavior variables
    const [loading, setLoading] = useState(true);

    // API variables
    // const { fetchAllBlog } = useBlogService();

    useEffect(() => {
        initCourseData();
      }, []);

    // INIT DATA ZONE
    const initCourseData = async () => {
        setData({...learningCourseData?.data});
        setVideoId(`https://www.youtube.com/embed/${learningCourseData.data.tracks[0].track_steps[0].content_url}`);
        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header />
            {loading ? <LoadingOverlay visible={loading} /> : (
                <ScrollView style={styles.bodyContainer}>
                   <Text>Learning Screen</Text>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{ uri: "https://drive.google.com/uc?export=download&id=11jkmGh_yVEVcWGEfZjqOFos7USfK8Cy_" }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        onPlaybackStatusUpdate={setStatus}
                    />
                    <View style={styles.buttons}>
                        <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
                        <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
                    </View>

                    <YoutubeIframe
                        height={200}
                        play={true}
                        videoId={`2qCmRJz3NOE`} // Make sure this key exists in your JSON data
                    />
                </ScrollView>
            )}
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: Dimensions.get("window").height * 0.05,
        backgroundColor: "#fff"
    },
    bodyContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: "#f7f8fc"
    },
    video: {
        flex: 1,
        alignSelf: 'stretch',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
    },
    buttons: {
        margin: 16
    }
});

export default LearningScreen;
