import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centeredlogo: {
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    borderWidth: 1,
    borderColor: Colors.buttonBackground,
    backgroundColor: Colors.buttonBackground,
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: Metrics.doubleBaseMargin,
    marginTop: 20,
    alignItems: 'center'
  },
  loginText: {
    fontSize: 17,
    textAlign: 'center',
    color: Colors.buttonText
  }
})
