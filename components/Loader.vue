<template>
  <!-- <section class="loader" :class="{ 'loader--hidden': loading }" > -->
  <transition
    leave-active-class="loader--leave"
    enter-active-class="loader--enter"
  >
    <section class="loader" v-if="loading">
      <img src="/img/loader-2.gif" alt="" />
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>
