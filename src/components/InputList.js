import React from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';



const inputList = (props) => (

    <View style={styles.inputContainer}>
        <TextInput
            style={styles.placeInput}
            value={props.placeName}
            onChangeText={props.placeNameChangedHandler}
            placeHolder="An awesome place"/>

        <Button title="Add" style={styles.placeButton} onPress={props.add} />
    </View>
)


const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    placeInput: {
        width: "70%",
        borderWidth: 1
    },
    placeButton: {
        width: "30%"
    }
});

export default inputList;