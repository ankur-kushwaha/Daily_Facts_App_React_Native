import {AsyncStorage} from 'react-native'

function create (baseUrl = 'http://history.muffinlabs.com') {
  function fetchFacts () {
    return AsyncStorage.getItem('@MyStore:dayHistoryData')
    .then((data) => {
      if (data != null) {
        return JSON.parse(data)
      } else {
        console.log('--------', baseUrl + '/date')
        return fetch(baseUrl + '/date')
            .then((response) => response.json())
            .then((responseJson) => {
              return AsyncStorage.setItem('@MyStore:dayHistoryData', JSON.stringify(responseJson.data))
                .then(() => {
                  return responseJson.data
                })
            })
        .catch((error) => {
          console.error(error)
        })
      }
    })
  }

  return {
    fetchFacts
  }
}

export default create

