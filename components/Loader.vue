<template>
    <transition name="loader">
        <section class="loader" v-if="loading">
            <div class="loader__content">
                <div class="loader__logo">
                    <Logo />
                </div>
                <div class="loader__title">
                    <p>
                        <span class="loader__vegan">Vegan</span
                        ><span class="loader__ify">ifing</span>
                    </p>
                    <span class="loader__yourmeal">Your Meal</span>
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
        })
    },
}
</script>
