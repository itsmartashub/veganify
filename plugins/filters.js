import Vue from 'vue'

Vue.filter('truncateTxt', function (txt, maxLength = 30) {
  if (txt && typeof txt === 'string') {
    const finalChar = txt.length > maxLength ? '...' : ''
    return txt.substr(0, maxLength) + finalChar
  }
})
Vue.filter('altFormatting', function (altTxt) {
  if (altTxt && typeof altTxt === 'string') {
    const finalAlt = altTxt.replaceAll(' ', '-')
    return finalAlt.toLowerCase()
  }
})

// Vue.filter("generateRandomLikes", function(likes = 0, min = 3.6, max = 5) {
//     let randomNum = Math.random() * (max - min) + min;
//     return randomNum.toFixed(1) + likes;
// });
