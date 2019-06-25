import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
    let modalContent = null;
     if(props.selectedPlace){
         modalContent = (
             <View>
                 <Image style={styles.modalImage} source={props.selectedPlace.image}/>
                 <Text style={styles.modalText}>{props.selectedPlace.value}</Text>
             </View>
         )
     }
    return (
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null } animationType="slide">
        <View>
            {modalContent}
            <View style={styles.modalContainer}>
                <Button  onPress={props.onItemDeleted} title="Delete" color="red"/>
                <Button onPress={props.onModalClosed} title="Close"/>
            </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    modalImage: {
        width: "100%",
        height: 200,
    },
    modalText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
})

export default placeDetail;