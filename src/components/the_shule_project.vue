<template>
<div>
<navigation/>
          <div class=" hero my-10">  
            <div class="pt-10">
              <div
                class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2"
              >
                <p
                  class="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start"
                >
                  The Right ICT Solutions Designed by You
                </p>
                <p
                  class="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left"
                >
                  We design and implement end to end managed technologies that
                  are agile, scalable, and precisely sized to run your
                  organization optimally, simply, cost-effectively with accurate
                  financial and performance predictivity on a subscription basis
                  .
                </p>
                <div class="text-center flex justify-start mx-5">
                  <button
                    class="bg-kekaBlue rounded-[20px] text-white px-6 py-2"
                    @click="scrollToServices"
                  >
                    Learn More
                  </button>
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
    
  },
}
</script>