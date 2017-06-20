// reference: https://github.com/ferronrsmith/tiny-date-formatter/blob/master/dist/date.js
import padLeft from './pad-left'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const formats = {
  yyyy: date => date.getFullYear(),
  yy: date => date.getFullYear().toString().substr(2),
  mmmm: date => monthNames[date.getMonth()],
  mmm: date => monthNames[date.getMonth()].substr(0, 3),
  mm: date => padLeft(date.getMonth() + 1, 2),
  dddd: date => dayNames[date.getDay()],
  ddd: date => dayNames[date.getDay()].substr(0, 3),
  dd: date => padLeft(date.getDate(), 2),
  hh: date => padLeft((date.getHours() % 12) ? date.getHours() : 12, 2),
  m: date => padLeft(date.getMinutes(), 2),
  ss: date => padLeft(date.getSeconds(), 2),
  'a/p': date => date.getHours() < 12 ? 'am' : 'pm',
}

const dateFormat = ({ date, format }) =>
  format.replace(/(yyyy|yy|mmmm|mmm|mm|m|dddd|ddd|dd|hh|ss|a\/p)/gi, val => formats[val](date))

export default dateFormat
