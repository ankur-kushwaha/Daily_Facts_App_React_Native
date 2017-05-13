import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, AppState } from 'react-native'
import { Images } from '../Themes'
// import { Actions } from 'react-native-router-flux'
import PushNotification from 'react-native-push-notification'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
  constructor (props) {
    super(props)
    this.handleAppStateChange = this.handleAppStateChange.bind(this)
  }
  componentWillMount () {
    AppState.addEventListener('change', this.handleAppStateChange)
  }
  componentWillUnmount () {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange (AppState) {
    console.log(AppState)
    if (AppState === 'background') {
      let date = new Date(Date.now() + (5 * 1000))
      PushNotification.localNotificationSchedule({
        message: 'test',
        date
      })
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>

        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <TouchableOpacity onPress={() => {
            PushNotification.localNotification({
              message: 'test'
            })
          }}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>Sign In</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              {"This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite."}
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

LaunchScreen.contextTypes = {
  drawer: React.PropTypes.object
}

export default LaunchScreen
