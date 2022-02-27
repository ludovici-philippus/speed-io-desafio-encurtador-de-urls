<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <input
      :type="input_type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: String,
    placeholder: String,
    label: String,
    input_type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style scoped>
.form-group {
  margin: 10px 0;
}

input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  padding-left: 4px;
}
input:focus {
  outline: 1px solid var(--cor-4);
}
label {
  font-size: 18px;
}
</style>
