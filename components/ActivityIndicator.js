import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DangerZone } from 'expo';
import loadingLottieJson from '../assets/lottie/loadingLottieJson'
import Colors from '../constants/Colors'
const { Lottie } = DangerZone;

export default class LoadingComponent extends React.Component {

  componentDidMount = () => {
    this._playAnimation()
  }

  _playAnimation = () => {
    if (this.animation) {
      this.animation.reset()
      this.animation.play()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Lottie
            style={styles.animation}
            ref={(animation) => this.animation = animation}
            loop
            source={loadingLottieJson}
            />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBaseColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  }
})
