<template>
  <div id="root">
    <Header />
    <Main />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300;400&display=swap');

:root {
  --cor-1: #4f4789;
  --cor-2: #eeba0b;
  --cor-3: #7fc29b;
  --cor-4: #3aaed8;
  --cor-5: #cc3f0c;

  --font-padrao: 'Open Sans', sans-serif;
  --font-destaques: 'Bebas Neue', cursive;
}

* {
  font-family: var(--font-padrao);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-destaques);
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 0 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
