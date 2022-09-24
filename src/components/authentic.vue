<template>
  <div>
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
              <div class="p-3 border-2 hover:bg-kekaBlue hover:text-white">
                <router-link
                  to="authentic-anti-counterfeit-solutions"
                ></router-link>
                Authentic
              </div>
              <div class="p-3 border-2 hover:bg-kekaBlue hover:text-white">
                <router-link to="aws-managed-services">
                  Aws managed sevices
                </router-link>
              </div>
              <div class="daas-dropdown">
                <div class="p-3 border-2 hover:bg-kekaBlue hover:text-white">
                  <router-link to="device-as-a-service">
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
    <div class="bg-gray-100">
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
              WE CREATE HUMAN-FRIENDLY SOLUTIONS
            </p>
            <p
              class="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left"
            >
              PROTECTING CONSUMERS, BRANDS AND PRODUCERS FOR QUALITY CONSUMPTION
              AND REVENUE ENHANCEMENT.
            </p>
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
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10"
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
            class="h-96 flex items-center"
            alt=""
          />
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl my-10 text-center font-bold">
            High-safety counterfeit protection
          </p>
          <p
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10"
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
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10"
          >
            Counterfeiting reduces company sales by 13 trillion EUR every year.
            authentic protects you and your brand from these economic losses and
            reputation damage. Once your product is protected, you can extend it
            with digital services. This way you give your customers maximum
            transparency to further strengthen your company's reputation. Your
            customer has never been closer to your brand than with authentic!
          </p>
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2 my-5 text-center">
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
      <div class="footer bg-kekaBlue">
        <div class="flex flex-wrap">
          <div class="lg:w-1/3 sm:w-1/2 xs:w-full p-10">
            <img src="../assets/logo.jpeg" class="h-36 px-10 my-5" alt="" />
            <p class="text-white font-bold px-10">
              KEKA PRECISION TECHNOLOGIES LIMITED
            </p>
          </div>
          <div class="lg:w-1/3 p-10">
            <p class="text-white py-5 text-xl xs:px-10">SERVICES</p>
            <div class="py-2 text-white xs:px-10">Authentic</div>
            <div class="py-2 text-white xs:px-10">Aws managed sevices</div>
            <div class="py-2 text-white xs:px-10">The shule project</div>
            <div class="py-2 text-white xs:px-10">Daas cooperate</div>
          </div>
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const slide = require("../assets/authentic_a.jpg");
    return {
      slide,
    };
  },
};
</script>
<style>
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