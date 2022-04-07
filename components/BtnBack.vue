<template>
    <button class="recipeitem__btn-back btn" @click.prevent="goBack()">
        <div class="icontainer--bggreen">
            <svg
                class="icon icon-arrowLeft icontainer__icon"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
            >
                <path
                    d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                ></path>
            </svg>
        </div>
        <span>BACK</span>
    </button>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.back()
        },
    },
}
</script>
