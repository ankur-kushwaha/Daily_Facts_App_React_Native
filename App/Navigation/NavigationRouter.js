import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import EventListScreen from '../Containers/EventListScreen'
import BirthListScreen from '../Containers/BirthListScreen'
import WebViewScreen from '../Containers/WebViewScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='launchScreen' component={LaunchScreen} title='Daily Facts' />
            <Scene key='birthListScreen' component={BirthListScreen} title="Today's Aniversary" />
            <Scene key='eventListScreen' component={EventListScreen} title="Today's Events" />
            <Scene key='webViewScreen' component={WebViewScreen} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
