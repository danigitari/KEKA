<template>
  <div class="slide">
    <transition name="slide">
      <slot> </slot>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["visibleSlide", "index"],
};
</script>
<style>
.slide-enter-active{
    transition: opacity 1s ease-in;
}
.slide-enter-from{
    opacity: 0.8;
   
}
.slide-enter-to{
    opacity: 1;
}

</style>