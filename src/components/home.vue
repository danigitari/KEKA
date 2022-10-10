<template>
  <div class=" ">
    <nav class="relative lg:container lg:mx-auto sm:px-5 p-1">
      <div class="flex items-center justify-between">
        <div class="">
          <img class="h-24 w-full" src="../assets/logo.jpeg" />
        </div>
        <div class="hidden md:flex space-x-16">
          <router-link to="/" class="hover:text-kekaBlue"> Home </router-link>
          <div class="dropdown relative rounded-md hover:text-kekaBlue">
            <div class="hover:text-kekaBlue">
              Services <i class="fa fa-caret-down px-2" aria-hidden="true"></i>
            </div>
            <div class="dropdown-menu absolute bg-white shadow-lg">
              <router-link to="authentic-anti-counterfeit-solutions">
                <div class="p-3 border-2 hover:bg-kekaBlue hover:text-white">
                  Authentic
                </div>
              </router-link>
              <div class="p-3 border-2 hover:bg-kekaBlue hover:text-white">
                <router-link to="aws-managed-services">
                  Aws managed sevices
                </router-link>
              </div>
              <div class="daas-dropdown">
                <div class="p-3 border-2 hover:bg-kekaBlue hover:text-white">
                  <router-link to="device-as-a-service-solutions">
                    Daas as a service
                    <i class="fa fa-caret-down px-2" aria-hidden="true"></i>
                  </router-link>
                </div>
                <div class="daas-dropdown-menu">
                  <div class="p-3 border-2 hover:bg-kekaBlue hover:text-white">
                    <router-link to="the-shule-project">
                      The shule project
                    </router-link>
                  </div>
                  <div class="p-3 border-2 hover:bg-kekaBlue hover:text-white">
                    <router-link to="device-as-a-service-cooperate">
                      Daas cooperate
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/" class="hover:text-kekaBlue">
            Contact us</router-link
          >
          <router-link to="/" class="hover:text-kekaBlue">
            About us
          </router-link>
          <!-- <a href="" class="hover:text-kekaBlue"> Terms & Conditions </a>
          <a href="" class="hover:text-kekaBlue"> Opt-out Preferences </a> -->
        </div>
      </div>
    </nav>
    <!-- :style=" {backgroundImage: `url(${backgroundimage})` }" -->
    <carousel class="   " v-slot="{ currentSlide }">
      <carouselSlide
        v-for="(slide, index) in slides"
        :key="slide"
        :index="index"
      >
        <div v-show="currentSlide === index + 1" class="relative">
          <div class="overlay"></div>

          <div
            class="bg-cover object-fit h-screen pt-10 pb-20 xl:h-screen section"
            :style="{ backgroundImage: `url(${slide})` }"
          >
            <div class="pt-10">
              <div
                class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute"
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
              </div>
            </div>
          </div>
        </div>
      </carouselSlide>
    </carousel>

    <div class="bg-gray-100 pt-20 pb-20">
      <div class=" ">
        <p class="text-2xl font-bold m-10 text-dark flex justify-center">
          OUR SERVICES
        </p>
      </div>

      <div class="flex flex-wrap">
        <div class="sm:w-1/2 lg:w-1/3 services gap">
          <div
            class="border-2 border-gray-200 bg-[#ffffff] shadow-lg border-opacity-60 m-5 rounded-lg overflow-hidden"
          >
            <img
              src="../assets/cloud.jpg"
              class="h-48 w-full object-cover object-center"
            />
            <div class="p-6">
              <p class="text-md font-semibold mb-3">AWS Managed Services</p>
              <p class="leading-relaxed mb-3 text-sm">
                We design and build secure, high-performance, resilient, and
                efficient cloud infrastructure for a wide range of applications
                and workloads. Premised on six pillars—operational excellence,
                security, reliability, performance efficiency, cost
                optimization, and sustainability
              </p>
              <div class="flex justify-center">
            <router-link to="aws_managed_services"
              class="btn-primary p-2 call_to_action bg-kekaBlue text-white rounded-lg shadow-lg"
            >
              Learn more
            </router-link >
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 lg:w-1/3 services">
          <div
            class="border-2 border-gray-200 bg-[#ffffff] shadow-lg border-opacity-60 m-5 rounded-lg overflow-hidden"
          >
            <div
              class="bg-gray-500 h-48 sm:px-10 lg:px-12 flex items-center justify-center py-5"
            >
              <img src="../assets/authentic.jpg" class="flex items-center" />
            </div>

            <div class="p-6 transition duration-300 ease-in">
              <p class="text-md font-semibold mb-3">
                Anti-Counterfeit Solution - Manufacturing
              </p>
              <div class="my-5"></div>
              <p class="leading-relaxed mb-3 text-sm">
                A proprietary print and recognition technology built for global
                usage under challenging conditions, connected to value-added
                services that protect your brand and intellectual property as a
                manufacturer
              </p>
              <div class="flex justify-center m-4">
            <router-link to="authentic-anti-counterfeit-solutions"
              class="btn-primary p-2 call_to_action bg-kekaBlue text-white rounded-lg shadow-lg"
            >
              Learn more
            </router-link >
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 lg:w-1/3 services">
          <div
            class="border-2 border-gray-200 bg-[#ffffff] shadow-lg border-opacity-60 m-5 rounded-lg overflow-hidden"
          >
            <img
              src="../assets/daas.jpg"
              class="lg:h-48 md:h-48 w-full object-cover object-center"
            />

            <div class="p-6">
              <p class="text-md font-semibold mb-3">
                Device as a Service - Education
              </p>
              <p class="leading-relaxed mb-3 text-sm">
                Managed Device Services specifically designed for Students with
                Education in mind. We Track Deploy, Manage, Maintain and protect
                the devices The Intel® SFI Framework allows decision makers and
                educators to understand, test drive, and implement the SFI
                vision in their education system.
              </p>
              <div class="flex justify-center">
            <router-link to="the_shule_project"
              class="btn-primary p-2 call_to_action bg-kekaBlue text-white rounded-lg shadow-lg"
            >
              Learn more
            </router-link >
              </div>
            </div>
          </div>
        </div>

        <div class="sm:w-1/2 lg:w-1/3 services">
          <div
            class="border-2 border-gray-200 bg-[#ffffff] shadow-lg border-opacity-60 m-5 rounded-lg overflow-hidden"
          >
            <img
              src="../assets/daas.jpg"
              class="h-48 w-full object-cover object-center"
            />
            <div class="p-6">
              <p class="text-md font-semibold mb-3">
                Device as a Service - Business
              </p>
              <p class="leading-relaxed mb-3 text-sm">
                Designed for business to meet all your end-user technology needs
                at a single predictable monthly payment Modern End User
                Experience IT Efficiency with Lower Costs Predictable Monthly
              </p>
              <div class="flex justify-center">
            <router-link to="daas_cooperate"
              class="btn-primary p-2 call_to_action bg-kekaBlue text-white rounded-lg shadow-lg"
            >
              Learn more
            </router-link >
              </div>
            </div>
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

          <div class="flex justify-center p-10">
            <router-link to="daas_cooperate"
              class="btn-primary p-2 call_to_action bg-kekaBlue text-white rounded-lg shadow-lg"
            >
              Learn more
            </router-link >
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
          <div class="sm:w-1/2 lg:w-1/4 xs:w-full p-5 team">
            <div>
              <div class="p-2 flex items-center justify-center">
                <div
                  class="w-36 h-36 rounded-full my-5"
                  :style="{ backgroundImage: `url(${elvis})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">ELVIS MUNENE</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-blue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 lg:w-1/4 xs:w-full p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="w-36 h-36 rounded-full my-5"
                  :style="{ backgroundImage: `url(${zippy})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">ZIPPORAH WACHIRA</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-blue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 lg:w-1/4 xs:w-full p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="w-36 h-36 rounded-full my-5"
                  :style="{ backgroundImage: `url(${me})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">DANIEL GITARI</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-blue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/4 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="w-36 h-36 rounded-full my-5"
                  :style="{ backgroundImage: `url(${ken})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">KEN KAGOTA</p>
              <p class="text-sm text-center">Managing Director</p>
              <div class="flex justify-center gap-3 py-5 text-blue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/4 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="w-36 h-36 rounded-full my-5"
                  :style="{ backgroundImage: `url(${sam})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">SAMUEL MUREKEFU</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-blue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/4 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="w-36 h-36 rounded-full my-5"
                  :style="{ backgroundImage: `url(${ernest})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">ERNEST OTIENO</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-blue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 xs:w-full lg:w-1/4 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="w-36 h-36 rounded-full my-5"
                  :style="{ backgroundImage: `url(${innocent})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">INNOCENT MAMBO</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-blue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 xs:w-full sm:w-1/2 p-5 team">
            <div class="col-span-2 col-start-2">
              <div class="p-2 flex items-center justify-center">
                <div
                  class="w-36 h-36 rounded-full my-5"
                  :style="{ backgroundImage: `url(${florence})` }"
                ></div>
              </div>
              <p class="text-md text-center font-bold py-5">FLORENCE SIMBA</p>
              <p class="text-sm text-center">Cloud Architect</p>
              <div class="flex justify-center gap-3 py-5 text-blue">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 mb-20 flex justify-center">
        <p class="text-2xl font-bold m-10 text-dark bg-b">OUR PARTNERS</p>
      </div>
      <div class="flex flex-wrap mx-10 bg-white">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${acer})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${aws})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${dell})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-56 h-32 partner"
                :style="{ backgroundImage: `url(${intel})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${dot})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-64 h-36 partner"
                :style="{ backgroundImage: `url(${lenovo})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${vmware})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${hp})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-64 h-36 partner"
                :style="{ backgroundImage: `url(${authentic})` }"
              ></div>
            </div>
            <div class="lg:w-1/4 sm:w-full p-5 swiper-slide">
              <div
                class="p-2 w-64 h-36 partner bg-white"
                :style="{ backgroundImage: `url(${huawei})` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact m-10">
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
          class="btn-primary p-2 call_to_action bg-kekaBlue text-white rounded-lg shadow-md"
        >
          <a href="mailto:info@kekaprecision.com"> Book a consultation </a>
        </button>
      </div>
    </div>
    <div class="footer bg-kekaBlue">
      <div class="flex flex-wrap">
        <div class="lg:w-1/3 sm:w-1/2 xs:w-full p-10">
          <img src="../assets/logo.jpeg" class="h-36 px-10 my-5" alt="" />
          <p class="text-white font-bold px-10">
            KEKA PRECISION TECHNOLOGIES LIMITED
          </p>
          <div class="flex justify-left p-10 px-10   gap-3 py-5 text-white">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div class="lg:w-2/10 pt-10">
          <p class="text-white py-5 text-xl xs:px-10">SERVICES</p>
          <div class="py-2 text-gray-200 xs:px-10">Authentic</div>
          <div class="py-2 text-gray-200 xs:px-10">Aws managed sevices</div>
          <div class="py-2 text-gray-200 xs:px-10">The shule project</div>
          <div class="py-2 text-gray-200 xs:px-10">Daas cooperate</div>
        </div>
        <div class="lg:w-2/10 pt-10">
          <p class="text-white py-5 text-xl xs:px-10">SUPPORT</p>
          <div class="py-2 text-gray-200 xs:px-10">About us</div>
          <div class="py-2 text-gray-200 xs:px-10">Contact us</div>
          <div class="py-2 text-gray-200 xs:px-10">Faq</div>
        </div>
        <div class="lg:w-2/10 pt-10">
          <p class="text-white py-5 text-xl xs:px-10">GET IN TOUCH</p>
          <div class="py-2 text-gray-200 xs:px-10">
            <span class="font-bold pr-5"> Email : </span> info@kekaprecision.com
          </div>
          <div class="py-2 text-gray-200 xs:px-10">
            <span class="font-bold pr-5"> Phone : </span> +254 7111 111
          </div>
        </div>
      </div>
      <div class="px-20 py-10">
        <hr />
        <div class="flex justify-center items-center pt-10 text-white">
          Copyright ©2022 Keka Precision limited All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "@vue/runtime-core";
