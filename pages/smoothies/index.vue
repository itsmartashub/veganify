<template>
    <div class="smoothies">
        <Navigation />

        <main class="middle">
            <Header />
            <!-- <SmoothieCards :smoothies="smoothies" /> -->
            <SmoothieCards />
        </main>

        <Sidebar />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Veganify | Smoothies",
            meta: [
                {
                    name: "description",
                    content: "This is a Veganify homepage BLABLA",
                    hid: "description"
                }
            ]
        };
    },

    computed: {
        smoothies() {
            return this.$store.state.smoothies.smoothieItems;
        }
    }
};
</script>

<style></style>
