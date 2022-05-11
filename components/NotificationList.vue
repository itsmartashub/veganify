<template>
    <ul class="notifications">
        <transition-group name="notification">
            <NotificationMessage
                v-for="notification in notifications"
                :key="notification.id"
                :notification="notification"
            />
        </transition-group>
    </ul>
</template>

<script>
export default {
    computed: {
        notifications() {
            return this.$store.state.app.notifications
        },
    },
}
</script>
