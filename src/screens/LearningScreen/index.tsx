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

// IMPORT COMPONENTS
import LoadingOverlay from "../../components/Common/LoadingOverlay/LoadingOverlay";
import Header from "../../components/Learning/Header/Header";
import MainScreen from "../../components/Learning/MainScreen/MainScreen";
import Info from "../../components/Learning/Info/Info";
import TrackItem from "../../components/Learning/TrackItem/TrackItem";

// IMPORT LOGIC STATE
import { RootContext } from "../../context/providers/AppProvider";

// IMPORT API SERVICES
//...

// IMPORT MODEL
import { Course, Track, TrackStep } from "../../models";

//IMPORT FAKE DATA
import learningCourseData from '../../assets/data/learningCourseData.json';
import { set } from "date-fns";

const LearningScreen = () => {
    const { state, dispatch } = useContext(RootContext);
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [data, setData] = useState({} as Course);
    const [currentSubTrack, setCurrentSubTrack] = useState({} as TrackStep);
    const [currentTrack, setCurrentTrack] = useState({} as Track);

    // Behavior variables
    const [loading, setLoading] = useState(true);

    // API variables
    // const { fetchAllBlog } = useBlogService();

    useEffect(() => {
        initCourseData();
      }, []);

    // INIT DATA ZONE
    const initCourseData = async () => {
        setData({...learningCourseData.data} as any);
        setCurrentSubTrack({...learningCourseData.data.tracks[0].track_steps[0]});
        setCurrentTrack(learningCourseData.data.tracks[0] as any);
        setLoading(false);
    };

    const handleSubTrackChange = (subTrack: TrackStep, track: Track) => {
        setCurrentSubTrack(subTrack);
        setCurrentTrack(track);
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header />
            {loading ? <LoadingOverlay visible={loading} /> : (
                <View style={styles.bodyContainer}>
                   <MainScreen subTrack={currentSubTrack} />
                   <Info style={{paddingBottom: 20}} lectureName={data.lecture.fullName} trackTitle={currentTrack.chapterTitle} subTrackTitle={currentSubTrack.title} />
                   <FlatList
                        style={styles.listContainer}
                        data={data.tracks}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TrackItem changeActiveSubTrack={handleSubTrackChange} activeSubTrack={currentSubTrack._id} track={item} />
                        )}
                        keyExtractor={(item) => item._id}
                    />
                </View>
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
        height: "100%",
        width: "100%"
    },
    listContainer: {}
});

export default LearningScreen;
