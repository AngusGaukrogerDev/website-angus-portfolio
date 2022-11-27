<template>
    <div class="child3__subgrid1 center__children floating border-4">
        <a class="scrolling__text">Hey! Welcome to my personal portfolio.</a>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.child3__subgrid1{
    grid-row: 2 / span 2;
    grid-column: 2 / span 1;
}
.floating { 
    animation-name: floating;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}
 
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(-15px, -15px); }
    100%   { transform: translate(0, -0px); }   
}

.scrolling__text{
    overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid black; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .1em; /* Adjust as needed */
  animation: 
    typing 5s steps(38, end),
    blink-caret 1.5s step-end infinite;
}
@keyframes typing {
  from { width: 0 }
  to { width: 80% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}
</style>