import React from 'react'

import Page from '../../modules/layout/main'

export default () =>
  <Page title='Stuff' date='2016-04-10'>{`
## Remove sub-array in js

Given 2 arrays, this piece of javascript filter function removes all elements of the 2nd array from the 1st array

\`\`\`js
array1.filter(function(item) {
  array2.indexOf(item) === -1;
})
\`\`\`

Example:

\`\`\`js
var arr1 = [1,2,3,4,5,6,7,8,9,10,1,2,3],
  arr2 = [2,4,6,7];

var arr3 = arr1.filter(function(item){
  return arr2.indexOf(item) === -1;
});
// arr3 is now [ 1, 3, 5, 8, 9, 10, 1, 3 ]
\`\`\`
  `}</Page>
