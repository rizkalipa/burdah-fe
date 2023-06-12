<template>
  <div id="app" class="relative overflow-hidden">
    <img src="./assets/img/bg-arabic-2.png" class="absolute -top-14 lg:-top-32 lg:-right-32 w-full -z-10 lg:w-9/12">

    <MainContent />

    <img src="./assets/img/bg-arabic-1.png" class="absolute lg:-bottom-32 -bottom-16 w-full -z-10 lg:w-8/12">

    <div class="bg-gradient-to-r from-amber-950 to-amber-800 p-5 text-center absolute bottom-0 w-full">
      <div class="lg:w-6/12 md:w-8/12 w-full mx-auto flex items-center justify-between">
        <p class="text-amber-50 lg:text-lg text-sm">&copy; Hadroh Jamiatussholihin</p>

        <div class="lg:text-xl text-sm">
          <a href="https://www.instagram.com/majelis_jamiatussholihin/" target="_blank" class="text-amber-50 mx-3">
            <span><i class="fab fa-instagram"></i></span>
          </a>
          <a href="https://www.youtube.com/@hadrohjamiatussholihin5392" target="_blank" class="text-amber-50 mx-3">
            <span><i class="fab fa-youtube"></i></span>
          </a>
          <a href="https://www.tiktok.com/@hadrohjamiatussholihin" target="_blank" class="text-amber-50 mx-3">
            <span><i class="fab fa-tiktok"></i></span>
          </a>
        </div>
      </div>
    </div>

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
    font-family: serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
  }

  .font-amiri {
    font-family: Amiri;
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
