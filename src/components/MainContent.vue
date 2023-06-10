<template>
  <div class="lg:w-6/12 md:w-8/12 w-11/12 mx-auto my-16 text-amber-950 text-2xl leading-relaxed tracking-wider">
    <div class="rounded mb-5 p-8 text-center">
      <h4 class="text-4xl">Qasidah Burdah Al Madih</h4>
      <p class="italic">قصيدة البردة</p>
    </div>

    <ButtonFasalComponent v-for="(item, idx) in getBurdahData" :key="idx" :data="item" />

    <button
      v-if="isLimitPage"
      @click="getNextPage"
      class="w-full bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 p-3 mb-5 rounded flex items-center justify-center shadow-xl"
      v-html="formatLabelNextBtn"
    >

    </button>

    <div class="flex bg-amber-50 rounded flex justify-between text-xl">
      <button v-if="true" @click="getPreviousPage" class="px-5 py-3 rounded hover:underline">
        {{ `Sebelumnya` }}
      </button>

      <div class="flex justify-between overflow-auto">
        <p
          v-for="idx in countBurdahData"
          class="px-5 py-3 w-full cursor-pointer hover:underline rounded"
          :class="(parseInt(idx)) == parseInt(currentPage + 1) ? 'bg-amber-400' : ''"
          :key="idx"
          @click="currentPage = idx - 1"
        >
          {{ idx }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonFasalComponent from "@/components/ButtonFasalComponent.vue";
import Burdah from "@/enums/Burdah";

export default {
  name: "MainContent",
  components: {ButtonFasalComponent},
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
        Berikutnya (${this.getNextTitle.id})<span class="ml-5 flex items-center"><i class="fas fa-long-arrow-right"></i></span>`
    }
  },
  methods: {
    getNextPage() {
      if (this.currentPage < (Burdah.length - 1)) this.currentPage += 1
    },
    getPreviousPage() {
      if (this.isEndPage) this.currentPage -= 1
    }
  },
}
</script>

<style scoped>

</style>