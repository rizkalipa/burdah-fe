<template>
  <div>
    <div class="lg:w-6/12 md:w-8/12 w-full mx-auto my-16 mb-32 text-amber-950 text-3xl tracking-wider" style="line-height: 4rem">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainContent",
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>