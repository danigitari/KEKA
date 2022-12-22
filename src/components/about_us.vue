<template>
<navigation/>
          <div class="relative">
        <div class="overlay"></div>
        <div
          class="bg-cover object-fit  pt-10 pb-20  section"
          :style="{ backgroundImage: `url(${slide})`  }"
        >
          <div class="">
            <div
              class="text-white  md:ml-10 lg:ml-10 md:pl-10 px-10  absolute"
            >
              <p
                class=" mt-10 mb-10 pt-10 font-bold text-[30px]  md:text-[40px]   lg:text-[60px] text-white  flex justify-right text-left align-content-start"
              >
                  ABOUT US  
              </p>
              <p
                class="mb-10 font-bold text-lg text-white flex justify-left text-left   lg:w-2/5"
              >
                We have solutions for both schools and businesses. can be
                tailored to meet requirements for performance end users , mobile
                end users and producivity end users.
              </p>
              <span class="bg-kekaBlue px-5 mt-10 py-3 rounded-[25px] hover:bg-white hover:text-black shadow-lg">  Talk to us </span>
            </div>
          </div>
        </div>
      </div>
       <div class="mt-20 mb-20">
        <p class="text-2xl font-bold m-10 text-dark flex justify-center">
          OUR TEAM
        </p>
        <div class="text-center my-5">
          The team are professional cloud architects certified by AWS, VMWare
          and Intel on various cloud and device services
        </div>

        <div class="flex flex-wrap mx-10">
          <div class="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
            <div>
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${elvis})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">ELVIS MUNENE</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-kekaBlue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${zippy})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">ZIPPORAH WACHIRA</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-kekaBlue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${dan})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">DANIEL GITARI</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-kekaBlue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${ken})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">KEN KAGOTA</p>
              <p class="text-sm text-center">Managing Director</p>
              <div class="flex justify-center gap-3 py-5 text-kekaBlue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${sam})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">SAMUEL MUREKEFU</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-kekaBlue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${ernest})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">ERNEST OTIENO</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-kekaBlue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${innocent})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">INNOCENT MAMBO</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-kekaBlue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 xs:w-full sm:w-1/2 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${florence})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">FLORENCE SIMBA</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-kekaBlue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer/>
</template>
<script>
import navigation from "./navigation.vue";
import Footer from "./footer.vue";
import { onMounted } from 'vue'
export default {
  components:{
    navigation,
    Footer
  },
  setup() {
    const slide = require('../assets/team.jpg')
     const ernest = require("../assets/ernest2.jpg");
    const elvis = require("../assets/elvis3.jpg");
    const ken = require("../assets/ken2.jpg");
    const me = require("../assets/me.jpeg");
    const dan = require("../assets/dan2.jpg");
    const zippy = require("../assets/zippy2.jpg");
    const sam = require("../assets/sam2.jpg");
    const florence = require("../assets/florence2.jpg");
    const innocent = require("../assets/innocent2.jpg");
    const scrollToTop = () => {
      window.scrollY = 0;
    }
    onMounted(()=> {
      scrollToTop()
    })
    return {
      slide,
      ken,
      sam,
      me,
      dan,
      innocent,
      zippy,
      elvis,
      florence,
      ernest,
      scrollToTop,
    }
  },
}
</script>
<style>

.section {
  height: 550px;
  /* z-index: -1; */
  background-position: center;
}
.team {
  transition: transform 0.5s ease;
}
.team:hover {
  transform: scale(1.1);
}
.photos { 
  background-position: top center;
  background-size: cover;
}
</style>