import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const TripDisplayMainPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const markers = [
    {
      id: 1,
      title: 'Hiking',
      coordinates: { latitude: 37.8651, longitude: -119.5383 },
    },
    {
      id: 2,
      title: 'Museum Visit',
      coordinates: { latitude: 37.7749, longitude: -122.4194 },
    },
    {
      id: 3,
      title: 'Art Gallery',
      coordinates: { latitude: 34.0522, longitude: -118.2437 },
    },
    {
      id: 4,
      title: 'Amusement Park',
      coordinates: { latitude: 33.8444, longitude: -117.9986 },
    },
    {
      id: 5,
      title: 'Sightseeing',
      coordinates: { latitude: 38.5816, longitude: -121.4944 },
    },
    {
      id: 6,
      title: 'Beach Day',
      coordinates: { latitude: 33.6695, longitude: -118.1895 },
    },
    {
      id: 7,
      title: 'Concert',
      coordinates: { latitude: 34.0522, longitude: -118.2437 },
    },
    {
      id: 8,
      title: 'Shopping',
      coordinates: { latitude: 37.7749, longitude: -122.4194 },
    },
    {
      id: 9,
      title: 'Zoo Visit',
      coordinates: { latitude: 32.7349, longitude: -117.1449 },
    },
    {
      id: 10,
      title: 'Historical Tour',
      coordinates: { latitude: 38.5816, longitude: -121.4944 },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 32.7349,
            longitude: -117.1449,
            latitudeDelta: 5,
            longitudeDelta: 5,
          }}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}
          <Polyline
            coordinates={markers.map((marker) => marker.coordinates)}
            strokeColor="#0000FF"
            strokeWidth={2}
          />
        </MapView>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Total Cost: 1476.77 </Text>
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

