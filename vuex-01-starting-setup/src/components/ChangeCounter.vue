<template>
<button @click="addMethod">Add 100 more , with time out -----> WAIT LIKE 5 SEC TO TEST  </button>
</template>

<script>


import { mapActions } from 'vuex';

export default {
  name: "ChangeCounter",
  methods: {
    // increment() {
    //   this.$store.dispatch('subMethod', {
    //     value: 100 ,
    //   });
    // }
    ...mapActions([
      'addMethod'
    ]),
  }
}
</script>

<style scoped>

</style>