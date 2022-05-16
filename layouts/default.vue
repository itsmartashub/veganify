<template>
    <div>
        <Nuxt />
        <!-- <div class="bp"></div> -->
        <!-- <NotificationList /> -->
    </div>
</template>
<script>
export default {
    watch: {
        $route() {
            // console.log(this.$store.state.app.notifications.length)
            this.$store.commit('app/CLEAR_NOTIFICATIONS')
            // console.log(this.$store.state.app.notifications.length)
        },
    },
    // mounted() {
    //     if (process.client && window) {
    //         window.history.scrollRestoration = 'auto'
    //     }
    // },
}
</script>
