<template>
  <div>
    <navigation />
    <div class="relative">
      <div class="overlay"></div>
      <div
        class="bg-cover object-fit pt-10 pb-20 section"
        :style="{ backgroundImage: `url(${slide})` }"
      >
        <div class="">
          <div class="text-white md:ml-10 lg:ml-10 md:pl-10 px-10 absolute">
            <p
              class="mt-10 mb-10 pt-10 px-10font-bold text-3xl text-white flex justify-right text-left align-content-start"
            >
               DEVICE AS A SERVICE FOR BUSINESS
            </p>
            <p
              class="mb-10 font-bold text-lg text-white flex justify-left text-left  lg:w-2/5"
            >
              Device as a Service (DaaS) equips businesses with a full PC fleet,
              IT support, and device life-cycle management packaged together in
              one subscription-based offering.
            </p>
            <span
              class="bg-kekaBlue px-5 mt-10 py-3 rounded-[25px] hover:bg-white hover:text-black shadow-lg"
            >
              Talk to us
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center font-bold text-xl pt-10 p-5">
      Technology: A crucial investment for modern businesses
    </div>
    <div class="flex justify-center p-10">
      Device as a Service (DaaS) is a subscription-based service that offers
      businesses a full range of end-user devices as well as managed IT support
      all in one package. We take charge of distributing, provisioning, and
      managing devices for your workers in the office, at home, or on the road
      in a DaaS deployment. We standardise on Intel vPro® which is designed to
      meet the needs of IT. And Intel® EvoTM laptops provide what mobile users
      require. These 2 technolgies work together to create a new class of
      stylish, thin-and-light laptops that combine key IT features like
      multilayer security and complete manageability with a premium user
      experience like remarkable responsiveness, instant wake, intelligent
      collaboration, and longer real-world battery life. Intel vPro®, An Evo
      design-based devices are the best choice for DaaS. To cement this all
      together, we use VMWare Unified Endpoint Management with BIOS capabilities
      to deploy full support of the devices even when they are switched off.
      delivering a Work from Anywhere experience for your workers. And we are
      registered partners for all major manufacturers whose Logos feature in
      this document. This gives you freedom of choice on brand while benfiting
      from our DaaS. 
    </div>
    <div class="lg:flex md:flex justify-center mb-10">
      <div class="p-5 flex flex-col card sm:w-full  md:w-1/2 lg:w-1/4">
        <div class="text-3xl text-kekaBlue  flex  justify-center">57%</div>
        <div class="p-3 text-center">of SMBs plan to increase their budget to equip work-from-home employees 1*</div>
      </div>
      <div class="p-5 flex flex-col card w-full  md:w-1/2 lg:w-1/4">
        <div class="text-3xl text-kekaBlue  flex  justify-center">43%</div>
        <div class="p-3 text-center">of data breaches now affect SMBs 2* </div>

      </div>
      <div class="p-5 flex flex-col card w-full  md:w-1/2 lg:w-1/4">
        <div class="text-3xl text-kekaBlue  flex  justify-center"> 60%</div>
        <div class="p-3 text-center">of SMBs who accelerated their tech investments during the pandemic did so to improve business agility 3*</div>
      </div>
      <div class="p-5 flex flex-col card w-full  md:w-1/2 lg:w-1/4">
        <div class="text-3xl text-kekaBlue  flex  justify-center"> 46%</div>
        <div class="p-3 text-center"> of employees say their software is frequently malfunctioning and disrupting their work 4*</div>
      </div>
    </div>
    <div  class="flex flex-col items-center justify-center p-10 bg-blue-500 text-white text-center lg:pr-20 lg:pl-20 mb-10" >
      Streamline workplace technology management and get our enhanced support by bundling tech service, hardware, and software with Device as a Service (DaaS) featuring the Intel vPro® platform. Advantages of Device as a Service (DaaS) DaaS is a flexible option that improves business agility and helps free up resources between enterprise IT departments, end user workforces, and decision-makers when used as part of a larger digital transformation strategy. Businesses of all sizes can benefit from device life-cycle management, PC configurations tailored to specific employee needs, and fast asset recovery to reduce downtime.
    </div>
    <Footer />
  </div>
</template>
<script>
import navigation from "./navigation.vue";
import Footer from "./footer.vue";
export default {
  components: {
    navigation,
    Footer,
  },
  setup() {
    const slide = require("../assets/daascop2.jpg");
    return {
      slide,
    };
  },
};
</script>
<style>
.section {
  background-position: right;
}
.card { 

 }
</style>
