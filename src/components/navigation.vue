<template>
  <nav class="relative text-kekaBlue font-bold navbar">
    <div
      class="flex w-full text-xs md:flex md:text-sm md:mr-20 items-center justify-between  md:flex-row lg:flex-row"
    >
      <span class="flex items-center justify-start">
        <div class="pl-5 lg:pl-20">
          <img class="h-20 w-full" src="../assets/logo.jpeg" />
        </div>
        <!-- <div class="text-md  "> <p class=" text-lg" > KEKA </p>  PRECISION </div> -->
      </span>

      <div class="hidden md:flex md:justify-end space-x-16 ">
        <ul>
          <li class="navlink" @click.prevent="goToHome">
            <router-link to="/" class="font-bold text-sm">HOME</router-link>
          </li>
          <li class="navlink">
            <router-link to="about-us" class="font-bold text-sm"
              >ABOUT US
            </router-link>
          </li>
          <li class="services">
            <div class="test-dropdown">
              <div class="text">
                <p class="font-bold text-sm">SERVICES</p>
                <i class="fa-sharp fa-solid fa-chevron-down px-2 font-bold">
                </i>
              </div>
              <div class="test-dropdown-menu">
                <div class="bg-white  text-sm">
                  Aws managed services
                </div>
                <div @click="goToAuthentic" class="text-sm">
                  Authentic
                </div>
                <div class="test-daas-dropdown">
                  <div class="flex justify-between">
                    <div @click="goToDaas" class="">
                      Device as a service
                    </div>
                    <div>
                      <i class="fa-sharp fa-solid fa-chevron-right"> </i>
                    </div>
                  </div>
                  <div class="test-daas-dropdown-menu">
                    <div @click="goToDaasEducation" class=" text-sm">
                      The Shule Project
                    </div>

                    <div @click="goToDaasBusiness" class=" text-sm">
                      Daas For Business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="navlink">
            <router-link to="contact-us" class="font-bold text-sm"
              >CONTACT US
            </router-link>
          </li>
        </ul>
      </div>
      <div class="hambuger-menu">
        <button class="block hambuger font-bold text-[18px] mr-10 md:hidden">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:hidden sm:hidden xs:hidden md:hidden flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:self-center left-6 right-6"
      >
        <router-link to="/"> Home</router-link>
        <router-link to="/"> About us </router-link>
        <router-link to="/"> Services </router-link>
        <router-link to="/"> Contact-us</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
export default {
  setup() {
    const router = useRouter();
    const goToDaasBusiness = () => {
      router.push({ name: "daas_cooperate" });
    };
    const goToDaasEducation = () => {
      router.push({ name: "theShuleProject" });
    };
    const goToAuthentic = () => {
      router.push({ name: "authentic" });
    };
    const goToDaas = () => {
      router.push({ name: "daas" });
    };
    const goToHome = () => {
      router.push({ name: "home" });
    };
    const toggleNavbarClass = () => {};
    onMounted(() => {
      toggleNavbarClass();
    });
    return {
      goToDaasBusiness,
      goToDaasEducation,
      goToAuthentic,
      goToDaas,
      goToHome,
      toggleNavbarClass,
    };
  },
};
</script>
<style>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
nav {
  display: flex;
  position: fixed;
  justify-content: space-around;
  font-style: normal;
  /* transition: all .5s ease; */
}
nav a {
  text-decoration: none;
  font-style: normal;
}
nav ul {
  display: flex;
  justify-content: center;
}

nav ul > li {
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 400;
  font-size: 17px;
  font-style: normal;
}
nav ul li i {
  font-size: 11px;
}
nav ul li:hover {
  background-color: #1762e2;
}
.test-dropdown {
  position: relative;
}
.services:hover .text {
  color: #fff;
}

.test-dropdown p {
  display: inline;
}
.test-dropdown-menu {
  top: calc(100% + 20px);
  position: absolute;
  z-index: 5;
  background-color: #fff;
  width: 300px;
  border-top: 4px solid blue;
  left: -25px;
  display: none;
}
.services:hover .test-dropdown-menu {
  display: block;
}
.test-dropdown-menu > div {
  padding: 20px;
  border-bottom: 1px solid gray;
  font-size: 16px;
  transition: 0.4s ease-in;
}

.test-dropdown-menu > div:hover {
  background: #1762e2;
  color: #fff;
}
.test-daas-dropdown {
  position: relative;
}
.test-daas-dropdown-menu {
  position: absolute;
  top: 0px;
  left: 300px;
  display: none;
}
.test-daas-dropdown:hover .test-daas-dropdown-menu {
  display: block;
  z-index: 10;
}

.test-daas-dropdown-menu div {
  background-color: #fff;
  width: 200px;
  border-bottom: 1px solid grey;
  padding: 20px;
}
.test-daas-dropdown-menu div:hover {
  background-color: #1762e2;
  color: #fff !important;
}
.test-daas-dropdown-menu div {
  color: black;
}
.navlink:hover {
  color: #fff;
}
@media (max-width: 480px) {
}
</style>
