<template>
    <div
        class="recipecards__notifysubtitle notify"
        v-html="recipeNotifyText"
    ></div>
</template>

<script>
export default {
    props: {
        recipeNotifyText: {
            type: String,
            required: false,
        },
    },
}
</script>
