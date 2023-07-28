<template>
  <div class="mb-10">
    <div
        class="
          flex justify-center
          bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 border
          rounded py-8 px-8 relative drop-shadow-xl z-10 border-amber-900"
    >
      <div>
        <p v-if="data.title.ar" class="text-lg italic mb-5 font-amiri tracking-normal">{{ data.title.ar }}</p>
        <p class="text-xl" v-html="data.title.id"></p>
      </div>
      <button class="bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 border rounded-full text-amber-50 p-2 text-sm absolute -bottom-3">
        <span class="flex"><i class="fas fa-circle-chevron-down"></i></span>
      </button>
    </div>

    <div
        v-for="(item, idx) in data.text"
        :key="idx"
        :class="idx % 2 ? 'bg-amber-100' : 'bg-amber-50'"
        class="lg:px-8 px-5 py-8 rounded border-b-2 border-solid border-amber-500 relative"
    >
      <div class="text-right mb-5">
        <p class="relative font-amiri" v-html="item[0].ar"></p>
      </div>
      <div class="text-center">
        <p class="lg:text-lg text-sm italic" v-html="item[0].id"></p>
      </div>

      <div v-if="item.length > 1">
        <hr class="my-6 border-amber-500 border-dashed">
        <div class="md:text-left text-right mb-5">
          <p class="relative font-amiri" v-html="item[1].ar"></p>
        </div>
        <div class="text-center">
          <p class="lg:text-lg text-sm italic" v-html="item[1].id"></p>
        </div>
      </div>

      <div class="absolute lg:-bottom-1 bottom-3 z-10">
        <img src="@/assets/img/art-arabic-2.png" class="w-1/12 mx-auto">
      </div>
    </div>
    <div v-if="!data.text.length" class="px-8 py-8 bg-amber-50 rounded border-b-2 border-solid border-amber-500">
      <p class="text-lg">Text belum diinput.</p>
    </div>

    <hr class="border-slate-300 my-10 border-2 border-double w-2/5 mx-auto">
  </div>
</template>

<script>
export default {
  name: "ButtonFasalComponent",
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isExpand: false
    }
  },
  methods: {
    setActiveTab() {
      this.isExpand = !this.isExpand
    }
  }
}
</script>

<style scoped>
  .end-ayah {
    font-size: 0.6rem;
  }
</style>