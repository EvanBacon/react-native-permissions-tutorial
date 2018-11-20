import * as React from 'react';

import { Text, View, StyleSheet, Linking } from 'react-native';

import { Permissions, Contacts } from 'expo';

export default class App extends React.Component {
  state = {
    status: null,
  };

  permissionFlow = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);

    this.setState({ status });

    if (status !== 'granted') {
      Linking.openURL('app-settings:');
      return;
    }

    /*
      Get some data
    */
    const { data } = await Contacts.getContactsAsync({ pageSize: 1 });
    console.log(data[0]);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} onPress={this.permissionFlow}>
          Permissions: {this.state.status}
        </Text>
      </View>
    );
  }
}

/*
Permissions:

CAMERA
AUDIO_RECORDING
LOCATION
USER_FACING_NOTIFICATIONS
NOTIFICATIONS
CONTACTS
SYSTEM_BRIGHTNESS
CAMERA_ROLL
CALENDAR
REMINDERS
SMS

*/

/*
 * Changing message on iOS
 * Check the app.json
 */

const exampleApp = {
  expo: {
    ios: {
      infoPlist: {
        NSCalendarsUsageDescription:
          'Allow Expo experiences to access your calendar',
        NSCameraUsageDescription:
          'Expo uses your camera to scan project QR codes. Expo experiences you open may use the camera with the Expo camera API.',
        NSContactsUsageDescription:
          'Allow Expo experiences to access your contacts',
        NSLocationWhenInUseUsageDescription:
          'Allow Expo experiences to use your location',
        NSMicrophoneUsageDescription:
          'Allow Expo experiences to access your microphone',
        NSMotionUsageDescription:
          "Allow Expo experiences to access your device's accelerometer",
        NSPhotoLibraryAddUsageDescription:
          'Give Expo experiences permission to save photos',
        NSPhotoLibraryUsageDescription:
          'Give Expo experiences permission to access your photos',
        NSRemindersUsageDescription:
          'Allow Expo experiences to access your reminders',
      },
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
