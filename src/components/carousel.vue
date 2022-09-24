<template>
  <div class="carousel">
    <div
      class="flex justify-between items-center absolute text-white top-15 navigate toggle w-full h-full"
    >
      <div
        class="p-3 rounded-full hover:bg-blue-500 left xs:hidden"
        @click="previousSlide"
      >
        <i
          class="fa fa-chevron-left font-bold text-2xl flex justify-center items-center xs:hidden"
        ></i>
      </div>
      <div
        class="p-3 rounded-full hover:bg-blue-500 xs:hidden"
        @click="nextSlide"
      >
        <i class="fa fa-chevron-right font-bold text-2xl xs:hidden"></i>
      </div>
      <div class="absolute flex items-right call_to_action">
        <button
          class="btn-primary p-2 bg-kekaBlue text-white text-bold rounded-lg shadow-md"
        >
          Get Started
        </button>
      </div>
      <div class="absolute bottom-6 right-4">

          <i
            class="fa fa-arrow-down animate-bounce w-8 h-8 border-2 border-blue-500 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
          </i
        >
      </div>

      <div
        class="absolute bottom-6 flex items-center w-full justify-center gap-4 pagination"
      >
        <span
          v-for="(slide, index) in getTotalSlides"
          :key="index"
          class="w-4 h-4 rounded-full bg-white"
          :class="{ active: index + 1 === currentSlide }"
          @click="goToSlide(index)"
        >
        </span>
      </div>
    </div>

    <slot :currentSlide="currentSlide"> </slot>
  </div>
</template>
<script>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const currentSlide = ref(1);
    const autoPlayEnabled = ref(true);
    const getTotalSlides = ref(0);
    const nextSlide = () => {
      if (currentSlide.value === getTotalSlides.value) {
        currentSlide.value = 1;
        // console.log(currentSlide.value);
        return;
      }
      currentSlide.value += 1;
      // console.log(currentSlide.value);
    };
    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    const previousSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 3;
        // console.log(currentSlide.value);

        return;
      }
      currentSlide.value -= 1;
      // console.log(currentSlide.value);
    };
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, 5000);
    };

    onMounted(() => {
      getTotalSlides.value = document.querySelectorAll(".section").length;
      // console.log(getTotalSlides.value);
      autoPlay();
    });
    return {
      currentSlide,
      nextSlide,
      getTotalSlides,
      previousSlide,
      goToSlide,
      autoPlay,
      autoPlayEnabled,
    };
  },
};
</script>
<style scoped>
.navigate {
  z-index: 2;
}
.active {
  background-color: aqua;
}
.pagination {
  z-index: 3;
}
.call_to_action {
  top: 70%;
  left: 8%;
  transition: transform 1 s ease-in-out;
}
.call_to_action button:hover {
  background: rgb(12, 12, 215);
  transform: scale(1.1);
}
</style>