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

    <div class="flip-card-back w-screen h-screen about__layout bg-white dark:bg-black ">
    
      <div class="center__all"></div>
      <div class="center__all"></div>
      <div class="center__all">
      </div>
      <div class="center__all"></div>
      <div class="center__all"></div>
      <div class="center__all"></div>
      <div class="center__all ">
        <img class="floating mask mask-square border-4 image__scale" src="../../assets/IMG-20220824-WA0076.jpg" />
      </div>
      <div class="center__all"></div>
      <div class="center__all floatingalt">
        <div>
          <h1>Angus Gaukroger</h1>
        </div>
        <div class="py-4">
            <div
              class="center__content return__button border-4 cursor-pointer hover__transition tooltip tooltip-bottom tooltip-primary"
              data-tip="Return"
              @click="router.push('/')"
            >
              <ion-icon size="large" name="return-up-back"> </ion-icon>
            </div>
        </div></div>
      <!-- <div class="py-4">
          <div
            class="center__content return__button border-4 cursor-pointer hover__transition tooltip tooltip-bottom tooltip-primary"
            data-tip="Return"
            @click="router.push('/')"
          >
            <ion-icon size="large" name="return-up-back"> </ion-icon>
          </div>
      </div> -->
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
.floatingalt {
  animation-name: floatingalt;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floatingalt {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(15px, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
.image__scale{
  height: 70vh;
  width: auto;

}
.about__layout{
  display: grid;
  grid-template-columns: auto 45vw auto 45vw auto;
  grid-template-rows: auto 70vh auto;
}
</style>
