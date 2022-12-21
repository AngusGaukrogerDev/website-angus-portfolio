<template>
    
    <div id="FlipCard" class="flip-card bg-white dark:bg-black">
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
        <!-- Content here -->
        <div class="text-2xl py-10">Coming soon!</div>
        <div class="py-4">
            <div
              class="center__content return__button border-4 cursor-pointer hover__transition tooltip tooltip-bottom tooltip-primary"
              data-tip="Return"
              @click="router.push('/Travel')"
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

const router = useRouter();

</script>

<style lang="scss" scoped>
.center__all{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
</style>