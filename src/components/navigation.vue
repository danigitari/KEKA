<template>
  <nav class="relative container mx-auto sm:px-5">
    <div class="flex items-center justify-between">
      <div class="">
        <img class="h-20 w-full" src="../assets/logo.jpeg" />
      </div>

      <div class="hidden md:flex space-x-16 font-bold">
        <ul>
          <li class="navlink">
            <router-link to="/">Home</router-link>
          </li>
          <li class="services">
            <div class="test-dropdown">
              <div class="text">
                <p>Services</p>
                <i class="fa-sharp fa-solid fa-chevron-down px-2"> </i>
              </div>
              <div class="test-dropdown-menu">
                <div class="bg-white">Aws managed services</div>
                <div @click="goToAuthentic">
                 Authentic
                </div>
                <div class="test-daas-dropdown">
                  <div class="flex justify-between">
                    
                      <div @click="goToDaas" >Device as a Service</div>
                    <div>
                      <i class="fa-sharp fa-solid fa-chevron-right"> </i>
                    </div>
                  </div>
                  <div class="test-daas-dropdown-menu">
            
                      <div @click="goToDaasEducation">The Shule Project</div>

                      <div @click="goToDaasBusiness">Daas For Business</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="navlink">
            <router-link to="/">Contact us </router-link>
          </li>
          <li class="navlink">
            <router-link to="/">About </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { useRouter } from "vue-router";
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
    return {
      goToDaasBusiness,
      goToDaasEducation,
      goToAuthentic,
      goToDaas
    };
  },
};
</script>
<style>
/* nav {
  display: flex;
  justify-items: center;
  justify-content: center;
}*/
nav ul {
  display: flex;
  justify-content: center;
}

nav ul > li {
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 400;
  font-size: 16px;
}
nav ul li i {
  font-size: 11px;
}
nav ul li:hover {
  background-color: blue;
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
</style>
