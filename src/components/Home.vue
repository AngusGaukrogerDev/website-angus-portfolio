<template>
    <div id="FlipCard" class="flip-card">
        <div id="CardInner" class="flip-card-inner" >
            <div id="CardFront" class="flip-card-front w-screen  h-screen  page__grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>  
                <TransitionRoot
                appear
                :show="isShowing"
                as="template"
                enter="transform transition duration-[400ms]"
                enter-from="opacity-0 rotate-[-120deg] scale-50"
                enter-to="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leave-from="opacity-100 rotate-0 scale-100 "
                leave-to="opacity-0 scale-95 "
                >
                    <div class="border-4 flex row justify-center items-center">
                        <div>
                        <h1>Angus Gaukroger</h1>
                        <h2>Full Stack Software Developer</h2>
                        </div> 
                    </div>
                </TransitionRoot>
                        
                     
                
                
            </div>
            <div id="CardBack" class="flip-card-back w-screen  h-screen  page__grid ">
                <div class="">
                    <!-- Placeholder -->
                </div>
                <SubGrid1 />   
                <Subgrid2 />
                <Subgrid4 />
                <Subgrid3 />
                <div class="">
                    <!-- Placeholder -->
                </div>

                
            </div>
        </div>
    </div>
       
</template>

<script setup>
    import SubGrid1 from './NavGrid/Subgrid1.vue'
    import Subgrid2 from './NavGrid/Subgrid2.vue'
    import Subgrid3 from './NavGrid/Subgrid3.vue'
    import Subgrid4 from './NavGrid/Subgrid4.vue'
    import { TransitionRoot } from '@headlessui/vue'
    import { onMounted, ref } from 'vue'
    import {useRouter} from 'vue-router';
    
    const isShowing = ref(true)
    // onMounted(() => { 
        
    //     isShowing.value = true;
    // })
</script>
<style lang="scss" scoped >
.page__grid{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto; 
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
    grid-column-gap: 2%;
    grid-row-gap: 2%;
}


</style>
<style>
.hover__transition {
    font: 22px Arial;
    display: inline-block;
    padding: 1em 2em;
    text-align: center;
    color: black;
    background: white; /* default color */

    /* "to left" / "to right" - affects initial color */
    background: linear-gradient(to left, white 50%, black 50%) right;
    background-size: 200%;
    transition: .5s ease-out;
}
.hover__transition:hover {
    background-position: left;
    cursor: pointer;
    color: white;
}

.flip-card {
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: white;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: white;
  /* color: white; */
  transform: rotateY(180deg);
}

.center__children{
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    padding: 5% 5% 5% 5%;
    border-color: #f3f4f6;
    
}

.floating__borders{
    border-color: 8px solid #4b5563;
    border-radius: 25px;
}
</style>