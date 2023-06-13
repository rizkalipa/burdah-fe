<template>
  <div class=" bg-gradient-to-bl from-amber-50 to-amber-200 py-10 lg:mx-0 mx-10 rounded shadow-xl relative">
    <h4 class="lg:text-4xl text-2xl mb-5">Pilih Kitab</h4>

    <div class="flex flex-col items-center justify-between lg:w-3/4 w-5/6 mx-auto">
      <router-link to="/yasin-fadhilah" class="w-full relative p-3 my-6 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 border border-amber-900 text-xl rounded">
        Yasin Fadhilah
        <span class="absolute right-5"><i class="fas fa-circle-chevron-right text-sm"></i></span>
      </router-link>
      <router-link to="/burdah" class="w-full relative p-3 my-6 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 border border-amber-900 text-xl rounded">
        Burdah
        <span class="absolute right-5"><i class="fas fa-circle-chevron-right text-sm"></i></span>
      </router-link>
      <router-link to="qasidah-muhammadiyah" class="w-full relative p-3 my-6 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 border border-amber-900 text-xl rounded">
        Muhammadiyah
        <span class="absolute right-5"><i class="fas fa-circle-chevron-right text-sm"></i></span>
      </router-link>
    </div>

    <div class="absolute bottom-3 z-10">
      <img src="@/assets/img/art-arabic-2.png" class="md:w-1/12 w-3/12 mx-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeScreen"
}
</script>

<style scoped>

</style>