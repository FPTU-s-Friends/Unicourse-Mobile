import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Text
} from "react-native";
import { textColor, textFont } from "../../../constants";
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Info = ({ lectureName, trackTitle, subTrackTitle, style }: { lectureName: string, trackTitle: string, subTrackTitle: string, style?: Object }) => {
    const [lecture, setLecture] = useState("");
    const [trackTitleText, setTrackTitleText] = useState("");
    const [subTrackTitleText, setSubTrackTitleText] = useState("");

    useEffect(() => {
        setLecture(lectureName);
        setTrackTitleText(trackTitle);
        setSubTrackTitleText(subTrackTitle);
    }, [trackTitle, subTrackTitle, lectureName]);
    
    return (
        <View style={[styles.container, style]}>

            <View style={styles.bodyContainer}>
                {/* LEFT ZONE */}
                <View style={styles.leftZone}>
                    {/* Chapter Title */}
                    <Text style={styles.trackTitle}>{trackTitleText}</Text>
                    {/* Sub Chapter Title */}
                    <View style={styles.subTrackTitleContainer}>
                        <View style={styles.btn}>
                            <SimpleLineIcons name="social-youtube" size={20} color="black" />
                        </View>
                        <Text style={styles.subTrackTitle}>{subTrackTitleText}</Text>
                    </View>
                    {/* Lecture Name */}
                    <View style={styles.lectureNameContainer}>
                        <View style={styles.btn}>
                            <FontAwesome name="user" size={20} color="black" />
                        </View>
                        <Text style={styles.lectureName}>{lecture}</Text>
                    </View>
                </View>

                {/* RIGHT ZONE */}
                <View style={styles.rightZone}>
                    <View style={styles.bookmark}>
                        <Feather
                            name="bookmark"
                            size={20}
                            color="black"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        alignItems: "center"
    },
    bodyContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%"
    },
    leftZone: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "80%"
    },
    rightZone: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "20%"
    },
    trackTitle: {
        width: "100%",
        color: textColor.titleTextColorBlack,
        fontSize: textFont.h4,
        fontWeight: "700",
    },
    subTrackTitleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginVertical: 5
    },
    btn: {
        marginRight: 10
    },
    subTrackTitle: {
        width: "100%",
        color: textColor.normalText,
        fontSize: textFont.titleNormal,
        fontWeight: "500",
    },
    lectureNameContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    lectureName: {
        width: "100%",
        color: textColor.normalText,
        fontSize: textFont.titleNormal,
        fontWeight: "500",
    },
    bookmark: {
    }
});

export default Info;
