export default {
    head() {
        const head = {
            title: this.seo.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.seo.description,
                },
                // OGP
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.seo.title,
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.seo.description,
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: this.seo.type || 'website',
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.seo.image,
                },
                {
                    hid: 'og:locale',
                    property: 'og:locale',
                    content: 'en_US',
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: 'https://veganify.vercel.app' + this.$route.path,
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:site',
                    content: this.seo.type || 'website',
                },
                {
                    name: 'twitter:creator',
                    content: '@awa_it_',
                },
            ],
        }

        return head
    },
}
