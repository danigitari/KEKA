<template>
  <div class=" ">
    <div class="nav">
      <navigation />
    </div>

    <!-- :style=" {backgroundImage: `url(${backgroundimage})` }" -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper hero-section">
        <div class="swiper-slide relative">
          <div class="overlay absolute"></div>
          <div class="absolute w-full h-full">
            <img src="../assets/img1.jpg" alt="" />
          </div>
          <div class="absolute hero my-10">
            <div class="pt-10">
              <div
                class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute"
              >
                <p
                  class="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start"
                >
                  THE RIGHT ICT SOLUTIONS DESIGNED BY YOU
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
        </div>
        <div class="swiper-slide relative">
          <div class="overlay absolute"></div>
          <div class="absolute w-full h-full">
            <img src="../assets/board.jpeg" alt="" />
          </div>
          <div class="absolute hero mt-10 pt-10">
            <div
              class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute"
            >
              <p
                class="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start"
              >
                DEVICE AS A SERVICE FOR BUSINESS
              </p>
              <p
                class="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left"
              >
                Device as a Service (DaaS) equips businesses with a full PC
                fleet, IT support, and device life-cycle management packaged
                together in one subscription-based offering. .
              </p>
              <div class="text-center flex justify-start mx-5">
                <button
                  class="bg-kekaBlue rounded-[20px] text-white px-6 py-2"
                  @click="goToDaasBusiness"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide relative">
          <div class="overlay absolute"></div>
          <div class="absolute w-full h-full">
            <img src="../assets/daas_school.jpg" alt="" />
          </div>
          <div class="absolute hero mt-10 pt-10">
            <div
              class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute"
            >
              <p
                class="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start"
              >
                DEVICE AS A SERVICE FOR SCHOOLS
              </p>
              <p
                class="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left"
              >
                Device as a Service (DaaS) equips businesses with a full PC
                fleet, IT support, and device life-cycle management packaged
                together in one subscription-based offering.
              </p>
              <div class="text-center flex justify-start mx-5">
                <button
                  class="bg-kekaBlue rounded-[20px] text-white px-6 py-2"
                  @click="goToDaasEducation"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide relative">
          <div class="overlay absolute"></div>

          <div class="absolute w-full h-full">
            <img src="../assets/authentic_a.jpg" alt="" />
          </div>
          <div class="absolute hero mt-10 pt-10">
            <div
              class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute"
            >
              <p
                class="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start"
              >
                AUTHENTIC ANTI-COUNTERFEIT SOLUTIONS
              </p>

              <p
                class="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left"
              >
                We create human friendly solutions protecting consumers , brands
                and producers for quality consumption and revenue enhancement.
              </p>
              <div class="text-center flex justify-start pl-5">
                <button
                  class="bg-kekaBlue rounded-[20px] text-white px-6 py-2"
                  @click="goToAuthentic"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next text-white"></div>
      <div class="swiper-button-prev text-white"></div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="bg-white pt-20 pb-20">
      <div class=" ">
        <p class="text-2xl font-bold m-10 text-dark flex justify-center">
          OUR SERVICES
        </p>
      </div>
      <div class="flex flex-wrap justify-center mb-10">
        <div class="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
          <h4 class="text-kekaBlue font-bold py-5">Aws Managed services</h4>
          <p class="leading-relaxed mb-3 text-sm">
            We design and build secure, high-performance, resilient, and
            efficient cloud infrastructure for a wide range of applications and
            workloads. Premised on six pillars—operational excellence, security,
            reliability, performance efficiency, cost optimization, and
            sustainability
          </p>
          <div class="flex justify-start py-5">
            <button class="rounded-[20px] text-kekaBlue">Learn More</button>
          </div>
        </div>
        <div class="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
          <h4 class="text-kekaBlue font-bold py-5">
            Device as a Service - Education
          </h4>
          <p class="leading-relaxed mb-3 text-sm">
            Managed Device Services specifically designed for Students with
            Education in mind. We Track Deploy, Manage, Maintain and protect the
            devices .
          </p>
          <div class="flex justify-start py-5">
            <button
              class="rounded-[20px] text-kekaBlue"
              @click="goToDaasEducation"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
          <h4 class="text-kekaBlue font-bold py-5">
            Device as a Service - Business
          </h4>
          <p class="leading-relaxed mb-3 text-sm">
            Designed for business to meet all your end-user technology needs at
            a single predictable monthly payment Modern End User Experience IT
            Efficiency with Lower Costs Predictable Monthly
          </p>
          <div class="flex justify-start py-5">
            <button
              class="rounded-[20px] text-kekaBlue"
              @click="goToDaasBusiness"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
          <h4 class="text-kekaBlue font-bold py-5">
            Authentic Anticounterfeit Solution
          </h4>
          <p class="leading-relaxed mb-3 text-sm">
            A proprietary print and recognition technology built for global
            usage under challenging conditions, connected to value-added
            services that protect your brand and intellectual property as a
            manufacturer
          </p>
          <div class="flex justify-start py-5">
            <button class="rounded-[20px] text-kekaBlue" @click="goToAuthentic">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center p-10 bg-blue-500 text-white"
      >
        <div class="text-2xl p-5 font-bold text-center">
          Why you need DaaS for business
        </div>
      </div>
      <div class="grid grid-cols-7 bg-blue-500 text-white">
        <div class="col-span-5 col-start-2 text-center">
          Organizations that use DaaS save 20% on lifecycle service costs. DaaS
          reduces costs in areas such as procurement, imaging, physical
          installation, final preparation and migration, system management,
          support, asset disposition, and retirement. Employees benefit by
          receiving devices that are two years newer on average, which drives
          employee experience benefits while also reducing lifecycle associated
          costs. Both deployment and support ticket resolution times also
          improve.

          <div class="flex justify-center p-10 p-2">
            <router-link
              to="device-as-a-service-cooperate"
              class="py-3 px-8 call_to_action1 text-white rounded-[30px] border-white"
            >
              LEARN MORE
            </router-link>
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
        <!-- 
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
        </div> -->

        <div class="flex">
          <div class="sm:w-full lg:w-1/2 xs:w-full p-5 team">
            <div>
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-96 lg:h-96 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${ken})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">KEN KAGOTA</p>
              <p class="text-sm text-center">MANAGING DIRECTOR</p>
              <div class="flex justify-center py-5 text-kekaBlue">
                <!-- <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i> -->
                <i class="fa-brands fa-linkedin linkedin-icon"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-full lg:w-1/2 xs:w-full p-5 team">
            <div>
              <div class="p-2 flex items-center justify-center">
                <div
                  class="lg:w-96 lg:h-96 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  :style="{ backgroundImage: `url(${eva})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">EVA</p>
              <p class="text-sm text-center">SALES DIRECTOR</p>
              <div class="flex justify-center py-5 text-kekaBlue">
                <!-- <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i> -->
                <i class="fa-brands fa-linkedin linkedin-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="py-2 px-6 call_to_action bg-kekaBlue text-white rounded-[20px] shadow-md"
            @click.prevent="goToAbout"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div class="mt-20 mb-5 flex justify-center bg-gray-100">
        <p class="text-2xl font-bold m-10 text-dark">OUR PARTNERS</p>
      </div>
      <div class="mx-10">
        <div class="swiper mySwiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide bg-white">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${acer})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${aws})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${dell})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="p-2 w-56 h-32 partner"
                :style="{ backgroundImage: `url(${intel})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${dot})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="p-2 w-64 h-36 partner"
                :style="{ backgroundImage: `url(${lenovo})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${vmware})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${hp})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="p-2 w-64 h-36 partner"
                :style="{ backgroundImage: `url(${authentic})` }"
              ></div>
            </div>
            <div class="swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${huawei})` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact bg-gray-100 p-10">
      <p class="text-2xl font-bold m-10 text-dark flex justify-center">
        CONTACT US
      </p>
      <div class="text-center m-10">
        <div class="grid grid-cols-8">
          <div class="col-span-6 col-start-2">
            All our solutions are built upon best practices and well architeted
            frameworks to get the best results possible. Please click below to
            email our consultants. we will review your needs and develop a proof
            of concept
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="py-2 px-6 call_to_action bg-kekaBlue text-white rounded-[20px] shadow-md"
        >
          <a href="mailto:info@kekaprecision.com"> Book a consultation </a>
        </button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { onMounted, ref } from "@vue/runtime-core";
