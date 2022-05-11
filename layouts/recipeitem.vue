<template>
    <div>
        <Nuxt />
        <!-- <div class="bp"></div> -->
    </div>
</template>
<script>
export default {
    created() {
        // console.log(this.$store.state.app.notifications.length)
        this.$store.commit('app/CLEAR_NOTIFICATIONS')
        // console.log(this.$store.state.app.notifications.length)
    },
}
</script>
