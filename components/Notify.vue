<template>
    <section class="notify">
        <h2 class="notify__title">OOOPSYFIED 😶</h2>
        <div class="notify__content" v-html="notifyText"></div>
    </section>
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
