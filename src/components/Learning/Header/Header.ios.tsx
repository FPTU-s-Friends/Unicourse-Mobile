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
    }
});

export default Header;
