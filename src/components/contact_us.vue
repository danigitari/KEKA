<template>
  <navigation />
  <div class="contact_us">
    <div
      class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-gray-100"
    >
      <div class="col-span-1 py-20 px-5">
        <div class="grid grid-cols-9">
          <div class="col-span-9 m-5">
            <div class="py-2">
              <span class="text-xl"> Register a new account </span>
            </div>
            <div class="mr-10 xl:mr-20">
              <div class="grid grid-rows-4">
                <div class="row-span-1 py-2">
                  <div class="py-2">
                    <input
                      type="text"
                      id="first_name"
                      placeholder="First name"
                      class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
                    />
                  </div>
                  <div class="py-2">
                    <input
                      type="text"
                      id="last_name"
                      placeholder="Last name"
                      class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
                    />
                  </div>
                  <div class="py-2">
                    <input
                      type="text"
                      id="email"
                      placeholder="Email"
                      class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
                    />
                  </div>
                  <div class="py-2">
                    <input
                      type="text"
                      id="password"
                      placeholder="Password"
                      class="form-control w-full py-2 px-2 text-green-darker rounded border-solid shadow-md"
                    />
                  </div>
                  <div class="py-2">
                    <button
                      @click.prevent=""
                      class="btn-primary rounded-lg shadow-md bg-[#1762E2] p-3"
                    >
                      <span class="text-white"> Sign up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md:col-span-1 md:bg-[#1762E2] xl:col-span-1 lg:col-span-1 lg:bg-[#1762E2] xl:bg-[#1762E2]"
      >
        <div class="mx-10 ml-5">
          <div class="grid grid-rows-4">
            <div class="row-span-1 flex shrink h-2/5">
              <img
                src="https://web.archive.org/web/20220704075849im_/https://www.kekaprecision.com/wp-content/uploads/2022/04/cropped-KEKA-Logo.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import navigation from "./navigation.vue";
import Footer from "./footer.vue";
export default {
  components: {
    navigation,
    Footer,
  },
  setup() {},
};
</script>
