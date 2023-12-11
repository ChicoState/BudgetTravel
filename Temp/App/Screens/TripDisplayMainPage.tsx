import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import {responseKeyValuePairs, start, cost1} from "./PlanTripScreen3";
const TripDisplayMainPage: React.FC<{ navigation: any }> = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion= {start}
        >
          {responseKeyValuePairs.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}
          <Polyline
            coordinates={responseKeyValuePairs.map((marker) => marker.coordinates)}
            strokeColor="#0000FF"
            strokeWidth={2}
          />
        </MapView>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Total Cost: {cost1} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default TripDisplayMainPage;

