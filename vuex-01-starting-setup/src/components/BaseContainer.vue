<template>
  <section>
    <h2>{{ titles }}</h2>
    <h3>{{ message }}</h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  // props: ['title'],

  data() {
    return {
      titles: 'EUGENE  x VUEX',
      message: 'This is the base container',
    };
  },
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>