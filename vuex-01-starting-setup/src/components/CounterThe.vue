<template>
  <h3> {{finalCount}}</h3>
  <p>We more do</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "CounterThe"
,
  computed: {
    // counter() {
    //   return this.$store.getters.finalCount;
    //
    // }

    ...mapGetters(['reverbFinalCount','finalCount'])
  }
}
</script>

<style scoped>

</style>