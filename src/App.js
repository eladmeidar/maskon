/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Button, Image} from 'react-native-elements';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');
var manVoices = [];
var manVoice = new Sound('voice1.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
var holira = new Sound('holira.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
manVoices.push(manVoice);
manVoices.push(holira);

var girlVoice = new Sound('voice2.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageBackground
          style={styles.background}
          source={require('../assets/covd2.jpg')}>
          <View style={styles.body}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '600',
                color: 'white'
              }}>
              מי בלי מסיכה?
            </Text>
            <Image
              style={{width: 150, height: 150}}
              source={require('../assets/girl1.png')}
              resizeMode={'cover'}
              onPress={() => {
                girlVoice.play((success) => {
                  if (success) {
                    console.log('successfully finished playing');
                  } else {
                    console.log('playback failed due to audio decoding errors');
                  }
                });
              }}
            />
            <Image
              style={{width: 150, height: 150}}
              source={require('../assets/boy1.png')}
              resizeMode={'cover'}
              onPress={() => {
                var item =
                  manVoices[Math.floor(Math.random() * manVoices.length)];
                item.play((success) => {
                  if (success) {
                    console.log('successfully finished playing');
                  } else {
                    console.log('playback failed due to audio decoding errors');
                  }
                });
              }}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    opacity: 0.3,
    width: 150,
    height: 150,
  },
  background: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  body: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 50,
    paddingBottom: 120,
    alignItems: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
