<template>
  <Loader @complete="ready = true" />
  <div v-if="ready" id="FlipCard" class="flip-card bg-white dark:bg-black">
  <div id="CardInner" class="flip-card-inner ">
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
          <h1 class="text-2xl"><strong>Angus Gaukroger</strong> </h1>
          <p>Hola! Qué más pues? My name is Angus and I would like to welcome you to my website and personal portfolio.</p>
          <p>I am a 22 year old Software Engineer from Dorchester, England. Currently, I work for a company called Loop Technology Ltd who are a robotics and manufacturing company based in Dorchester.
                        My time working at Loop Technology has exposed me to many types of projects and technologies.</p>
          <p> In my free time outside of work, I have been learning web technologies. I like working with Javascript predominantly, and in particular Vue.js, but can easily adapt to whatever stack is put infront of me. I have an interest in all parts of the stack, but I particularly enjoy creating frontend UI's.</p>
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
  animation-duration: 9s;
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
