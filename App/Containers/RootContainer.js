import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import PushController from '../Components/Pushcontroller'
// Styles
import styles from './Styles/RootContainerStyles'
import {
  AdMobBanner
} from 'react-native-admob'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    this.bannerError = this.bannerError.bind(this)
  }

  bannerError () {
    console.log('Banner Error', arguments[0])
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NavigationRouter />
        <PushController />
        <AdMobBanner
          bannerSize='fullBanner'
          adUnitID='ca-app-pub-8431761110031043/8671514275'
          testDeviceID='EMULATOR'
          didFailToReceiveAdWithError={this.bannerError} />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
