import {AsyncStorage} from 'react-native'

function create (baseUrl = 'http://history.muffinlabs.com') {
  function fetchFacts () {
    return AsyncStorage.getItem('@MyStore:dayHistoryData')
    .then((data) => {
      let currentDate = new Date().toJSON().slice(0, 10)
      data = JSON.parse(data)
      if (data != null && data.date === currentDate) {
        return data.facts
      } else {
        console.log('--------', baseUrl + '/date')
        return fetch(baseUrl + '/date')
            .then((response) => response.json())
            .then((responseJson) => {
              let facts = responseJson.data
              let date = new Date().toJSON().slice(0, 10)
              let data = {
                facts, date
              }

              return AsyncStorage.setItem('@MyStore:dayHistoryData', JSON.stringify(data))
                .then(() => {
                  return facts
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

