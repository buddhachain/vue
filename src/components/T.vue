<template>
  <div>
    test: {{ $store.state.count }}
    <button @click="$store.commit('decrement')">-</button>
  </div>
</template>
