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
      <div class="tri__column">
        <div></div>
        <div>
          <div>
            <h1 class="py-3 text-2xl"><strong>Some of my favourite quotes:</strong></h1>
            <p class="italic px-8 py-3 text-xl">"Try to consider as transitory all adverse circumstances and distrubances. Like ripples in a pool, they occur and soon disappear"-The Dalai Llama, The Little Book of Buddhism</p>
            <p class="italic px-8 py-3 text-xl">"Don't be ashamed to need help. Like a soldier storming a wall, you have a mission to accomplish. And if you've been wounded and you need a comrade to pull you up, so what?"- Marcus Aurelius, Meditations</p>
            <p class="italic px-8 py-3 text-xl">"Everywhere each moment you have the option to accept this event with humility, to treat this person as he should be treated, to approach this thought with care. So that nothing irrational creeps in"- Marcus Aurelius, Meditations</p>
            <p class="italic  py-3 text-xl">"I learned thirty years ago that it is foolish to scold. I have enough trouble overcoming my own limitations without fretting over the fact that God has not seen fit to distribute evenly the gift of intelligence."- John Wanamaker</p>
            <p class="italic  py-3 text-xl">"In the quest for mental quiescence, there is a state where striving must be abandoned, for an effortless concentration is necessary. Your mind then becomes very tranquil and achieves a state of wholeness. At that moment, to make an effort would disturb that pure tranquility. So in order to maintain that tranquility, effortless effort must be used."- Dale Carnegie, How to win friends and influence people</p>
          </div>
        </div>
      </div>
      
      
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

</script>

<style lang="scss" scoped>
.center__all{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

.tri__column{
  display: grid;
  grid-template-columns: auto 70vw auto;
}
</style>