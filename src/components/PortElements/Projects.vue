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
        <div class="quad__column  items-center">
            <!-- Row 1 -->
            <div></div>
            <div>Name</div>
            <div></div>
            <div>Description</div>
            <div></div>
            <div>Stack</div>
            <div></div>
            <div>Links</div>
            <div></div>
            <!-- Row 2 -->
            <div></div>
            <div>
              World Cup Sweepstakes Allocator
            </div>
            <div></div>
            <div>
              A full-stack CRUD application for alloacting random teams to participants in a World Cup sweepstakes.
            </div>
            <div></div>
            <div >
              Vue.js, Tailwind CSS, Node.js, Express.js, SQLite3
            </div>
            <div></div>
            <div>
              <a class="btn btn-primary" href="https://github.com/AngusGaukrogerDev/WorldCupSweepstakes">Github Repo (Front End)  <ion-icon name="logo-github" ></ion-icon> </a>
            
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="py-4 justify-center flex d-flex">
              <div
                class="center__content return__button border-4 w-1 cursor-pointer hover__transition tooltip tooltip-bottom tooltip-primary"
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Loader from "../Loader.vue";

const router = useRouter();
let ready = ref(false);
</script>

<style lang="scss" scoped>
.center__all{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

.quad__column{
  display: grid;
  grid-row-gap: 1vw;
  grid-template-columns: auto 20vw auto 20vw auto 20vw auto 20vw auto;
}
</style>