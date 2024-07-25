import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const latitude = 40.71947018328992;
const longitude = -73.95766574353138;

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        /* onMarkerPress correctly fires once when there is a single press */
        onMarkerPress={(e) => {
          e.preventDefault(); // This does nothing.
          e.stopPropagation(); // This does nothing.
          console.log('@onMarkerPress');
        }}
        /* incorrectly fires twice – once for each marker */
        onMarkerSelect={() => {
          console.log('@onMarkerSelect');
        }}
      >
        <Marker title="Marker 1" coordinate={{ latitude, longitude }} />
        <Marker
          title="Marker 2"
          coordinate={{
            latitude: latitude + 0.0002,
            longitude: longitude + 0.0002,
          }}
        />
      </MapView>
    </View>
  );
}
