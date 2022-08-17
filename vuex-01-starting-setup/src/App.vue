<template>
  <base-container  >
<CounterThe></CounterThe>
  <button @click="increment">Add one more </button>
    <h3> ---->>> {{counting}}  ---- </h3>
    <h2>
     added text -->   {{anyHow}}
    </h2>
    <ChangeCounter></ChangeCounter>

  </base-container>

  <base-container title="Auth">
    <UserAuth>    </UserAuth>

  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterThe from './components/CounterThe.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from "@/components/UserAuth";

export default {
  components: {
    BaseContainer,
    CounterThe,
    ChangeCounter,
    UserAuth,
  },
  data() {
    return {};
  },
  computed: {
    counter() {
      return this.$store.state.count;
    },
    counting() {
      return this.$store.getters.reverbFinalCount;
    },
    anyHow() {
      return this.$store.getters.addTxt;
    },
  },
  methods: {
    increment() {
      this.$store.commit('addMethod');
    },
   mutedIncrement () {

    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>