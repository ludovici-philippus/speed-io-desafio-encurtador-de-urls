<template>
  <button @click.prevent="on_click" :type="type">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    on_click: Function,
    type: String,
    text: String,
  },
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  border: 1px solid var(--cor-4);
  color: white;
  background-color: var(--cor-4);
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  transition: 0.5s;
}

button:hover {
  background-color: #2392ba;
}
</style>
