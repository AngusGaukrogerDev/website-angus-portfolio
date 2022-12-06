<template>
  <!-- This entire component is purely aesthetic, I know how to wire it up so it actually serves the purpose of waiting for everything to load, but that's not what it does,
    purely aesthetic, hate me if you want... it's my port ;) -->

  <div class="loader" v-if="!isLoaded">
    <div class="small__square1"></div>
    <div class=""></div>
    <div class=""></div>
    <div class="small__square2"></div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref, onMounted, defineEmits } from "vue";

let isLoaded = ref(false);
const emit = defineEmits("complete");
const isDark = useDark();
let strokeColor = ref("");
// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

onMounted(() => {
  //   document.onreadystatechange = () => {
  //     if (document.readyState == "complete") {
  //       isLoaded.value = true;
  //     }
  //     console.log(isLoaded);
  //   };

  if (isDark.value) {
    strokeColor.value = "white";
  } else {
    strokeColor.value = "black";
  }
  delay();
});
async function delay() {
  await sleep(1000);
  isLoaded.value = true;
  console.log(isLoaded);
  emit("complete");
}
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time || 1000);
  });
}
</script>

<style lang="scss" scoped>
$color: #4b5563;
.loader {
  display: grid;
  grid-template-columns: 1vw 1vw;
  grid-template-rows: 1vw 1vw;
  grid-gap: 0.5vw;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
}
.small__square1 {
  background-color: v-bind(strokeColor);
  animation: path1 1s infinite;
}
@keyframes path1 {
  40% {
    transform: translateX(1.5vw);
  }
  80% {
    transform: translateY(1.5vw);
  }
}

.small__square2 {
  background-color: v-bind(strokeColor);
  animation: path2 1s infinite;
}
@keyframes path2 {
  40% {
    transform: translateX(-1.5vw);
  }
  80% {
    transform: translateY(-1.5vw);
  }
}
</style>
