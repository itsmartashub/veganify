<template>
    <div class="notification" :class="className">
        <p>
            {{ notification.message }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['notification'],

    data() {
        return {
            timeout: null,
        }
    },

    computed: {
        className() {
            return `notification--${this.notification.className}`
        },
    },

    created() {
        this.timeout = setTimeout(() => {
            this.$store.commit('app/REMOVE_NOTIFICATION', this.notification)
        }, 1500)
    },

    beforeDestroy() {
        clearTimeout(this.timeout)
    },
}
</script>
