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
        <TransitionRoot
          appear
          :show="isShowing"
          as="template"
          enter="transform transition duration-[800ms]"
          enter-from="opacity-0 rotate-[-120deg] scale-50"
          enter-to="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leave-from="opacity-100 rotate-0 scale-100 "
          leave-to="opacity-0 scale-95 "
        >
          <div class="border-4 px-32 py-20 flex row justify-center items-center">
            <div class="">
              <h1 class="dark:bg-black dark:text-white ">Angus Gaukroger</h1>
              <h2 class="">Full-Stack Software Developer</h2>
            </div>
          </div>
        </TransitionRoot>
      </div>


      <div class=" flip-card-back w-screen h-screen bg-white dark:bg-black stack__grid__main ">
        <div class="stack__grid">
            
        </div>
        <div class="stack__grid">
            
        </div>
        <div class="stack__grid">
            
        </div>
        <div class="stack__grid">
            
        </div>
        <div class="stack__grid center__content floating border-4">
            Technologies that I like to use
        </div>
        <div class="stack__grid">
  
        </div>
        <div class="stack__grid">
        </div>
        <div class="stack__grid">
            
        </div>
        <div class="stack__grid ">
            <div class="center__content"></div>
            <div class="center__content"></div>
            <div class="center__content"></div>
            <div class="stack__grid ">
                <div class="center__content return__button  border-4 cursor-pointer hover__transition tooltip tooltip-top  tooltip-primary"
                    data-tip="Return" @click="router.push('/');">
                <ion-icon size="large" name="return-up-back">
                </ion-icon>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

</script>

<style lang="scss" scoped>
.stack__grid__main{
    display: grid;
    grid-template-columns: 33.33333% 33.33333% 33.33333%;
    grid-template-rows: 33.33333% 33.33333% 33.33333%;
}
.stack__grid{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
}

.return__button{
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;    
}
.center__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>