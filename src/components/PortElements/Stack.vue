<template >
    <div class="w-screen h-screen bg-white dark:bg-black">
        <div id="rotator"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#rotator {
  position: relative;
  width: 50%;
  height: 50%;
  animation: rotations 6s linear infinite;
  border: 1px black dashed;
  border-radius: 50%;
  margin: 3rem;
}

#rotator:before, #rotator:after {
  position: absolute;
  content: '';
  display: block;
  height: 3rem;
  width: 3rem;
  animation: inherit;
  animation-direction: reverse;
}

#rotator:before {
  background-color: black;
  top: -50%;
  left: -50%;
}

#rotator:after {
  background-color: black;
  bottom: -.25rem;
  right: -.25rem;
}


@keyframes rotations {
  to { transform: rotate(360deg) }
}
</style>