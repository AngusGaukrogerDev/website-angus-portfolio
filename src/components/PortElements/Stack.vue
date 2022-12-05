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
              <h1 class="dark:bg-black dark:text-white ">Angus Gaukroger</h1>
              <h2 class="">Full-Stack Software Developer</h2>
            </div>
          </div>
       
      </div>


      <div class=" flip-card-back w-screen h-screen bg-white dark:bg-black stack__grid__main ">
        <div  class="stack__grid center__content">
          <TransitionRoot
            appear
            :show="fadeInElements"
            as="template"
            enter="transform transition duration-[200ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95 "
          >
          <div  class="center__content p-4 border-4">
            <ion-icon size="large" name="logo-vue"></ion-icon>
            Vue.js
          </div>
          </TransitionRoot>
        </div>
        <div  class="stack__grid center__content">
          <TransitionRoot
            appear
            :show="fadeInElements"
            as="template"
            enter="transform transition duration-[200ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95 "
          >
          <div class="center__content p-4 border-4 ">
            <ion-icon size="large" name="logo-sass"></ion-icon>
            SASS
          </div>
          </TransitionRoot>
        </div>
        <div  class="stack__grid center__content">
          <TransitionRoot
            appear
            :show="fadeInElements"
            as="template"
            enter="transform transition duration-[200ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95 "
          >
          <div class="center__content p-4 border-4 ">
            <ion-icon size="large" name="logo-nodejs"></ion-icon>
            Node.js
          </div>
          </TransitionRoot>
        </div>
        <div  class="stack__grid center__content">
          <TransitionRoot
            appear
            :show="fadeInElements"
            as="template"
            enter="transform transition duration-[200ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95 "
          >
          <div class="center__content p-4 border-4 ">
            <ion-icon size="large" name="logo-html5"></ion-icon>
            HTML5
          </div>
          </TransitionRoot>
        </div>
        <div @mouseover="fadeInElements = true;" @mouseleave="fadeInElements = false;" class="stack__grid center__content floating border-4">
            Some Of My Favourite Technologies!
            <span class="bold" v-if="!fadeInElements">Tip: Hover here!</span>
        </div>
        <div class="stack__grid center__content">
          <TransitionRoot
            appear
            :show="fadeInElements"
            as="template"
            enter="transform transition duration-[200ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95 "
          >
          <div  class="center__content p-4 border-4">
            <ion-icon size="large" name="logo-stackoverflow"></ion-icon>
            ;)
          </div>
          </TransitionRoot>
        </div>
        <div class="stack__grid center__content">
          <TransitionRoot
            appear
            :show="fadeInElements"
            as="template"
            enter="transform transition duration-[200ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95 "
          >
          <div class="center__content p-4 border-4">
            <img src="../../assets/netlogo.png"  />
            .NET Core
          </div>
          </TransitionRoot>
        </div>

        <div class="stack__grid center__content">
          <TransitionRoot
            appear
            :show="fadeInElements"
            as="template"
            enter="transform transition duration-[200ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95 "
          >
          <div class="center__content p-4 border-4">
            <img v-if="!isDark" src="../../assets/tailwindcss.png"  />
            <img v-if="isDark" src="../../assets/tailwindcss2.png"  />
            TailwindCSS
          </div>
          </TransitionRoot>
        </div>
        <div class="stack__grid center__content">
            <div class=" ">
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
import { ref } from "vue";
import { TransitionRoot } from '@headlessui/vue'
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const router = useRouter();

let fadeInElements = ref(false);

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