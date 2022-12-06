<template>
  <div class="page__subgrid floating bg-white dark:bg-black">
    <div
      class="center__children child1__subgrid2 border-4 hover__transition tooltip tooltip-left tooltip-primary"
      @click="router.push('/About')"
      data-tip="About Me"
    >
      <ion-icon size="large" name="finger-print"></ion-icon>
    </div>
    <div
      class="center__children border-4 hover__transition tooltip tooltip-top tooltip-primary"
      @click="router.push('/Quotes')"
      data-tip="Quotes"
    >
      <ion-icon size="large" name="megaphone"></ion-icon>
    </div>
    <div
      class="center__children child1__subgrid3 border-4 hover__transition tooltip tooltip-bottom tooltip-primary"
      @click="router.push('/Goals')"
      data-tip="Goals"
    >
      <ion-icon size="large" name="flag"></ion-icon>
    </div>
    <div
      class="center__children border-4 hover__transition tooltip tooltip-right tooltip-primary"
      @click="router.push('/Travel')"
      data-tip="Travel"
    >
      <ion-icon size="large" name="earth"></ion-icon>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const emit = defineEmits(["redirect"]);
const router = useRouter();
// function exitSequence() {
//     emit('redirect');
// }
</script>

<style lang="scss" scoped>
.page__subgrid {
  grid-row: 1 / span 2;
  grid-column: 1 / span 1;

  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  display: grid;
}

.child1__subgrid1 {
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
}

.child1__subgrid2 {
  grid-row: 1 / span 3;
}
.child1__subgrid3 {
  grid-row: 4 / span 2;
}

.floating {
  animation-name: floating;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(-15px, -15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>
