<template>
<div>
<navigation/>
       <div class="relative">
        <div class="overlay"></div>
        <div
          class="bg-cover object-fit  pt-10 pb-20  section"
          :style="{ backgroundImage: `url(${slide})`  }"
        >
          <div class="">
            <div
              class="text-white  md:ml-10 lg:ml-10 md:pl-10 lg:px-10  absolute"
            >
              <p
                class=" mt-10 mb-10 pt-10 font-bold text-3xl text-white  flex justify-right text-left align-content-start"
              >
                DEVICE AS A SERVICE FOR BUSINESS
              </p>
              <p
                class="mb-10 font-bold text-lg text-white flex justify-left text-left   lg:w-2/5"
              >
               Device as a Service (DaaS) equips businesses with a full PC fleet, IT support, and device life-cycle management packaged together in one subscription-based offering.
              </p>
              <span class="bg-kekaBlue px-5 mt-10 py-3 rounded-[25px] hover:bg-white hover:text-black shadow-lg">  Talk to us </span>
            </div>
          </div>
        </div>
      </div>
<Footer/></div>
</template>
<script>
import navigation from "./navigation.vue";
import Footer from "./footer.vue";
export default {
  components:{
    navigation,
    Footer
  },
  setup() {
    const slide = require("../assets/daascop2.jpg");
    return {
      slide,
    };
  },
}
</script>
<style>
.section {
  background-position: right;
}
</style>