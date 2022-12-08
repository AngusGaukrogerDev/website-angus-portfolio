<template class="CV overflow-visible">
    <Loader @complete="ready = true" />
    <div v-if="ready" id="FlipCard" class="flip-card bg-white dark:bg-black">
        <div id="CardInner" class="flip-card-inner">
            <div id="CardFront" class="flip-card-front w-screen bg-white dark:bg-black h-screen flex justify-center items-center">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <TransitionRoot
                appear
                :show="frontPage"
                as="template"
                enter="transform transition duration-[800ms]"
                enter-from="opacity-0 rotate-[-120deg] scale-50"
                enter-to="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leave-from="opacity-100 rotate-0 scale-100 "
                leave-to="opacity-0 scale-95 "
                >
                <div class="border-4  px-32 py-20 flex row justify-center items-center">
                    <div class="">
                    <h1 class="dark:bg-black dark:text-white">Angus Gaukroger</h1>
                    <h2 class="">Full-Stack Software Developer</h2>
                    </div>
                </div>
                </TransitionRoot>
            </div>

            <div id="CardBack" class="flip-card-back w-screen h-screen bg-white dark:bg-black flex column justify-center items-center ">
                <div  class="bg-white dark:bg-black   ">  
                  <div v-if="defaultView" class="default__grid  w-screen">   
                    <div></div>         
                    <div  class="button__display__top  p-5">
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
                        <a @click="rollText(1, 17000)" class="border-4 center__button_content hover__transition hover:scale-110 floating1">About</a>
                      </TransitionRoot>
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
                        <a @click="rollText(2, 20000)" class="border-4 center__button_content hover__transition hover:scale-110 floating2">Software Experience</a>
                      </TransitionRoot>
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
                        <a @click="rollText(3, 12000)" class="border-4 center__button_content hover__transition hover:scale-110 floating3">Education</a>
                      </TransitionRoot>
                      <div></div>
                    </div>
                    <div></div>         
                    <div class="button__display__bottom p-5">
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
                        <a @click="rollText(4, 24000)" class="border-4 center__button_content hover__transition hover:scale-110 floating4">Other Experience</a>
                      </TransitionRoot>
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
                        <a @click="rollText(5, 10000)" class="border-4 center__button_content hover__transition hover:scale-110 floating1">Other Information</a>
                      </TransitionRoot>
                      <div></div>
                      
                    </div>
                    <div>
                      <div class=" ">
                        <TransitionRoot
                        appear
                        :show="isShowing"
                        as="template"
                        enter="transform transition duration-[800ms]"
                        enter-from="opacity-0 rotate-[-120deg] scale-50"
                        enter-to="opacity-100 rotate-0 scale-100"
                        leave="transform duration-100 transition ease-in-out"
                        leave-from="opacity-100 rotate-0 scale-100 "
                        leave-to="opacity-0 scale-95 "
                        >
                        <div
                          class="center__content__stack return__button border-4 cursor-pointer hover__transition tooltip tooltip-top tooltip-primary hover:scale-110"
                          data-tip="Return"
                          @click="router.push('/')"
                        >
                          <ion-icon size="large" name="return-up-back"> </ion-icon>
                        </div>
                        </TransitionRoot>
                      </div>
                    </div>         

                  </div>
                    <!-- Scrolling text section -->
                    <div class="">    
                        <section v-if="aboutSection" class="star-wars">
                          <div class="crawl">
                              <div class="title">
                                <p>Angus Gaukroger - Full-Stack Software Developer</p>
                              </div>
                              <p class="py-4">Junior Software Engineer with a keen interest in building a career in web development.</p>
                              <p class="py-4">Highly motivated individual searching for an opportunity to learn new technologies, improve programming skills and grow as a developer within a software team.</p>
                              <p class="py-4">Experienced in a variety of programming languages in an industrial and academic environment, as well as for personal projects.</p>
                          </div>                      
                        </section>
                        <section v-if="experienceSection"  class="star-wars">
                          <div class="crawl">
                            <div class="title">
                                <h2>Junior Software Engineer – Loop Technology Ltd - 09/2021 – Present</h2>

                            </div>
                            <p>• Building ASP.net Core MVC based server application with file handling and user accounts. (C# (Razor), Javascript (JQuery, Three.js), Bootstrap CSS, HTML)</p>
                            <p>• TCP/UDP signal interpretation using Ethernet (C#). </p>
                            <p>• Researched the functionality of EtherCAT motor controllers (C/C++/Python)</p>
                            <p>• Created WPF based user interface plugins (C#)</p>
                            <div class="title">
                                <h2>Software Engineer Summer Intern – Loop Technology Ltd - 07/2019 – 09/2019</h2>
                            </div>
                            <p>• Programmed Kuka robots in Kuka Robot Language.</p>
                            <p>• Developed stepper motor control system.</p>
                          </div>
                        </section>
                        <section v-if="educationSection" class="star-wars">
                          <div class="crawl">
                            <div class="title">
                                <h2>Electronic Engineering BEng (Hons) - University of Portsmouth – 2:1 Overall</h2>
                                <h2>A-Levels in Electronics, Maths and Physics</h2>
                                <h2>12 GCSE’s grades A-C including Maths and English Language</h2> 
                            </div>
                          </div>
                        </section>
                        <section v-if="oExperienceSection" class="star-wars">
                          <div class="crawl">
                            <div class="title">
                                <h2>UPRacing Electric Formula Student Team 10/2018 – 07/2020</h2>
                            </div>
                            <p>• Formula Student Class 2 Winner at Silverstone 2019 competition.</p>
                            <p>• Powertrain section head in second year on the team.</p>
                            <p>• Designed and documented entire electric powertrain system.</p>
                            <p>• Trained and recruited new members.</p>
                            <div class="title">
                                <h2>Student Ambassador- University of Portsmouth - 11/2018 – 06/2021</h2>
                            </div>
                            <p>• Showed potential students and their families around university.</p>
                            <div class="title">
                                <h2>Customer Service Assistant – Mole Country Stores, Dorchester - 11/2016 – 09/2018, 06/2020 – 09/2020</h2>
                            </div>
                            <p>• Responsible for individual departments of the store as well as checkouts.</p>
                            <p>• Returned to assist during the COVID-19 pandemic.</p>
                          </div>
                        </section>
                        <section v-if="information" class="star-wars">
                          <div class="crawl">
                            <div class="title">
                                <h2>Full clean UK driving licence</h2>
                                <h2>Natively fluent in English and conversationally fluent in Spanish.</h2>
                            </div>
                            <div class="title">
                                <h1>Hobbies include going to the gym, football, playing music and practicing Spanish. </h1>
                            </div>
                          </div>
                        </section>
                          
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
import { TransitionRoot } from "@headlessui/vue";

const router = useRouter();
let isShowing = ref(true);
const frontPage = ref(true);

let ready = ref(false);
let defaultView = ref(true);
let aboutSection = ref(false);
let experienceSection = ref(false);
let oExperienceSection = ref(false);
let educationSection = ref(false);
let information = ref(false);

function rollText(area, delayTime){
  isShowing.value = false;
  switch(area)
  {
    case 1:
      delay(aboutSection, delayTime);
      break;
    case 2:
      delay(experienceSection, delayTime);
      break;
    case 3:
      delay(educationSection, delayTime);
      break;
    case 4:
      delay(oExperienceSection, delayTime);
      break;
    case 5:
      delay(information, delayTime);
      break;
    default:
      break;

  }
  
  
}
async function delay(section, delayTime) {
  
  await sleep(500);
  section.value = true;

  await sleep(delayTime);
  section.value = false;
  isShowing.value = true;

}
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time || 1000);
  });
}
</script>

