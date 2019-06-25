import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import ListItem from "./ListItem";


const placeList = (props) => {


    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => {
               return   <ListItem key={info.item.key}
                                  placeName={info.item.value}
                                  onItemPressed={() => props.onItemSelected(info.item.key)}
                                  placeImage={info.item.image}
                />;
            }}
        />
        )

};


const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        marginTop: 5,
        backgroundColor: "#eee"
    },
    listContainer: {
        width: "100%"
    }
})

export default placeList;
