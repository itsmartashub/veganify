<template>
  <transition name="waiting">
    <section class="waiting" v-if="isWaiting">
      <img src="/img/loader-2.gif" alt="" />
    </section>
  </transition>
</template>

<script>
export default {
  computed: {
    isWaiting() {
      return this.$store.state.app.isWaiting;
    },
  },
};
</script>