<style lang="scss" scoped>
.default__grid{
  display: grid;
  grid-template-rows: auto 25% auto 25% auto;
  height: 100vh;
}
.button__display__top{
  display: grid;
  grid-template-columns: auto 25% auto 25% auto 25% auto;
  grid-template-rows: 20vh;

}
.button__display__bottom{
  display: grid;
  grid-template-columns: auto 25%  12.5% 25% auto;
  grid-template-rows: 20vh;
}

.center__button_content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
 
}
.CV{
    overflow: visible;
}

.fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
}

.star-wars {
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;

  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
}

.crawl {
  position: relative;
  top: 99999px;
  transform-origin: 50% 100%;
  animation: crawl 45s linear;
}
.crawl > .title {
  font-size: 120%;
  text-align: center;
}

.crawl > .title h1 {

  margin-top: 5%;

  text-transform: uppercase;
}

.crawl > .title h2 {
  margin: 0 0 5%;
  margin-top: 5%;
  text-transform: uppercase;
}
.crawl > .title h3 {
  margin: 0 0 5%;
  margin-bottom: 5%;
  text-transform: uppercase;
}

@keyframes crawl {
  0% {
    top: 500px;
    transform: rotateX(20deg)  translateZ(0);
  }
  100% { 
    top: -8000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}
</style>