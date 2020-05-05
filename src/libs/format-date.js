const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const formats = {
  yyyy: (date) => date.getFullYear(),
  yy: (date) => date.getFullYear().toString().substr(2),
  mmmm: (date) => monthNames[date.getMonth()],
  mmm: (date) => monthNames[date.getMonth()].substr(0, 3),
  mm: (date) => String(date.getMonth() + 1).padStart(2, '0'),
  dddd: (date) => dayNames[date.getDay()],
  ddd: (date) => dayNames[date.getDay()].substr(0, 3),
  dd: (date) => String(date.getDate()).padStart(2, '0'),
  hh: (date) =>
    String(date.getHours() % 12 ? date.getHours() : 12).padStart(2, '0'),
  m: (date) => String(date.getMinutes()).padStart(2, '0'),
  ss: (date) => String(date.getSeconds()).padStart(2, '0'),
  'a/p': (date) => (date.getHours() < 12 ? 'am' : 'pm'),
}

export const formatDate = ({ date, format }) =>
  format.replace(/(yyyy|yy|mmmm|mmm|mm|m|dddd|ddd|dd|hh|ss|a\/p)/gi, (val) =>
    formats[val](date)
  )
