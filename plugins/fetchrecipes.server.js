//* ======================== DEFINITIVNO =======================
// ! kao mogli bismo ovo da radimo u index page na klajentu, ali zasto da teretimo klajent sajd, kad lkepo mozemo ovo da odradimo na serveru. zato kreiramo u plugin js fajl sa SERVER imenom u sebi. i sad moramo u nuxt.config.js da mu damo do znanja da taj fajl/plugin postoji
// // import at the top
// const cookieParser = require('cookie-parser')

// // this goes just before app.use(nuxt.render)
// app.use(cookieParser())

export default async ({ store, app }) => {
    await store.dispatch('recipes/fetchAllInOnce')
}