import carousel from "../components/carousel.vue";
import carouselSlide from "../components/carouselSlide.vue";
export default {
  components: {
    carousel,
    carouselSlide,
  },
  setup() {
    const visibleSlide = 0;
    const isOpen = ref(false);
    const backgroundimage = require("../assets/img3.jpg");
    const slides = [
      require("../assets/img1.jpg"),
      require("../assets/board.jpeg"),
      require("../assets/Performance-user.jpg"),
    ];
    // team images
    const ernest = require("../assets/ernest.jpeg");
    const elvis = require("../assets/elvis.jpeg");
    const ken = require("../assets/ken.jpeg");
    const me = require("../assets/me.jpeg");
    const zippy = require("../assets/zippy.jpeg");
    const sam = require("../assets/sam.jpeg");
    const florence = require("../assets/florence.jpeg");
    const innocent = require("../assets/innocent.jpeg");

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
      visibleSlide,
      backgroundimage,
      ken,
      sam,
      me,
      innocent,
      zippy,
      elvis,
      florence,
      ernest,
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
.getstarted {
  pointer-events: auto;
}
.section {
  z-index: 1;
}
.services {
  transition: transform 0.2s ease-in;
}
.services:hover {
  transform: scale(1.1);
}
.team {
  transition: transform 0.5s ease;
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
.call_to_action:hover {
  transform: scale(1.1);
  /* background-color: #ec1b35; */
}
.partner {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
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
  position: absolute;
  left: 178px;
  top: 102px;
  background-color: #fff;
  width: max-content;
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
