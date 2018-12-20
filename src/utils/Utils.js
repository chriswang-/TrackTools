export function timeFormat (time) {
  var date = new Date(Number(time))
  // var formatString = '#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#'
  var formatString = '#DD# #hh#:#mm#:#ss#'
  var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th
  YY = ((YYYY = date.getFullYear()) + '').slice(-2)
  MM = (M = date.getMonth() + 1) < 10 ? ('0' + M) : M
  // MMM = (MMMM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][M - 1]).substring(0, 3)
  DD = (D = date.getDate()) < 10 ? ('0' + D) : D
  // DDD = (DDDD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]).substring(0, 3)
  th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) === 1) ? 'st' : (dMod === 2) ? 'nd' : (dMod === 3) ? 'rd' : 'th'
  formatString = formatString.replace('#YYYY#', YYYY).replace('#YY#', YY).replace('#MMMM#', MMMM).replace('#MMM#', MMM).replace('#MM#', MM).replace('#M#', M).replace('#DDDD#', DDDD).replace('#DDD#', DDD).replace('#DD#', DD).replace('#D#', D).replace('#th#', th)
  h = (hhh = date.getHours())
  if (h === 0) h = 24
  if (h > 12) h -= 12
  hh = h < 10 ? ('0' + h) : h
  hhhh = hhh < 10 ? ('0' + hhh) : hhh
  AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase()
  mm = (m = date.getMinutes()) < 10 ? ('0' + m) : m
  ss = (s = date.getSeconds()) < 10 ? ('0' + s) : s
  return formatString.replace('#hhhh#', hhhh).replace('#hhh#', hhh).replace('#hh#', hh).replace('#h#', h).replace('#mm#', mm).replace('#m#', m).replace('#ss#', ss).replace('#s#', s).replace('#ampm#', ampm).replace('#AMPM#', AMPM)
}

export function uuid (len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid = [], i
  radix = radix || chars.length
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    // rfc4122, version 4 form
    var r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}
