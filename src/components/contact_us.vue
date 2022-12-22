<template>
  <navigation />
  <div class="contact_us bg-gray-200">
    <div
      class="heading bg-kekaBlue pl-10 text-white lg:pl-20 py-10 text-xl font-bold"
    >
      CONTACT US
    </div>
    <div class="form p-5">
      <div class="form-heading font-bold flex justify-center pt-20 py-5">
        AUTHENTIC ANTI-COUNTERFEIT SERVICE APPLICATION FORM
      </div>
      <div class="flex flex-col justify-center lg:mx-20 lg:px-20">
        <div class="name flex flex-col gap-2 py-3">
          <label for=""> Name <span class="text-red-500"> * </span> </label>
          <input
            type="text"
            v-model="authenticFormData.name"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="company flex flex-col gap-2 py-3">
          <label for=""> Company <span class="text-red-500"> * </span> </label>
          <input
            type="text"
            v-model="authenticFormData.company"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="Phone flex flex-col gap-2 py-3">
          <label for="">
            Phone Number <span class="text-red-500"> * </span>
          </label>
          <input
            type="text"
            v-model="authenticFormData.phonenumber"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="Email flex flex-col gap-2 py-3">
          <label for="">
            Email Address <span class="text-red-500"> * </span></label
          >
          <input
            type="text"
            v-model="authenticFormData.email"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div
          class="self-end bg-kekaBlue text-white py-3 px-6 rounded-[25px] mb-10"
        >
          Submit
        </div>
      </div>
    </div>
    <div class="form p-5">
      <div class="form-heading font-bold flex justify-center pt-20 py-5">
        DEVICE AS A SERVICE FOR SCHOOLS
      </div>
      <div class="flex flex-col justify-center lg:mx-20 lg:px-20">
        <div class="name flex flex-col gap-2 py-3">
          <label for=""> Name <span class="text-red-500"> * </span> </label>
          <input
            type="text"
            v-model="daasSchoolsformData.name"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid bg- shadow-md"
          />
        </div>
        <div class="company flex flex-col gap-2 py-3">
          <label for=""> School <span class="text-red-500"> * </span> </label>
          <input
            type="text"
            v-model="daasSchoolsformData.school"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid bg- shadow-md"
          />
        </div>
        <div class="Phone flex flex-col gap-2 py-3">
          <label for="">
            Phone Number <span class="text-red-500"> * </span>
          </label>
          <input
            type="text"
            v-model="daasSchoolsformData.Phone"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="Email flex flex-col gap-2 py-3">
          <label for="">
            Email Address <span class="text-red-500"> * </span></label
          >
          <input
            type="text"
            v-model="daasSchoolsformData.Email"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="Email flex flex-col gap-2 py-3">
          <label for="">
            Number of devices <span class="text-red-500"> * </span></label
          >
          <input
            type="text"
            v-model="daasSchoolsformData.deviceCount"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div
          class="self-end bg-kekaBlue text-white py-3 px-6 rounded-[25px] mb-10"
          @click.prevent=""
        >
          Submit
        </div>
      </div>
    </div>
    <div class="form p-5">
      <div class="form-heading font-bold flex justify-center pt-20 py-5">
        DEVICE AS A SERVICE COOPERATE
      </div>
      <div class="flex flex-col justify-center lg:mx-20 lg:px-20">
        <div class="name flex flex-col gap-2 py-3">
          <label for=""> Name <span class="text-red-500"> * </span> </label>
          <input
            type="text"
            v-model="daasCooperateFormData.name"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="company flex flex-col gap-2 py-3">
          <label for=""> Company <span class="text-red-500"> * </span> </label>
          <input
            type="text"
            v-model="daasCooperateFormData.company"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="Phone flex flex-col gap-2 py-3">
          <label for="">
            Phone Number <span class="text-red-500"> * </span>
          </label>
          <input
            type="text"
            v-model="daasCooperateFormData.phone"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="Email flex flex-col gap-2 py-3">
          <label for="">
            Email Address <span class="text-red-500"> * </span></label
          >
          <input
            type="text"
            v-model="daasCooperateFormData.email"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div class="Email flex flex-col gap-2 py-3">
          <label for="">
            Number of devices <span class="text-red-500"> * </span></label
          >
          <input
            type="text"
            v-model="daasSchoolsformData.number"
            class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
          />
        </div>
        <div
          class="self-end bg-kekaBlue text-white py-3 px-6 rounded-[25px] mb-10"
        >
          Submit
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import navigation from "./navigation.vue";
import Footer from "./footer.vue";
import axios from "axios";
import { reactive } from "vue";
export default {
  components: {
    navigation,
    Footer,
  },
  setup() {
    const daasSchoolsformData = reactive({});
    const authenticFormData = reactive({});
    const daasCooperateFormData = reactive({});

    const submitDaasSchoolsformData = () => {
      axios
        .post("http://localhost:8080", daasSchoolsformData)
        .then((response) => {
          return response;
        });
    };
    const submitAuthenticFormData = () => {
      axios
        .post("http://localhost:8080", authenticFormData)
        .then((response) => {
          return response;
        });
    };

    const submitDaasCooperateFormData = () => {
      axios
        .post("http://localhost:8080", daasCooperateFormData)
        .then((response) => {
          return response;
        });
    };

    return {
      daasSchoolsformData,
      authenticFormData,
      daasCooperateFormData,
      submitDaasSchoolsformData,
      submitAuthenticFormData,
      submitDaasCooperateFormData,
    };
  },
};
</script>
<style>
</style>
