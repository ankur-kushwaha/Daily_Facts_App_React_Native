import React from 'react'
import { View, Text, ListView, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'
import create from '../Services/apiService'

// Styles
import styles from './Styles/ListviewExampleStyles'

const rowHasChanged = (r1, r2) => r1 !== r2
const ds = new ListView.DataSource({rowHasChanged})

class BirthListScreen extends React.Component {
  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [

    ]

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/

    // DataSource configured

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  componentDidMount () {
    var api = create()
    api.fetchFacts().then((data) => {
      var newData = data.Births.map((d) => {
        return {
          title: d.text,
          year: d.year,
          url: d.links[0].link
        }
      }).sort((a, b) => {
        return Number(b.year) - Number(a.year)
      })
      this.setState({dataSource: ds.cloneWithRows(newData)})
    })
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData) {
    return (
      <TouchableOpacity onPress={() => {
        Linking.openURL(rowData.url).catch(err => console.error('An error occurred', err))
      }}>

        <View style={styles.row}>
          <Text style={styles.boldLabel}>{rowData.title}</Text>
          <Text style={styles.label}>Year: {rowData.year }</Text>
        </View>
      </TouchableOpacity>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(BirthListScreen)
