<template>
  <div class="notifications">
    <transition name="notification">
      <p
        class="notification"
        :class="notification.className"
        v-if="notification.display"
      >
        ⚠️
        {{ notification.content }}
      </p>
    </transition>
  </div>
  <!-- <p class="notification" :class="notification.className">
    ⚠️ {{ notification.content }}
  </p> -->
</template>

<script>
export default {
  computed: {
    notification() {
      return this.$store.getters["app/GET_NOTIFICATION"];
    },

    // showNotification: {
    //   get() {
    //     return this.notification.display;
    //   },
    //   set(displayValue) {
    //     this.$store.dispatch("app/notification", { display: displayValue });
    //   },
    // },
  },
};
</script>
