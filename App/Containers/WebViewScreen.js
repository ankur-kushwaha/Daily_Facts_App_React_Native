import React from 'react'
import {
  WebView
} from 'react-native'
import { connect } from 'react-redux'

import LoginActions from '../Redux/LoginRedux'

class WebViewScreen extends React.Component {

  render () {
    console.log(this.props.url)
    return (<WebView
      source={{uri: this.props.url}}
      style={{marginTop: 20, height: 200}}
      />)
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebViewScreen)
