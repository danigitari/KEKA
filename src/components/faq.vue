<template>
<navigation/>
<body class="bg-gray-100">
  <p class="font-bold text-kekaBlue px-10 py-10 text-2xl bg-gray-50">FREQUENTLY ASKED QUESTIONS  </p>
  <p class="font-bold text-kekaBlue px-10 py-5 text-xl">What is daas ?</p>
  <p class="pl-10 pb-5 ">Device as a Service (DaaS) equips businesses with a full PC fleet, IT support, and device life-cycle management packaged together in one subscription-based offering.</p>
</body>

<Footer/>
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
    
  },
}
</script>