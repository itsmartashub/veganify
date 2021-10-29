<template>
    <div class="steps">

        <template v-for="step in recipeItem.analyzedInstructions[0].steps" >


        <div class="step" :key="step.step">
            <span class="step__count">{{ step.number }}</span>
            <span class="step__txt">
               {{ step.step }}
            </span>
        </div>
        <!-- <div class="step">
            <span class="step__count">02</span>
            <span class="step__txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, esse!
            </span>
        </div>
        <div class="step">
            <span class="step__count">03</span>
            <span class="step__txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, esse! Voluptatum consectetur iusto ducimus quasi, ab,
                molestiae id
            </span>
        </div>
        <div class="step">
            <span class="step__count">04</span>
            <span class="step__txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. dsa
            </span>
        </div>
        <div class="step">
            <span class="step__count">05</span>
            <span class="step__txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, esse! Voluptatum consectetur iusto ducimus quasi, ab,
                molestiae id ratione dicta amet pariatur fugit commodi ipsa a
                architecto fuga vitae esse!
            </span>
        </div>
        <div class="step">
            <span class="step__count">06</span>
            <span class="step__txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
        </div> -->

        </template>

    </div>
</template>

<script>
export default {
    computed: {
        recipeItem() {
            return this.$store.state.recipes.recipeItem 
        }
    },
};
</script>

<style lang="scss" scoped></style>
