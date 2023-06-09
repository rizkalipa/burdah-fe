<template>
  <div class="lg:w-6/12 md:w-8/12 w-11/12 mx-auto my-16 text-amber-950 text-2xl leading-relaxed tracking-wider">
    <div class="rounded mb-5 p-8 text-center">
      <h4 class="text-4xl">Qasidah Burdah Al Madih</h4>
      <p class="italic">قصيدة البردة</p>
    </div>

    <ButtonFasalComponent v-for="(item, idx) in getBurdahData" :key="idx" :data="item" />
  </div>
</template>

<script>
import ButtonFasalComponent from "@/components/ButtonFasalComponent.vue";
import Burdah from "@/enums/Burdah";

export default {
  name: "MainContent",
  components: {ButtonFasalComponent},
  computed: {
    getBurdahData() {
      return [...Burdah]
    }
  },
  mounted() {
    console.log(Burdah)
  }
}
</script>

<style scoped>

</style>