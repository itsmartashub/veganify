<template>
    <main class="error">
        <section class="error__headers">
            <h1 class="error__404">
                <span>{{ statusCodeArr[0] }}</span>
                <span @click.prevent="reloadApp">🍽️</span>
                <span>{{ statusCodeArr[2] }}</span>
            </h1>

            <h2 class="error__msg">
                {{ error.message }}
            </h2>
        </section>
        <p class="error__wanted"><span>#</span>RECIPESWANTED</p>
    </main>
</template>
<script>
export default {
    head() {
        return {
            title: `Error | ${this.error.statusCode}`,
        }
    },
    props: {
        error: {
            type: Object,
            required: true,
        },
    },

    computed: {
        statusCodeArr() {
            return this.error.statusCode.toString().split('')
        },
    },

    methods: {
        reloadApp() {
            window.location.reload(true)
        },
    },
}
</script>
