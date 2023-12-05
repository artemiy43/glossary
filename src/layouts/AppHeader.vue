<template>
  <header class="header">
    <div class="header_container">
      <router-link class="header--link" to="/"
        ><span>Глоссарий</span></router-link
      >
      <router-link class="header--link" to="/graph">
        <span>Семантический граф</span>
      </router-link>
    </div>
    <div class="header_container">
      <div class="header--logo"></div>
      <div class="header--link">
        <span>Выполнил: Бондарь Артемий Алексеевич</span>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  height: 200px;
  background-color: rgb(189, 231, 225);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  &--link {
    background-color: rgb(243, 243, 243);
    color: black;
    width: 200px;
    height: 150px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 30px;
    font-size: 26px;
    line-height: 30px;
  }
  &--link:hover {
    background-color: rgb(53, 63, 70);
    color: white;
  }
  &--logo {
    width: 200px;
    height: 150px;
    border-radius: 30px;
    background-image: url("../assets/ITMO_University.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
  }

  .header_container {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
}
</style>
