import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: 'white'
  },
  row: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.cardBorder,
    marginVertical: Metrics.smallMargin,
    borderRadius: 1,
    marginHorizontal: 13,
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  boldLabel: {
    color: Colors.textPrimary,
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20,
    padding: 10,
    alignItems: 'stretch',
    flex: 1
  },
  label: {
    padding: 10,
    backgroundColor: Colors.buttonBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.white
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
