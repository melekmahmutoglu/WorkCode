import React from 'react'
import LottieView from 'lottie-react-native';

const AnimationLoading = () => {
    return (
        <LottieView
            source={require('../../../assets/animations/loadingCodeWork.json')}
            autoPlay
        />
    )
}

export default AnimationLoading