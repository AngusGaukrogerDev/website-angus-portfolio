<template>
  <div>
    <!-- <div class="text middle">
            <span>A</span>
            <span class="hidden">N</span>
            <span class="hidden">G</span>
            <span class="hidden">U</span>
            <span class="hidden">S</span>
            <span>G</span>
            <span class="hidden">A</span>
            <span class="hidden">U</span>
            <span class="hidden">K</span>
            <span class="hidden">R</span>
            <span class="hidden">O</span>
            <span class="hidden">G</span>
            <span class="hidden">E</span>
            <span class="hidden">R</span>
              
          </div> -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.middle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
}
.text {
  color: #fff;
  font-size: 70px;
  font-family: "montserrat";
  font-weight: 900;
  cursor: pointer;
}
.hidden {
  max-width: 0;
  opacity: 0;
  transition: 0.5s ease-in;
}
.text:hover .hidden {
  opacity: 1;
  max-width: 1em;
}
</style>
