<template>
    <Loader @complete="ready = true" />
    <div v-if="ready" id="FlipCard" class="flip-card bg-white dark:bg-black">
    <div id="CardInner" class="flip-card-inner">
      <div
        id="CardFront"
        class="flip-card-front w-screen bg-white dark:bg-black h-screen page__grid center__content"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div class="border-4 px-32 py-20 flex row justify-center items-center">
          <div class="">
            <h1 class="dark:bg-black dark:text-white">Angus Gaukroger</h1>
            <h2 class="">Full-Stack Software Developer</h2>
          </div>
        </div>
      </div>

      <div
        class="flip-card-back w-screen h-screen bg-white dark:bg-black stack__grid__main"
      >
      <div  class=" w-screen h-screen center__all bg-white dark:bg-black ">
        <h1 class="py-3">Some life goals: Sorted from short to long term.</h1>
        <p class="italic  py-3">"Men who think in decades are dangerous"- Kris Sturmey</p>
        <span class="py-0.5">- Continue to show love and gratitude to my family and close friends.</span>
        <span class="py-0.5">- To become a digial nomad, with the freedom to live anywhere.</span>
        <span class="py-0.5">- Become a Professional Full-Stack Web Developer.</span>
        <span class="py-0.5">- 100kg Barbell Bench Press (for 5 reps).</span>
        <span class="py-0.5">- Complete 1000 days without alcohol. (Currently on day {{TotalDays}}).</span>
        <span class="py-0.5">- To start my own business, and make a salary from it.</span>
        <span class="py-0.5">- To question and challenge my mindset and beliefs, in a way that is healthy for personal growth.</span>
        <span class="py-0.5">- To visit and explore in depth, every country in Latin America.</span>
        <span class="py-0.5">- To become fluent in Arabic.</span>
        <span class="py-0.5">- To become a good father. </span>
        <div class="py-4">
            <div
              class="center__content return__button border-4 cursor-pointer hover__transition tooltip tooltip-bottom tooltip-primary"
              data-tip="Return"
              @click="router.push('/')"
            >
              <ion-icon size="large" name="return-up-back"> </ion-icon>
            </div>
        </div>
    </div>
      </div>
    </div>
  </div>
    
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Loader from "../Loader.vue";

const router = useRouter();
let ready = ref(false);

let date_1 = new Date('09/18/2022');
let date_2 = new Date();

let difference = date_1.getTime() - date_2.getTime();
let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))*-1;

</script>

<style lang="scss" scoped>
.center__all{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

</style>