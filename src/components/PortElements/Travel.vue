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

      <div class="flip-card-back w-screen h-screen bg-white dark:bg-black ">
        <div  class=" w-screen h-screen bg-white dark:bg-black travel__layout">
          
        
          
          <!-- Content here -->
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="hover:scale-105">
            <div class="card card-compact  dark:bg-white dark:text-black w-60 border-4 shadow-xl">
            <figure><img src="../../assets/ValleDeCocura.jpg" alt="ValleDeCocura" /></figure>
              <div class="card-body center__all">
                <h2 class="card-title ">Colombia</h2>
                <p>Coffee, salsa, Carribean Coast, mountains.. This country has it all.</p>
                <div class="card-actions justify-center hover:scale-105">
                  <button class="btn btn-primary text-white">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div class="hover:scale-105">
            <div class="card card-compact  dark:bg-white dark:text-black w-60 border-4 shadow-xl">
            <figure><img src="../../assets/cajamarca.jpg" alt="cajamarca" /></figure>
              <div class="card-body center__all">
                <h2 class="card-title">Perú</h2>
                <p>Land of the Incas, incredible food and all types of diverse landscapes.</p>
                <div class="card-actions justify-center hover:scale-105">
                  <button class="btn btn-primary text-white">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div class="hover:scale-105">
            <div class="card card-compact  dark:bg-white dark:text-black w-60 border-4 shadow-xl">
              <figure><img class="scale__images" src="../../assets/cuenca.jpg" alt="cuenca" /></figure>
                <div class="card-body center__all">
                  <h2 class="card-title">Ecuador</h2>
                  <p>A small, but super diverse country that I wish I had more time in!</p>
                  <div class="card-actions justify-center hover:scale-105">
                    <button class="btn btn-primary text-white">Read More</button>
                  </div>
                </div>
              </div>
          </div>
          <div></div>
          <div class="hover:scale-105">
            <div class="card card-compact  dark:bg-white dark:text-black w-60 border-4 shadow-xl">
              <figure><img class="scale__images" src="../../assets/barcelona.jpg" alt="barcelona" /></figure>
                <div class="card-body center__all">
                  <h2 class="card-title">Spain</h2>
                  <p>Paella, Playa and Snowy peaks. My favourite country that I have visited in Europe so far!</p>
                  <div class="card-actions justify-center hover:scale-105">
                    <button class="btn btn-primary text-white">Read More</button>
                  </div>
                </div>
              </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          
          <div></div>
          <div></div>
          <div class="hover:scale-105">
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
</script>

<style lang="scss" scoped>
.scale__images{
  height: 70%;
  width: auto;
}
.center__all{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

.travel__layout{
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto;
  grid-template-rows: auto 60vh  auto ;
  align-items: center;
  justify-items: center;
}
</style>