<template>
  <div class="mb-10">
    <div
        class="flex justify-center bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 rounded py-8 px-8 relative cursor-pointer drop-shadow-xl z-10 border border-amber-900"
        @click="isExpand = !isExpand"
    >
      <div>
        <p class="text-lg italic mb-8">{{ data.title.ar }}</p>
        <p class="text-xl" v-html="data.title.id"></p>
      </div>
      <button class="bg-gradient-to-r from-amber-600 from-20% rounded-full text-amber-50 p-2 text-sm absolute -bottom-3">
        <span class="flex"><i class="fas fa-circle-chevron-down"></i></span>
      </button>
    </div>

    <Transition name="portfolio">
      <div v-if="isExpand" class="relative">
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
      </div>
    </Transition>

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
  }
}
</script>

<style scoped>
  .end-ayah {
    font-size: 0.6rem;
  }

  .portfolio-enter-active,
  .portfolio-leave-active {
    transition: all 300ms ease-in 0s
  }

  .portfolio-enter-to,
  .portfolio-leave {
    max-height: 1000px;
    overflow: hidden;
  }

  .portfolio-enter,
  .portfolio-leave-to {
    overflow: hidden;
    max-height: 0;
  }
</style>