import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import { Actions } from 'react-native-router-flux'

// import { PushNotification } from 'react-native-push-notification';

// Styles
import styles from './Styles/LaunchScreenStyles'

// PushNotification.configure({
//   // (required) Called when a remote or local notification is opened or received
//   onNotification: function (notification) {
//     alert('NOTIFICATION:', notification);
//   },
// })

// PushNotification.localNotificationSchedule({
//   message: "My Notification Message", // (required)
//   date: new Date(Date.now() + (60 * 1000)) // in 60 secs
// });

class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <TouchableOpacity onPress={Actions.loginScreen}>
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
