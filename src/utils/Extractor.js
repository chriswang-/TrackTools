/**
 return {
      lng: loc[0],
      lat: loc[1],
      time: tm,
      provider: provider,
      rawLine: lineString
    }
 */
export default {
  KeywordsExtractor: function (lineString) {
    var matchedLocationResult = lineString.match(/__Location:.*?#/g)
    var matchedTimeResult = lineString.match(/__Time:.*?#/g)
    var providerResult = lineString.match(/__Provider:.*?#/g)
    var loc, tm, provider
    if (lineString === undefined || lineString === null || matchedLocationResult == null) {
      return null
    }
    loc = matchedLocationResult[0].replace('__Location:', '').replace('#', '').split(',')
    if (matchedTimeResult !== null) { tm = matchedTimeResult[0].replace('__Time:', '').replace('#', '') }
    if (providerResult !== null) { provider = providerResult[0].replace('__Provider:', '').replace('#', '') }

    return {
      lng: loc[0],
      lat: loc[1],
      time: tm,
      provider: provider,
      rawLine: lineString
    }
  },
  ServerLogExtractor: function (lineString) {
    var latArr = lineString.match(/lat":"([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)/g)
    var lngArr = lineString.match(/lng":"([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)/g)
    var lat = null
    var lng = null
    if (lineString === undefined || lineString === null) {
      return null
    }
    if (latArr == null || lngArr == null) {
      return null
    }
    lng = lngArr[0].replace('lng":', '').replace('"', '')
    lat = latArr[0].replace('lat":', '').replace('"', '')
    return {
      lng: lng,
      lat: lat,
      time: 123,
      provider: '',
      rawLine: lineString
    }
  }
}
