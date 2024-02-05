/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';

const brainwaves = [
  {
    name: 'Gamma',
    symbol: 'γ',
    audioFile: '05 - Pure Gamma Binaural Beats (40hz).mp3',
  },
  {
    name: 'Beta',
    symbol: 'β',
    audioFile: '02 - Pure Beta Binaural Beats (20hz).mp3',
  },
  {
    name: 'Alpha',
    symbol: 'α',
    audioFile: '01 - Pure Alpha Binaural Beats (12hz).mp3',
  },
  {
    name: 'Theta',
    symbol: 'θ',
    audioFile: '06 - Pure Theta Binaural Beats (7hz).mp3',
  },
  {
    name: 'Delta',
    symbol: 'δ',
    audioFile: '04 - Pure Delta Binaural Beats (3hz).mp3',
  },
];

let currentPlayingSound: Sound;

const playSound = (brainwave: any) => {
  if (currentPlayingSound) {
    currentPlayingSound.stop();
  }
  console.log(brainwave.audioFile);
  Sound.setCategory('Playback');
  var audio = new Sound(brainwave.audioFile, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        audio.getDuration() +
        'number of channels: ' +
        audio.getNumberOfChannels(),
    );

    // Play the sound with an onEnd callback
    audio.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
  audio.setVolume(1);
  audio.setPan(0.5);
  audio.setNumberOfLoops(-1);
  audio.play();
  currentPlayingSound = audio;
};

const App = () => {
  const [playingBrainwave, setPlayingBrainwave] = React.useState<any>(null);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00bffe', '#01008a']} style={styles.gradiant}>
        <SafeAreaView style={{paddingVertical: 20}}>
          {brainwaves.map((brainwave, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => {
                if (brainwave.name === playingBrainwave?.name) {
                  currentPlayingSound?.stop();
                  setPlayingBrainwave(null);
                  return;
                }
                playSound(brainwave);
                setPlayingBrainwave(brainwave);
              }}>
              <Text
                style={[
                  styles.symbol,
                  playingBrainwave?.name === brainwave.name
                    ? {color: '#00bffe'}
                    : undefined,
                ]}>
                {brainwave.symbol}
              </Text>
              <Text style={styles.name}>{brainwave.name}</Text>
            </TouchableOpacity>
          ))}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradiant: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  symbol: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default App;
