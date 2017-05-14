import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import { Actions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>

        <ScrollView style={styles.container}>
          <View style={styles.centeredlogo}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <TouchableOpacity onPress={() => {
            Actions.eventListScreen()
          }}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>Events</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            Actions.birthListScreen()
          }}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>Births</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}

LaunchScreen.contextTypes = {
  drawer: React.PropTypes.object
}

export default LaunchScreen
