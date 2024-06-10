import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity
} from "react-native";
import { backgroundColor, textColor, textFont } from "../../../constants";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Track, TrackStep } from "../../../models";

const TrackItem = ({ changeActiveSubTrack, activeSubTrack, track, style }: { changeActiveSubTrack: (subTrack: TrackStep, track: Track) => void, activeSubTrack: string, track: Track, style?: Object }) => {
    const [data, setData] = useState({} as Track);
    const [trackData, setTrackData] = useState({} as Track);

    const onPress = (item: TrackStep) => {
        changeActiveSubTrack(item, track);
    }

    useEffect(() => {
        setData(track);
        setTrackData(track);
    }, [track, activeSubTrack, changeActiveSubTrack]);

    return (
        <View style={[styles.container, style]}>
            {/* Track Item */}
            <View style={styles.trackContainer}>
                <View style={styles.leftZoneTrack}>
                    <Text style={styles.chapterTitle}>{data.chapterTitle}</Text>
                </View>
                <View style={styles.rightZoneTrack}>
                    <AntDesign name="book" size={24} color="black" />
                </View>
            </View>

            {/* List SubTrack */}
            <FlatList
                data={data.track_steps}
                keyExtractor={(item) => item._id}
                renderItem={({ item, index }) => (
                    activeSubTrack === item._id ? (
                        <View style={[styles.subTrackContainer, styles.active]}>
                            <View style={styles.leftZone}>
                                <Text style={styles.number}>{index + 1}</Text>
                            </View>
                            <View style={styles.middleZone}>
                                <Text style={styles.subTrackTitle}>{item.title}</Text>
                                <Text style={styles.duration}>Độ dài video khoảng - {item.duration} phút</Text>
                            </View>
                            <View style={styles.rightZone}>
                                <Ionicons name="play-circle-outline" size={24} color="black" />
                            </View>
                        </View>
                    ) : (
                        <TouchableOpacity onPress={() => onPress(item)}>
                            <View style={styles.subTrackContainer}>
                                <View style={styles.leftZone}>
                                    <Text style={styles.number}>{index + 1}</Text>
                                </View>
                                <View style={styles.middleZone}>
                                    <Text style={styles.subTrackTitle}>{item.title}</Text>
                                    <Text style={styles.duration}>Độ dài video khoảng - {item.duration} phút</Text>
                                </View>
                                <View style={styles.rightZone}>
                                    <Ionicons name="play-circle-outline" size={24} color="black" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    trackContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: textColor.borderColor
    },
    leftZoneTrack: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "80%"
    },
    rightZoneTrack: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "20%",
        alignSelf: "center"
    },
    leftZone: {
        display: "flex",
        width: "10%",
        paddingLeft: 10,
        alignSelf: "center"
    },
    middleZone: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "70%"
    },
    rightZone: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "20%",
        alignSelf: "center"
    },
    number: {
        width: "100%",
        color: textColor.titleTextColorBlack,
        fontSize: textFont.h3,
        fontWeight: "700",
    },
    chapterTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginVertical: 5,
        color: textColor.titleTextColorGray500,
        fontSize: textFont.h4,
        fontWeight: "500"
    },
    subTrackContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    subTrackTitle: {
        width: "100%",
        color: textColor.titleTextColorBlack,
        fontSize: textFont.h4,
        fontWeight: "600",
        lineHeight: 20
    },
    duration: {
        width: "100%",
        color: textColor.titleTextColorGray500,
        fontSize: textFont.h5,
        fontWeight: "400",
        marginTop: 5
    },
    active: {
        backgroundColor: backgroundColor.mainColor_1 // Example of active style
    }
});

export default TrackItem;
