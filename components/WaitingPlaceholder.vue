<template>
    <transition name="waiting">
        <section class="waiting" v-if="isWaiting">
            <p>LOADING...</p>
        </section>
    </transition>
</template>

<script>
export default {
    computed: {
        isWaiting() {
            return this.$store.state.app.isWaiting
        },
    },
}
</script>