import carousel from "../components/carousel.vue";
import carouselSlide from "../components/carouselSlide.vue";
import navigation from "../components/navigation.vue";
import Footer from "../components/footer.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    carousel,
    carouselSlide,
    navigation,
    Footer,
  },
  setup() {
    const visibleSlide = 0;
    const isOpen = ref(false);
    const router = useRouter();
    const backgroundimage = require("../assets/img3.jpg");
    const slides = [
      require("../assets/img1.jpg"),
      require("../assets/board.jpeg"),
      require("../assets/Performance-user.jpg"),
    ];
    // team images
    const ernest = require("../assets/ernest2.jpg");
    const elvis = require("../assets/elvis3.jpg");
    const ken = require("../assets/ken2.jpg");
    const me = require("../assets/me.jpeg");
    const dan = require("../assets/dan2.jpg");
    const zippy = require("../assets/zippy2.jpg");
    const sam = require("../assets/sam2.jpg");
    const florence = require("../assets/florence2.jpg");
    const innocent = require("../assets/innocent2.jpg");
    const eva = require("../assets/eva1.jpg");

    // partners images
    const vmware = require("../assets/vmware.png");
    const dell = require("../assets/dell.jpeg");
    const lenovo = require("../assets/lenovo.png");
    const hp = require("../assets/hp.png");
    const intel = require("../assets/intel.png");
    const acer = require("../assets/acer.png");
    const aws = require("../assets/aws2.jpg");
    const dot = require("../assets/dot.png");
    const authentic = require("../assets/authentic.jpg");
    const huawei = require("../assets/huawei.jpeg");

    const getStarted = () => {
      alert("I was clicked");
    };
    const swipe = () => {
      var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
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
    const swipeHeroSection = () => {
      var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        mousewheel: true,
        keyboard: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
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
    const goToDaasBusiness = () => {
      router.push({ name: "daas_cooperate" });
    };
    const goToDaasEducation = () => {
      router.push({ name: "theShuleProject" });
    };
    const goToAuthentic = () => {
      router.push({ name: "authentic" });
    };
        const goToAbout = () => {
      router.push({ name: "about-us" });
    };
    const scrollToServices = () => {
      let element = document.querySelector(".service");
      console.log(element);
      element.scrollIntoView({ behaviour: "smooth" });
    };
    const toggleNavbarClass = () => {
      window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("sticky", window.scrollY > 0);
      });
    };
    onMounted(() => {
      swipe();
      swipeHeroSection();
      toggleNavbarClass();
    });

    return {
      router,
      scrollToServices,
      toggleNavbarClass,
      goToDaasBusiness,
      goToDaasEducation,
      goToAuthentic,
      goToAbout,
      visibleSlide,
      swipeHeroSection,
      backgroundimage,
      ken,
      sam,
      me,
      dan,
      innocent,
      zippy,
      elvis,
      florence,
      ernest,
      eva,
      slides,
      getStarted,
      swipe,
      vmware,
      acer,
      aws,
      intel,
      dot,
      lenovo,
      dell,
      hp,
      huawei,
      authentic,
      isOpen,
    };
  },
};
</script>
<style scoped>
.nav {
  z-index: -1;
}
.swiper-button-next {
  opacity: 0;
  font-size: 10px;
  transition: all 0.5s ease;
}
.swiper-button-prev:hover {
  opacity: 0.7;
}
.nav {
  transition: all 0.5s ease;
}
.swiper-button-next:hover {
  opacity: 0.7;
}

