<template>
  <div>
    <div class="flex justify-between mb-8">
      <router-link to="/" class="text-base underline">
        <span><i class="fas fa-long-arrow-left mr-2"></i></span>
        Pilihan Kitab
      </router-link>

      <router-link to="/burdah" class="text-base underline">
        Burdah
        <span><i class="fas fa-long-arrow-right ml-2"></i></span>
      </router-link>
    </div>
    <div class="mb-5 p-8 text-center relative">
      <h4 class="text-4xl">Yaasin Fadhilah</h4>
      <p class="italic font-amiri">يسٓ فضيله</p>

      <div class="relative mt-8 flex justify-center items-center">
        <img src="@/assets/img/art-arabic-1.png" style="width: 100px" class="mx-auto absolute">
        <p class="font-amiri italic">{{ 1 }}</p>
      </div>
    </div>

    <DisplayTextComponent v-for="(item, index) in getYaasinText" :key="index" :data="item" />

    <div class="lg:w-10/12 w-11/12 mx-auto mb-8">
      <router-link
          to="/burdah"
          class="w-full bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 p-3 mb-5 rounded flex items-center justify-center shadow-xl lg:text-xl text-sm"
      >
        Qasidah Burdah
        <span>
          <i class="fas fa-long-arrow-right ml-3"></i>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import YaasinFadhilah from "@/enums/YaasinFadhilah";
import DisplayTextComponent from "@/components/DisplayTextComponent.vue";

export default {
  name: "YasinFadhilahScreenComponent",
  components: {DisplayTextComponent},
  computed: {
    getYaasinText() {
      return [YaasinFadhilah]
    }
  }
}
</script>

<style scoped>

</style>