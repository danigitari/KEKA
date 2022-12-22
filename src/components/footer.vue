<template>
    <div class="footer bg-kekaBlue relative bottom-0">
      <div class="flex flex-wrap lg:px-10">
        <div class="lg:w-1/3 sm:w-1/2 xs:w-full pt-10">
          <img src="../assets/logo.jpeg" class="h-36 px-10 my-5" alt="" />
          <p class="text-white font-bold px-10 text-[20px]">
            KEKA PRECISION TECHNOLOGIES LIMITED
          </p>
          <div
            class="flex justify-left pt-10 px-10 gap-3 py-5 text-white text-[20px]"
          >
            <i class="fa-brands fa-facebook icons"></i>
            <i class="fa-brands fa-twitter icons"></i>
            <i class="fa-brands fa-linkedin icons"></i>
          </div>
        </div>
        <div class="lg:w-2/10 pt-10">
          <p class="text-white py-5 text-xl xs:px-10">SERVICES</p>
          <!-- <router-link to="/"> <div class="py-2 text-gray-200 xs:px-10">Home</div></router-link> -->
          <router-link to="authentic-anti-counterfeit-solutions">
            <div class="py-2 text-gray-200 xs:px-10">Authentic</div>
          </router-link>
          <router-link to="aws-managed-services">
            <div class="py-2 text-gray-200 xs:px-10">
              Aws managed sevices
            </div></router-link
          >
          <router-link to="the-shule-project">
            <div class="py-2 text-gray-200 xs:px-10">
              The shule project
            </div></router-link
          >
          <router-link to="device-as-a-service-cooperate">
            <div class="py-2 text-gray-200 xs:px-10">
              Daas cooperate
            </div></router-link
          >
        </div>
        <div class="lg:w-2/10 pt-10">
          <p class="text-white py-5 text-xl xs:px-10">SUPPORT</p>
          <router-link to="about-us" class="py-2 text-gray-200 xs:px-10 block"
            >About us</router-link
          >
          <router-link to="contact-us" class="py-2 text-gray-200 xs:px-10 block"
            >Contact us</router-link
          >
          <router-link to="faq" class="py-2 text-gray-200 xs:px-10 block"
            >Faq</router-link
          >
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
      <div class="flex justify-end pr-10 ">
        <a href="#"><div class=" scroll-up h-8 w-8 shadow-md rounded-full bg-white flex justify-center items-center">
          <i class="fa-sharp fa-solid fa-arrow-up  "></i>
        </div></a> 
        
      </div>
      <div class="px-20 py-10">
        <hr />
        <div class="flex justify-center items-center pt-10 text-white">
          Copyright ©2022 Keka Precision limited All Rights Reserved
        </div>
      </div>

    </div>
</template>
<script>
import {useRouter} from "vue-router"
export default {
    setup() {
        const router = useRouter()
        return  {
            router
        }
    },
}
</script>
<style>
.icons {
  transition: all 0.3s ease-in;
}
.icons:hover {
  transform: scale(1.4);
}
.scroll-up{
  transition: .2s ease;
}
.scroll-up:hover {
  transform: scale(1.2);
}
</style>