.swiper-button-prev {
  opacity: 0;
}
.getstarted {
  pointer-events: auto;
}
.hero-section {
  height: 550px;
}
.section {
  z-index: 1;
}
.linkedin-icon {
  transform: scale(1.5);
}
.services {
  transition: transform 0.2s ease-in;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
}
.services:hover {
  transform: scale(1.05);
}
.team {
  transition: transform 0.5s ease;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.team:hover {
  transform: scale(1.1);
}
/* .contact {
  background-image: url("../assets/contact.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
} */
.call_to_action {
  transition: transform 0.3s ease;
}
.call_to_action1 {
  transition: transform 0.3s ease;
  border: 2px solid rgb(255, 255, 255) !important;
  z-index: 11;
}
.call_to_action1:hover {
  transform: scale(1.1);
  /* background-color: #ec1b35; */
}
.call_to_action:hover {
  transform: scale(1.1);
  /* background-color: #ec1b35; */
}
.partner {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.overlay {
  opacity: 0.5;
  z-index: 6;
  width: 100%;
  height: 100%;
}
.hero-text {
  z-index: 8;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 30%;
  transition: all 1s ease;
}
.hero-text1 {
  z-index: 8;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 45%;
  transition: all 1s ease;
  padding: 0px 40px;
}
.hero {
  z-index: 12;
  width: 100%;
  height: 100%;
}
.show {
  transform: translateY(100px);
  position: absolute;
  color: #fff;
  font-size: 40px;
  z-index: 8;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 35%;
}
.hero-text2 {
  z-index: 11;
  top: 60%;
  left: 43%;
}
/* .team-lead {
  height: 300px;
  width: 300px;
  background-repeat: no-repeat;
} */
.photos {
  background-position: top center;
  background-size: cover;
}
.sticky {
  background-color: #fff;
  position: fixed;
  z-index: 10;
  width: 100%;
  /* height: 80px; */
  transition: all 0.5s ease;
  box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .sticky {
    /* height: 100px !important; */
  }
  .services {
    width: 90% !important;
    margin: 20px 10px;
  }
}
</style>
