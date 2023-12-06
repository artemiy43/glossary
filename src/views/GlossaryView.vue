<template>
  <ul class="card_list">
    <li v-for="term in terms" :key="term.id" class="card">
      <h2>{{ term.name }}</h2>
      <p>{{ term.description }}</p>
    </li>
  </ul>
</template>

<script setup>
import terms from "../mocks/terms.json";
</script>
<style lang="scss" scoped>
.card_list {
  display: grid;
  //   justify-content: center;
  //   align-items: center;
  grid-template-columns: repeat(5, 1fr);
  padding: 0 20px 0;
  gap: 10px;
  list-style-type: none;
}

.card {
  max-width: 300px;
  min-height: 200px;
  border-radius: 20px;
  padding: 0 20px;
  //   background-color: rgb(241, 222, 222);
  //   color: black;
  background-color: rgb(53, 63, 70);
  color: white;
  border: 1px solid black;
  word-wrap: break-word;
}
.card:hover {
  background-color: rgb(255, 255, 255);
  color: black;
  border: 1px solid black;
}

@media (max-width: 1900px) {
  .card_list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1050px) {
  .card_list {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    gap: 0;
  }
}

@media (max-width: 980px) {
  .card_list {
    grid-template-columns: 300px;
    justify-content: center;
    gap: 0;
  }

  .card {
    max-width: 310px;
    min-height: 200px;
    border-radius: 20px;
    margin: 0;
  }
}
</style>
