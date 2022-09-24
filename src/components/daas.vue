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
      <div class="relative">
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
                DEVICE AS A SERVICE
              </p>
              <p
                class="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left"
              >
                WE HAVE SOLUTIONS FOR BOTH SCHOOLS AND BUSINESSES. CAN BE
                TAILORED TO MEET REQUIREMENTS FOR PERFORMANCE END USERS , MOBILE
                END USERS AND PRODUCIVITY END USERS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-10 mb-10">
        <div class="flex flex-col items-center justify-center p-10">
          <div class="text-3xl p-5 font-bold text-center">
            Why Device as a Service
          </div>
        </div>
        <div class="grid grid-cols-5">
          <div class="col-span-3 col-start-2 text-center">
            Today’s workforce requires highly reliable devices that are ready to
            perform, allowing users to stay productive, connect and collaborate
            with their teams and customers, and conduct their day-to-day tasks
            wherever they may be, knowing their PCs and data are more secure.
            The IT teams strive to deliver a smooth user experience to all end
            users, but often the budget and resources are stretched thin, so the
            PC refresh cycle and latest premium devices become lower priorities.
          </div>
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 py-5">
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl lg:mx-20 lg:my-10 text-left font-bold">
            Rapid growth in worker mobility is creating challenges in managing
            and securing the workforce device fleet.
          </p>
          <p
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10"
          >
            Worker mobility has become increasingly common due in large part to
            changes in technology, employee expectations, and globalization. In
            fact, every week about 70% of employees work at least one day a week
            somewhere other than the office.¹ As employees work offsite — on
            unassigned PCs and mobile devices across multiple operating systems
            both inside and outside the corporate firewall — management becomes
            more complex, and the risk for data breaches increases.
          </p>
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2 my-5 text-center">
          <img
            src="../assets/daas_3.jpg"
            class="lg:px-20 xs:px-10 h-96 flex items-center"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 pb-5">
        <div class="sm:w-full xs:w-full lg:w-1/2 my-5 px-10 text-center">
          <img
            src="../assets/Man-on-Comp.jpg"
            class="w-96 flex items-center"
            alt=""
          />
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl my-10 lg:mx-20 text-left font-bold">
            Device management can be a significant resource drain for IT staff.
          </p>
          <p
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10"
          >
            IT resources fight a constant battle against outdated tech and tight
            budgets. According to various industry analysts, a computer’s base
            price typically represents only 20% of the Total Cost of Ownership,
            leaving much to tech support and maintenance.² This includes basic
            tech support, tracking refresh cycles, and dealing with old devices.
            Time and energy spent on basic asset management and training on new
            capabilities could be applied toward longer- term initiatives,
            giving technology a more prominent role in driving business forward
            and ensuring smooth end user experiences.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 py-5">
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl my-10 lg:mx-20 text-left font-bold">
            Device as a Service (DaaS) can help address device management
            challenges, enabling companies to achieve better business,
            operational, and financial outcomes
          </p>
          <p
            class="text-left text-lg flex justify-center pt-5 pb-5 lg:px-20 xs:px-10"
          >
            By bundling the best hardware, software, and services together, DaaS
            providers can deliver an end-to-end solution to their customers,
            creating workforce-wide benefits from decision makers to IT staff to
            end users. Benefits also apply to service providers who, with the
            convenience of Intel’s built-for-business platforms, can then
            service their own business operations and create new revenue
            streams.
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
    const slide = require("../assets/daas_1.jpg");
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
.overlay {
  position: absolute;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  background: #000;
}
</style>