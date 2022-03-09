<template>
  <div class="recipecards__notifysubtitle" v-html="recipeNotifyText"></div>
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
