import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

// Initialize geolocation
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
});

// Request permission and get the user's location
const getLocation = () => {
  Geolocation.requestAuthorization();

  Geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      // Call the function to send the geolocation data to your Django app here
      sendGeolocationToDjango(latitude, longitude);
    },
    (error) => console.error(error),
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};

const sendGeolocationToDjango = (latitude, longitude) => {
    const data = {
      latitude,
      longitude,
    };
  
    axios.post('https://your-django-app-url/api/endpoint', data)
      .then((response) => {
        console.log('Geolocation data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending geolocation data:', error);
      });
  };