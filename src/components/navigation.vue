<template>
  <nav class="relative text-kekaBlue font-bold navbar">
    <div
      class="flex w-full text-xs md:flex md:text-sm items-center justify-between md:flex-row lg:flex-row"
    >
      <span class="flex items-center justify-start">
        <div class="pl-5 lg:pl-20">
          <img class="h-20 w-full" src="../assets/logo.jpeg" />
        </div>
        <!-- <div class="text-md  "> <p class=" text-lg" > KEKA </p>  PRECISION </div> -->
      </span>

      <div class="hidden md:flex md:justify-end space-x-16">
        <ul>
          <li class="navlink" @click.prevent="goToHome">
            <router-link to="/" class="font-bold text-sm">HOME</router-link>
          </li>
          <li class="navlink" @click.prevent="goToAbout">
            <router-link to="about-us" class="font-bold text-sm"
              >ABOUT US
            </router-link>
          </li>
          <li class="services flex">
            <div class="test-dropdown">
              <div class="text">
                <p class="font-bold text-sm">SERVICES</p>
                <i class="fa-sharp fa-solid fa-chevron-down px-2 font-bold">
                </i>
              </div>
              <div class="test-dropdown-menu">
                <div class="bg-white text-sm">Aws managed services</div>
                <div @click="goToAuthentic" class="text-sm">Authentic</div>
                <div class="test-daas-dropdown">
                  <div @click="goToDaas" class="flex justify-between">
                    <div class="">Device as a service</div>
                    <div>
                      <i class="fa-sharp fa-solid fa-chevron-right"> </i>
                    </div>
                  </div>
                  <div class="test-daas-dropdown-menu">
                    <div @click="goToDaasEducation" class="text-sm">
                      The Shule Project
                    </div>

                    <div @click="goToDaasBusiness" class="text-sm">
                      Daas For Business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="navlink">
            <router-link to="" class="font-bold text-sm"> FAQ </router-link>
          </li>
      <li class="services flex">
            <div class="test-dropdown">
              <div class="text">
                <p class="font-bold text-sm">OUR COMPANY</p>
                <i class="fa-sharp fa-solid fa-chevron-down px-2 font-bold">
                </i>
              </div>
              <div class="test-dropdown-menu">
          
                <div @click="goToAuthentic" class="text-sm">Events</div>
                <div class="test-daas-dropdown">
                  <div @click="goToDaas" class="flex justify-between">
                    <div class="">Blog</div>
    
                  </div>
            
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="contact bg-kekaBlue px-6 rounded-[25px] text-white py-3 hidden md:flex md:justify-end mr-20"
        @click.prevent="goToContact"
      >
        <div to="contact-us" class="font-bold text-sm"
          >CONTACT US
        </div>
      </div>
    </div>
    <div class="hambuger-menu" @click.prevent="showHambugerMenu">
      <button class="block font-bold text-[18px] mr-10 md:hidden">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </nav>
  <div class="hidden hambuger block">
    <div class="flex flex-col text-kekaBlue">
      <div
        class="w-full flex justify-center items-center"
        @click.prevent="goToHome"
      >
        Home
      </div>
      <div
        class="w-full flex justify-center items-center"
        @click.prevent="goToAbout"
      >
        About us
      </div>
      <div
        class="w-full flex justify-center items-center"
        @click.prevent="goToAuthentic"
      >
        Authentic
      </div>
      <div
        class="w-full flex justify-center items-center"
        @click.prevent="goToDaasEducation"
      >
        The shule project
      </div>
      <div
        class="w-full flex justify-center items-center"
        @click.prevent="goToDaasBusiness"
      >
        Daas cooperate
      </div>
      <div class="w-full flex justify-center items-center" @click.prevent="">
        Aws managed services
      </div>
      <div
        class="w-full flex justify-center items-center"
        @click.prevent="goToContact"
      >
        Contact-us
      </div>
    </div>
  </div>
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
    const goToAbout = () => {
      router.push({ name: "about-us" });
    };
    const goToAws = () => {
      router.push({ name: "aws " });
    };
    const goToContact = () => {
      router.push({ name: "contact-us" });
    };

    const toggleNavbarClass = () => {};
    const showHambugerMenu = () => {
      const navbar = document.querySelector(".hambuger");
      navbar.classList.toggle("hambuger-menu-dropdown");
    };
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
      showHambugerMenu,
      goToAbout,
      goToAws,
      goToContact,
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
  transition: 0.2s ease;
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
  transition: 0.3s ease-in;
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
.hambuger-menu-dropdown {
  display: block !important;
  font-size: 16px;
  transition: 0.4s ease-in;
}
.hambuger-menu-dropdown > div > div {
  border-bottom: 1px solid gray;
  font-size: 16px;
  transition: 0.2s ease-in;
  padding: 20px;
}
.hambuger-menu-dropdown > div > div:hover {
  background-color: #1762e2;
  color: #fff;
}
.contact{
  transition: all .5s ease
}
.contact:hover{
  transform: scale(1.1);
}
@media (max-width: 480px) {
}
</style>
