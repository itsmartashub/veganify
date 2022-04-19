<template>
    <div>
        <Nuxt />
        <!-- <div class="bp"></div> -->
    </div>
</template>
<script>
export default {
    mounted() {
        if (process.client && window) {
            window.history.scrollRestoration = 'auto'
        }
    },
}
</script>
