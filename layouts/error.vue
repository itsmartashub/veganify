<template>
  <section class="error">
    <img
      src="https://media1.tenor.com/images/99f00b32545bf5b5db8bf8ecbb7f0aec/tenor.gif?itemid=7971019"
    /><br /><br />
    <!-- <h1>Error!</h1>
    {{ error }} {{ error.message }} ({{ error.statusCode }}) -->
    <!-- <ul>
      <li>ERROR: {{ error }}error</li>
      <li>ERROR MESSAGE: {{ error.message }}</li>
      <li>ERROR STATUS CODE: {{ error.statusCode }}</li>
    </ul> -->
    <Notify :recipeNotifyText="recipeNotifyText" />
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: 'OOOOPPPSSSSY',
    }
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      recipeNotifyText: `<ul>
        <li>ERROR MESSAGE: ${this.error.message}</li>
        <li>ERROR STATUS CODE: ${this.error.statusCode}</li>
      </ul>`,
    }
  },
}
</script>
