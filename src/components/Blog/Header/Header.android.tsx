import React, { useContext, useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootContext } from "../../../context/providers/AppProvider";

const Header = ({ style }: { style?: Object }) => {
    const { state, dispatch } = useContext(RootContext);
    const navigation = useNavigation();
    const [user, setUser] = useState({
        _id: "",
        email: "",
        fullName: "",
        profileName: "",
        profile_image: "https://firebasestorage.googleapis.com/v0/b/unicourse-f4020.appspot.com/o/User%2Fdefault-avatar.png?alt=media&token=e9ad363c-de79-4457-9fa5-1864a911c686",
        role: "student",
    });

    // INIT DATA ZONE
    // Init user data
    useEffect(() => {
        setUser(state.auth.user);
    }, [state.auth.user]);

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <View style={styles.btn}>
                    <AntDesign
                        name="arrowleft"
                        size={25}
                        color="black"
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.userLayout}>
                <View style={styles.userGroupImage}>
                    <Image
                        style={styles.userImage}
                        resizeMode="cover"
                        source={{
                            uri: user.profile_image,
                        }}
                    />
                    <View style={styles.onlineIcon} />
                </View>
                <View style={styles.userTextInfo}>
                    <Text style={styles.title} numberOfLines={1}>
                        {user.fullName}
                    </Text>
                    <Text style={styles.textRole} numberOfLines={1}>
                        {user.role === "student" ? "Học viên" : "Giáo viên"}
                    </Text>
                </View>
            </View>
            <View style={styles.groupBtn}>
                <View style={styles.btn2}>
                    <AntDesign
                        name="search1"
                        size={25}
                        color="black"
                    />
                </View>
                <View style={styles.btn3}>
                    <Feather name="bell" size={25} color="white" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 80,
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    btn: {
        backgroundColor: "#EDEDED",
        borderRadius: 50,
        padding: 6
    },
    btn2: {
        backgroundColor: "#EDEDED",
        borderRadius: 50,
        padding: 6,
        marginRight: 6
    },
    btn3: {
        backgroundColor: "#578ff2",
        borderRadius: 50,
        padding: 6
    },
    userLayout: {
        height: 50,
        width: 180,
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 20
    },
    userGroupImage: {
        height: "auto",
        width: 50,
    },
    userImage: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 50,
        objectFit: "cover",
    },
    onlineIcon: {
        padding: 5,
        borderRadius: 50,
        position: "absolute",
        backgroundColor: "#4284F4",
        borderColor: "#fff",
        borderWidth: 3,
        bottom: 0,
        right: 0,
    },
    userTextInfo: {
        display: "flex",
        flexDirection: "column",
        width: 150,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        color: "#111",
    },
    textRole: {
        fontSize: 14,
        color: "#8d8a8a",
    },
    groupBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
    }
});

export default Header;
