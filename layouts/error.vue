<template>
    <main class="error">
        <section class="error__headers">
            <h1 class="error__404">
                <span>4</span> <span @click="$nuxt.refresh()">🍽️</span>
                <span>4</span>
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
            title: 'Error | Page not found',
        }
    },
    props: {
        error: {
            type: Object,
            required: true,
        },
    },
}
</script>
