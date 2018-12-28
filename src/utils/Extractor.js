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
