// import SetCookieParser from 'set-cookie-parser'

// export default function ({ $axios, $cookiz }) {
//     $axios.onResponse((response) => {
//         const cookies = SetCookieParser.parse(response)

//         // console.log(cookies)

//         cookies.forEach((cookie) => {
//             const { name, value, ...options } = cookie
//             $cookiz.set(name, value, options)

//             console.log({ cookie })
//         })
//     })
// }
