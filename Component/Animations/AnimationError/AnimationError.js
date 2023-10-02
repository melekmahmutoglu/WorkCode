import React from 'react'
import LottieView from 'lottie-react-native';

const AnimationError = () => {
    return (
        <LottieView
            source={require('../../../assets/animations/error_red.json')}
            autoPlay
        />
    )
}

export default AnimationError