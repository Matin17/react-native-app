import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';


const listItem = (props) => (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem} >
        <Image style={styles.image} source={props.placeImage}/>
        <Text>{props.placeName}</Text>

    </View>
    </TouchableWithoutFeedback>
);


const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        marginTop: 5,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 8
    }
})

export default listItem;
