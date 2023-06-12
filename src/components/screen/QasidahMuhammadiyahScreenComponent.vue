<template>
  <div>
    <div class="flex justify-between mb-8">
      <router-link to="/" class="text-base underline">
        <span><i class="fas fa-long-arrow-left mr-2"></i></span>
        Pilihan Kitab
      </router-link>

      <router-link to="/burdah" class="text-base underline">
        Burdah
        <span><i class="fas fa-long-arrow-right mr-2"></i></span>
      </router-link>
    </div>
    <div class="rounded mb-5 p-8 text-center relative">
      <h4 class="text-4xl">Qasidah Muhammadiyah</h4>
      <p class="italic font-amiri">قصيدة</p>

      <div class="relative mt-8 flex justify-center items-center">
        <img src="@/assets/img/art-arabic-1.png" style="width: 100px" class="mx-auto absolute">
        <p class="font-amiri italic">{{ 1 }}</p>
      </div>
    </div>

    <DisplayTextComponent v-for="(item, idx) in getQasidahData" :key="idx" :data="item" />
  </div>
</template>

<script>
import DisplayTextComponent from "@/components/DisplayTextComponent.vue";
import QasidahMuhammadiyah from "@/enums/QasidahMuhammadiyah";
export default {
  name: "QasidahMuhammadiyahScreenComponent",
  components: {DisplayTextComponent},
  computed: {
    getQasidahData() {
      return [QasidahMuhammadiyah]
    }
  }
}
</script>

<style scoped>

</style>