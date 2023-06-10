<template>
  <div id="app" class="relative overflow-hidden">
    <img src="./assets/img/bg-arabic-2.png" class="absolute -top-14 lg:-top-32 lg:-right-32 w-full -z-10 lg:w-9/12">

    <MainContent />

    <img src="./assets/img/bg-arabic-1.png" class="absolute -bottom-32 w-full -z-10 lg:w-8/12">
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";

export default {
  name: 'App',
  components: {
    MainContent,
  }
}
</script>

<style>
  #app {
    font-family: Amiri, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background-size: cover;
    background-attachment: fixed;
    background-color: #FCFCFC;
  }

  html {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
</style>
