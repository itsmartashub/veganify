<template>
    <div>
        <Nuxt />
        <!-- <div class="bp"></div> -->
    </div>
</template>
<script>
export default {
    created() {
        this.$store.commit('app/CLEAR_NOTIFICATIONS')
        this.$store.commit('recipes/SET_NO_REQUIRED_ITEM', false)
    },
}
</script>
