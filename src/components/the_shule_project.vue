<template>
  <div>
    <navigation />
    <div class="bg-gray-100">
      <div class="relative">
        <div class="overlay"></div>
        <div
          class="bg-cover object-fit pt-10 pb-20 section"
          :style="{ backgroundImage: `url(${slide})` }"
        >
          <div class="">
            <div
              class="text-white md:ml-10 lg:ml-10 md:pl-10 lg:px-10 absolute"
            >
              <p
                class="mt-10 mb-10 pt-10 font-bold text-3xl text-white flex justify-right text-left align-content-start"
              >
                DEDICATED FOR SCHOOLS
              </p>
              <p
                class="mb-10 font-bold text-lg text-white flex justify-left text-left lg:w-2/5"
              >
                IT needs are constantly changing. Student enrollment, new
                initiatives, and budget cuts are a few of the factors affecting
                technology plans. KEKA Precision Technologies Ltd offers Device
                as a Service (DaaS). Take advanteage of the Shule Project
              </p>
              <span
                class="bg-kekaBlue px-5 mt-10 py-3 rounded-[25px] hover:bg-white hover:text-black shadow-lg"
              >
                Talk to us
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-10 mb-10">
        <div class="flex flex-col items-center justify-center p-10">
          <div class="text-3xl p-5 font-bold text-center">
            Intel® Skills for Innovation: The Shule Project
          </div>
        </div>
        <div class="grid grid-cols-5">
          <div class="col-span-3 col-start-2 text-center">
            Intel’s education for innovation approach is based on supporting and
            developing the necessary skills for students to succeed in the new
            collar, industry 4.0 economy. These skills for innovation represent
            seven categories of knowledge and practice that employers, such as
            Intel, are looking for in their workforce of tomorrow.
          </div>

          <div class="col-span-3 col-start-2 text-center font-bold py-10">
            Click here to get more details Register with KEKA Precision
            Technologies and request for the Intel SFI Code
          </div>
        </div>
        <div class="text-center block">
          <button class="rounded-[20px] py-2 px-3 bg-kekaBlue text-white">
            Request Code
          </button>
        </div>
      </div>
      <div class=" bg-white ">
        <p class="text-2xl font-bold p-10 text-dark flex justify-center">
          Challenges facing schools in ICT
        </p>
      </div>
      <div class="flex flex-wrap justify-center pb-10 bg-white">
        <div class="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
          <h4 class="text-kekaBlue font-bold py-5">
            Affordable access to Devices
          </h4>
          <p class="leading-relaxed mb-3 text-sm">
            The cost of devices, procurement process, Number of computers,
            technology refresh in line with market needs
          </p>
          <div class="flex justify-start py-5">
            <button
              class="rounded-[20px] text-kekaBlue"
              @click="scrollToServices"
            ></button>
          </div>
        </div>
        <div class="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
          <h4 class="text-kekaBlue font-bold py-5">
            Management and Deployment
          </h4>
          <p class="leading-relaxed mb-3 text-sm">
            Management and Deployment of devices to enhance their strict use in
            Education including the security of the devices through their
            lifecycle
          </p>
          <div class="flex justify-start py-5">
            <button
              class="rounded-[20px] text-kekaBlue"
              @click="scrollToServices"
            ></button>
          </div>
        </div>
        <div class="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
          <h4 class="text-kekaBlue font-bold py-5">Training</h4>
          <p class="leading-relaxed mb-3 text-sm">
            Trained Staff including the cost of training. Improving the student
            and teacher experience by simplifying the ICT complexities in
            setting up the digital environment
          </p>
          <div class="flex justify-start py-5">
            <button
              class="rounded-[20px] text-kekaBlue"
              @click="scrollToServices"
            ></button>
          </div>
        </div>
        <div class="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
          <h4 class="text-kekaBlue font-bold py-5">Technical Sustainability</h4>
          <p class="leading-relaxed mb-3 text-sm">
            ICT sustainability for the long term. This includes device refresh,
            teacher and faculty access to OEM partner programs in Education to
            ensure technology relevance
          </p>
          <div class="flex justify-start py-5">
            <button
              class="rounded-[20px] text-kekaBlue"
              @click="scrollToServices"
            ></button>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 py-5">
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl lg:mx-20 lg:my-10 text-left font-bold">
            Change Adaptation
          </p>
          <p
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
          >
            The IT requirements of schools are constantly changing. A few of the
            factors influencing technology plans are student enrollment, new
            initiatives, and budget cuts. A DaaS agreement’s Flex Option allows
            schools to add or remove devices without incurring contract
            penalties. An efficient DaaS program adapts to provide only the
            devices you need for that period of time, rather than having costly
            devices sitting in a closet when enrollments change year after year.
          </p>
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2 text-center">
          <p class="text-xl lg:mx-20 lg:my-10 text-left font-bold">
            Students' Development
          </p>
          <p
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
          >
            When students advance in grade level, their technology must be
            updated to reflect new curriculum and assignments. A device designed
            for third grade may not be appropriate for sixth grade. Without
            blowing their budgets, schools can now plan for student evolution
            and provide devices that best match the student/computer lifecycle.
            DaaS also allows schools to upgrade technology more frequently,
            ensuring that teachers and students have access to the most
            up-to-date educational applications and curriculum. We include
            security against cyber attacks and theft.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 pb-5">
        <div class="sm:w-full xs:w-full lg:w-1/2 my-5 text-center">
          <p class="text-xl my-10 lg:mx-20 text-left font-bold">
            Providing Personalized Education
          </p>
          <p
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
          >
            A 1:1 technology program’s goal is to transition students from
            passive learning to collaborative engagement. DaaS allows for faster
            implementation for schools with limited capital relative to their
            student population because of the lower initial outlay of funds..
          </p>
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl my-10 lg:mx-20 text-left font-bold">
            Obtaining the Required Devices
          </p>
          <p
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
          >
            The best computer for any school is determined by the learning
            environment, grade levels, student outcome goals, and curriculum.
            Having enough computing power is essential for an effective
            technology strategy. DaaS enables schools to afford better devices
            that are aligned with their goals without paying for more than they
            require. We offer a variety of products as certified partners for
            the logos in this document
          </p>
        </div>
      </div>
      <div class="flex flex-wrap bg-white pt-5 py-5">
        <div class="sm:w-full xs:w-full lg:w-1/2">
          <p class="text-xl my-10 lg:mx-20 text-left font-bold">
            Deployment and Management
          </p>
          <p
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
          >
            Deployment, management, maintenance, and disposal need to be
            calculated to determine a true technology rate. Depending on the
            number of devices in service, schools could get caught unprepared
            for a large outlay of IT upkeep expenses. Device-as-a-Service (DaaS)
            can encompass all of your technology expenses (including
            professional development) into one predictable budget year after
            year. It’s more than a lease, it’s a long-range approach to
            addressing ongoing technology needs on your campus.
          </p>
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2 my-5 text-center">
          <p class="text-xl my-10 lg:mx-20 text-left font-bold">
            Empower IT to Focus on Strategic Projects
          </p>
          <p
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
          >
            Your IT department’s most precious commodity is time. They simply
            can’t proactively address all of the major strategic needs across
            your institution if they are constantly saddled with trying to
            manage and repair small issues impacting devices. A successful DaaS
            program frees up your internal resources, giving them the ability to
            focus on security, connectivity and greater efficiencies across your
            campus.
          </p>
        </div>
        <div class="sm:w-full xs:w-full lg:w-1/2 my-5 text-center">
          <p class="text-xl my-10 lg:mx-20 text-left font-bold">
            Disposal of Equipment
          </p>
          <p
            class="text-left text-lg flex justify-center text-sm pt-5 pb-5 lg:px-20 xs:px-10"
          >
            Schools must deal with IT asset disposition in a traditional
            purchase model. The process of decommissioning and disposing of
            computers at the end of their lifecycle can be a time and money
            drain on school IT departments. DaaS alleviates that burden and
            expense by returning the computers at the end of the agreement
            period.
          </p>
        </div>
      </div>
      <div class="flex justify-center p-10">
        <img src="../assets/daas.jpeg" alt="" />
      </div>
      <div class="flex justify-center flex-col  p-10">
        <p class="font-bold flex justify-center text-xl p-10"> Partnerships with Intel and VMWare make this possible </p> 
          <p class="text-center">
            Please contact us for a detailed presentation. Devices range from as low as KES 37,800 with financing options of up to 36 months
          KEKA precision Technologies will facilitate financing either for the school or for the Parent/Student
          </p>
          
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import navigation from "./navigation.vue";
import Footer from "./footer.vue";
export default {
  components: {
    navigation,
    Footer,
  },
  setup() {
    const slide = require("../assets/comp1.jpeg");
    return {
      slide,
    };
  },
};
</script>
<style scoped>
.section {
  height: 500px;
  background-position: left;
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
.services {
  transition: transform 0.2s ease-in;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
}
.services:hover {
  transform: scale(1.05);
}
</style>
