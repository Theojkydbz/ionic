<template>
  <ion-app id="app">
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Card</ion-title>
      </ion-toolbar>
    </ion-header>,
    <ion-content fullscreen>
    <router-view></router-view>
    </ion-content>
  </ion-app>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
}
</style>
