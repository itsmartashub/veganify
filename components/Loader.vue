<template>
  <!-- <transition
    name="loader"
    enter-class="loader--enter"
    enter-active-class="loader--enter-active"
    enter-to-class="loader--enter-to"
    leave-active-class="loader--leave"
  > -->
  <transition name="loader" :duration="2000">
    <section class="loader" v-if="loading">
      <div class="loader__content">
        <div class="loader__logo">
          <Logo />
        </div>
        <div class="loader__title">
          <span>Vegan</span>
          <span class="loader__ify">ify</span>
          <span class="loader__yourmeal">&nbsp;Your Meal</span>
        </div>
      </div>
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

  //   computed: {
  //       loading() {
  //           return false
  //       }
  //   },
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
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
      // this.$nuxt.$loading.finish()
    })
  },
}
</script>
