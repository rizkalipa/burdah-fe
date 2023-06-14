<template>
  <div>
    <div class="flex justify-between mb-8">
      <router-link to="/" class="text-base underline">
        <span><i class="fas fa-long-arrow-left mr-2"></i></span>
        Pilihan Kitab
      </router-link>

      <router-link to="/qasidah-muhammadiyah" class="text-base underline">
        Muhammadun Asyrofu
        <span><i class="fas fa-long-arrow-right ml-2"></i></span>
      </router-link>
    </div>

    <div class="rounded mb-5 p-8 text-center relative">
      <h4 class="text-4xl">Qasidah Burdah Al Madih</h4>
      <p class="italic font-amiri">قصيدة البردة</p>

      <div class="relative mt-8 flex justify-center items-center">
        <img src="@/assets/img/art-arabic-1.png" style="width: 100px" class="mx-auto absolute">
        <p class="font-amiri italic">{{ currentPage + 1 }}</p>

        <div class="absolute flex items-center justify-between top-0 bottom-0 w-full">
          <button :class="!isEndPage ? 'text-gray-200' : 'text-amber-950'" @click="getPreviousPage"><span><i class="fas fa-circle-arrow-left"></i></span></button>
          <button :class="!isLimitPage ? 'text-gray-200' : 'text-amber-950'" @click="getNextPage"><span><i class="fas fa-circle-arrow-right"></i></span></button>
        </div>
      </div>
    </div>

    <div class="mb-5 lg:px-8 px-5 pb-8">
      <p class="text-lg font-amiri mb-5" v-html="getMuqaddimah.text.ar"></p>
      <p class="text-sm" v-html="getMuqaddimah.text.id"></p>
    </div>

    <DisplayTextComponent v-for="(item, idx) in getBurdahData" :key="idx" :data="item" />

    <div class="lg:w-10/12 w-11/12 mx-auto">
      <button
          v-if="isLimitPage"
          @click="getNextPage"
          class="w-full bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 p-3 mb-5 rounded flex items-center justify-center shadow-xl lg:text-xl text-sm"
          v-html="formatLabelNextBtn"
      >

      </button>

      <div class="flex bg-amber-50 rounded flex justify-between lg:text-xl text-sm">
        <button v-if="true" @click="getPreviousPage" class="px-5 py-3 rounded hover:underline">
          {{ `Sebelumnya` }}
        </button>

        <div class="flex justify-between overflow-auto">
          <p
              v-for="idx in countBurdahData"
              class="px-5 py-3 w-full cursor-pointer hover:underline rounded"
              :class="(parseInt(idx)) == parseInt(currentPage + 1) ? 'bg-amber-400' : ''"
              :key="idx"
              @click="setCurrentPage(idx)"
          >
            {{ idx }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DisplayTextComponent from "@/components/DisplayTextComponent.vue";
import Burdah from "@/enums/Burdah";
import Muqaddimah from "@/enums/Muqaddimah";

export default {
  name: "BurdahScreenComponent",
  components: {DisplayTextComponent},
  data() {
    return {
      currentPage: 0
    }
  },
  computed: {
    getBurdahData() {
      return [Burdah[this.currentPage]]
    },
    countBurdahData() {
      return Burdah.length
    },
    isLimitPage() {
      return this.currentPage < (Burdah.length - 1)
    },
    isEndPage() {
      return this.currentPage > 0
    },
    getNextTitle() {
      return Burdah[this.currentPage + 1].title
    },
    formatLabelNextBtn() {
      return `
        ${this.getNextTitle.id} <span class="ml-5 flex items-center"><i class="fas fa-long-arrow-right"></i></span>`
    },
    getMuqaddimah() {
      return Muqaddimah
    }
  },
  methods: {
    getNextPage() {
      if (this.currentPage < (Burdah.length - 1)) this.currentPage += 1
      window.scrollTo(0, 0)
    },
    getPreviousPage() {
      if (this.isEndPage) this.currentPage -= 1
      window.scrollTo(0, 0)
    },
    setCurrentPage(idx) {
      this.currentPage = idx - 1
      window.scrollTo(0, 0)
    }
  },
}
</script>

<style scoped>

</style>