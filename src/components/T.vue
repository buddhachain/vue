<template>
  <div>
    test: {{ $store.state.count }}
    <button @click="$store.commit('decrement')">-</button>
  </div>
</template>
<script>
export default {
  name: "T",
  created() {
    this.apiGetNotes();
  },
  methods: {
    apiGetNotes() {
      this.$get("/v1/tx/123", {})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
