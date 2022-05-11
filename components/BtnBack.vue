<template>
    <button
        class="btnback btn"
        @click.prevent="goBack()"
        aria-label="Go to back"
    >
        <div class="icontainer--bggreen">
            <svg viewBox="0 0 24 24" width="24px" height="24px">
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
            //todo SETUJ CATEGORYNAME koji je bio
            //todo SETUJ AKTIVNU CATEOGRY koji je bio
            // window.history.length > 1
            //     ? this.$router.go(-1)
            //     : this.$router.push('/')
        },
    },
}
</script>
