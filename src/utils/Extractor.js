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

    if (lineString === undefined || lineString === null || matchedLocationResult == null || matchedTimeResult == null || providerResult == null) {
      return null
    }
    var loc = matchedLocationResult[0].replace('__Location:', '').replace('#', '').split(',')
    var tm = matchedTimeResult[0].replace('__Time:', '').replace('#', '')
    var provider = providerResult[0].replace('__Provider:', '').replace('#', '')

    return {
      lng: loc[0],
      lat: loc[1],
      time: tm,
      provider: provider,
      rawLine: lineString
    }
  },
  JsonExtractor: function (lineString) {
    return {
      lng: 0,
      lat: 0,
      time: 123,
      provider: '',
      rawLine: ''
    }
  }
}
