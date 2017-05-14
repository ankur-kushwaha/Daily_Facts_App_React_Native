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
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 13,
    padding: 15
  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'left',
    marginVertical: Metrics.smallMargin
  },
  label: {
    textAlign: 'right',
    color: Colors.text,
    marginBottom: Metrics.smallMargin
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
