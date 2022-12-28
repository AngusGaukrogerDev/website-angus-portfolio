<template>
  <div class="page__subgrid4 floating">
    <div class="center__children"></div>
    <a
      href="https://github.com/AngusGaukrogerDev"
      class="center__children border-4 hover__transition tooltip tooltip-top tooltip-primary"
      data-tip="GitHub"
    >
      <ion-icon name="logo-github" size="large"></ion-icon>
    </a>
    <a
      href="https://twitter.com/angus_gaukroger"
      class="center__children border-4 hover__transition tooltip tooltip-top tooltip-primary"
      data-tip="Twitter"
      
    >
      <ion-icon name="logo-twitter" size="large"></ion-icon>
    </a>
    <div class="center__children"></div>
    <a
      href="https://www.linkedin.com/in/angusgaukroger/"
      class="center__children border-4 hover__transition tooltip tooltip-bottom tooltip-primary"
      data-tip="LinkedIn"
    >
      <ion-icon name="logo-linkedin" size="large"></ion-icon>
    </a>
    <a
      class="center__children border-4 hover__transition tooltip tooltip-bottom tooltip-primary"
      data-tip="Contact"
      @click="emit('contactView');"
    >
      <ion-icon name="mail" size="large"></ion-icon>
    </a>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["contactView", ]);

// let contactClick = ref(false);

// function switchContactView() {
//   emit('contactView', );
// }
// function exitSequence() {
//     emit('redirect');
// }
</script>

<style lang="scss" scoped>
.page__subgrid4 {
  grid-row: 3 / span 2;
  grid-column: 1 / span 1;

  grid-template-columns: 50% auto auto;
  grid-template-rows: auto auto;
  display: grid;
}

.floating {
  animation-name: floating;
  animation-duration: 6s;
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
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>
