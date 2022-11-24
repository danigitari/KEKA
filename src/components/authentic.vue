<template>
  <div>
    <navigation />
    <div class="bg-gray-100">
      <div
        class="bg-cover object-fit pt-10 section"
        :style="{ backgroundImage: `url(${slide})` }"
      >
        <div class="pt-10">
          <div
            class="flex justify-center text-4xl text-white font-bold pb-10 pl-10"
          >
            AUTHENTIC ANTI-COUNTERFEIT SOLUTIONS
          </div>
          <div class="flex justify-center text-white text-xl pl-10">
            We create human friendly solutions protecting consumers , brands and
            producers for quality consumption and revenue enhancement.
          </div>
        </div>
      </div>

      <div class="p-10 mb-10">
        <div class="flex flex-col items-center justify-center p-10">
          <div class="text-3xl p-5 font-bold text-center">
            We protect people and brands.
          </div>
        </div>
        <div class="grid grid-cols-5">
          <div class="col-span-3 col-start-2 text-center">
            We protect consumers by making it easy to distinguish originals from
            fakes – and safeguard brand and product originality in the process.
            We see ourselves as protectors of people’s health and guardians of
            product originality.
          </div>
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 py-5">
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl my-10 text-center font-bold">
            Easy set-up with maximum compatibility
          </p>
          <p
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10 text-sm"
          >
            As Guardians of authenticity, we think of anti-counterfeiting
            differently, so that everyone can use it, in any corner of the
            world, at any time. We give everyone and every company access to
            counterfeit protection, free of charge and with no barriers to
            entry. To do this, we use existing infrastructures such as
            conventional printers to print out the authentic.code and standard
            smartphones to scan the code. The scan is possible offline from
            anywhere – even under water.
          </p>
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2 my-5 text-center">
          <img
            src="../assets/authentic_b.jpg"
            class="lg:px-20 xs:px-10 h-96 flex items-center"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 pb-5">
        <div class="sm:w-full xs:w-full lg:w-1/2 my-5 px-10 text-center">
          <img
            src="../assets/authentic_c.jpg"
            class="md:pl-10 h-96 flex items-center"
            alt=""
          />
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl my-10 text-center font-bold">
            High-safety counterfeit protection
          </p>
          <p
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10 text-sm"
          >
            To keep it secure, counterfeit-proof and yet simple, we work with a
            wide range of behind-the-scenes technologies. Our patented
            cryptographic printing process turns conventional printersinto
            security printers. The blockchain connects an unassailable physical
            code with an ambiguous digital twin and secures it one hundred
            percent. A KI determines usage patterns, makes them analyzable and
            detects attacks at an early stage in order to eliminate them
            independently. This eliminates the possibility of contaminated
            codes. The combination makes counterfeit protection easier and more
            secure than ever before.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 py-5">
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl my-10 text-center font-bold">
            Flexible business scaling
          </p>
          <p
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10 text-sm"
          >
            Counterfeiting reduces company sales by 13 trillion EUR every year.
            authentic protects you and your brand from these economic losses and
            reputation damage. Once your product is protected, you can extend it
            with digital services. This way you give your customers maximum
            transparency to further strengthen your company's reputation. Your
            customer has never been closer to your brand than with authentic!
          </p>
        </div>
        <div
          class="sm:w-full xs:w-full lg:w-1/2 my-5 lg:px-20 xs:px-10 text-center"
        >
          <img
            src="../assets/authentic_d.jpg"
            class="p-5 h-96 flex items-center"
            alt=""
          />
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-xl py-10 font-bold">
          EXTERNAL THREATS AND CHALLENGES
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import navigation from "./navigation.vue";
import Footer from "./footer.vue";

export default {
  components: {
    navigation,
    Footer,
  },
  setup() {
    const slide = require("../assets/authentic_a.jpg");
    const swipe = () => {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    };
    onMounted(() => {
      swipe();
    });
    return {
      slide,
      swipe,
    };
  },
};
</script>
<style>
/* .section  {
  height: 300px;
} */
.dropdown-menu {
  top: calc(100% + 0.5rem);
  width: max-content;
  opacity: 0;
  transition: 0.5s ease-in-out;
  transform: translateY(-10px);
  z-index: 5;
}
.daas-dropdown-menu {
  display: none;
  transition: 0.5s ease-in-out;
  transform: translate(-10px);
}
.daas-dropdown:hover .daas-dropdown-menu {
  opacity: 1;
  z-index: 5;
  display: block;
  transform: translateY(0px);
}
.dropdown:hover .dropdown-menu {
  top: calc(100% + 0.5rem);
  width: max-content;
  opacity: 1;
  transition: 0.5s ease-in-out;
  transform: translateY(0px);
  z-index: 5;
}
</style>
