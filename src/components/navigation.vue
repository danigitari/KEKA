<template>
    <nav class="relative lg:container lg:mx-auto sm:px-5 p-1">
      <div class="flex items-center justify-between">
        <div class="">
          <img class="h-24 w-full" src="../assets/logo.jpeg" />
        </div>
        <div class="hidden md:flex space-x-16  ">
          <router-link to="/" class=" hover:text-kekaBlue"> Home </router-link>
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
</template>
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