import React from 'react';
import { StyleSheet, View} from 'react-native';
import PlacesList from "./src/components/PlacesList";
import InputList from "./src/components/InputList";
import PlaceDetail from "./src/components/PlaceDetail";
import { connect } from "react-redux";
import {addPlace, deletePlace, selectPlace, deselectPlace} from "./src/store/actions/places";

class App extends React.Component {




    placeSubmitHandler = (placeName) => {
      if(this.state.placeName.trim() === ""){
        return;
      }
        this.props.onAddPlace(placeName);
    };

    onItemSelected = (index) => {
        this.props.onSelectPlace(index)

    }

    onItemDeleted = () => {
        this.props.onDeletePlace();
    }

    onModalClosed = () => {
        this.props.onDeselectPlace();
    }
    render() {

        return (
            <View style={styles.container}>
                <PlaceDetail selectedPlace={this.props.selectedPlace}
                             onItemDeleted={this.onItemDeleted}
                             onModalClosed={this.onModalClosed } />
               <InputList
                          placeNameChangedHandler={this.placeNameChangedHandler}
                          add={this.placeSubmitHandler}

               />
                <PlacesList style={styles.listContainer} places={this.props.places}
                            onItemSelected={this.onItemSelected}

                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 30,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: "flex-start"

        }

    });

const mapStateToProps = state => {
    return {
      places: state.places.places.places,
      selectedPlace: state.places.selectedPlace
    };
}

const mapDispatchProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
}

export default connect( mapStateToProps, mapDispatchProps)(App)