<template>
    <div class="recipecards__notifysubtitle notify" v-html="notifyText"></div>
</template>

<script>
export default {
    props: {
        notifyText: {
            type: String,
            required: false,
        },
    },
}
</script>
