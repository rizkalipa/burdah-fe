<template>
  <div class="mb-10">
    <div
        class="
          flex justify-center
          bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 border
          rounded py-8 px-8 relative drop-shadow-xl z-10 border-amber-900"
    >
      <div>
        <p class="text-lg italic mb-8">{{ data.title.ar }}</p>
        <p class="text-2xl" v-html="data.title.id"></p>
      </div>
      <button class="bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 border rounded-full text-amber-50 p-2 text-sm absolute -bottom-3">
        <span class="flex"><i class="fas fa-circle-chevron-down"></i></span>
      </button>
    </div>

    <div
        v-for="(item, idx) in data.text"
        :key="idx"
        :class="idx % 2 ? 'bg-amber-100' : 'bg-amber-50'"
        class="px-8 py-8 rounded border-b-2 border-solid border-amber-500"
    >
      <div class="text-right">
        <p class="relative" v-html="item[0].ar"></p>
      </div>
      <hr class="my-6 border-amber-500 border-dashed">
      <div class="md:text-left text-right">
        <p class="relative" v-html="item[1].ar"></p>
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