<template>
  <div>
<navigation />
    <div class="bg-gray-100">
      <div class="relative">
        <div class="overlay"></div>
        <div
          class="bg-cover object-fit  pt-10 pb-20  section"
          :style="{ backgroundImage: `url(${slide})` }"
        >
          <div class="">
            <div
              class="text-white  md:ml-10 lg:ml-10 md:pl-10 lg:px-20  absolute"
            >
              <p
                class=" mt-10 mb-10 font-bold text-3xl text-white flex justify-right text-left align-content-start"
              >
                DEVICE AS A SERVICE
              </p>
              <p
                class="mb-10 font-bold text-lg text-white flex justify-left text-left   lg:w-3/4"
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
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
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
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
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
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
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
            src="../assets/comp2.jpg"
            class="p-5 h-96 flex items-center"
            alt=""
          />
        </div>
      </div>
      <!-- <div class="flex justify-center">
        <div class="text-xl py-10 font-bold">
          EXTERNAL THREATS AND CHALLENGES
        </div>
      </div> -->

      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import navigation from "./navigation.vue";
import Footer from "./footer.vue";
export default {
  components:{
    navigation,
    Footer
  },
  setup() {
    const slide = require("../assets/comp1.jpeg");
    return {
      slide,
    };
  },
};
</script>
<style>
.section {

  height:500px;
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
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background: #000;
}
</style>