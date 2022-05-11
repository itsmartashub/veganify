import Vue from 'vue'

Vue.filter('truncateTxt', function (txt, maxLength = 30) {
    if (txt && typeof txt === 'string') {
        const finalChar = txt.length > maxLength ? '...' : ''
        return txt.substring(0, maxLength + 1) + finalChar
    }
})
Vue.filter('altFormatting', function (altTxt) {
    if (altTxt && typeof altTxt === 'string') {
        const finalAlt = altTxt.replaceAll(' ', '-')
        return finalAlt.toLowerCase()
    }
})
