<template>
  <div>
    <Nuxt />
    <p class="bp"></p>
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
