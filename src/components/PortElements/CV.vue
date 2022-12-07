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
                :show="isShowing"
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
                      <div class="border-4 center__button_content hover__transition hover:scale-110 floating1">About</div>
                      <div></div>
                      <div class="border-4 center__button_content hover__transition hover:scale-110 floating2">Software Experience</div>
                      <div></div>
                      <div class="border-4 center__button_content hover__transition hover:scale-110 floating3">Education</div>
                      <div></div>
                    </div>
                    <div></div>         
                    <div class="button__display__bottom p-5">
                      <div></div>
                      <div class="border-4 center__button_content hover__transition hover:scale-110 floating4">Other Experience</div>
                      <div></div>
                      <div class="border-4 center__button_content hover__transition hover:scale-110 floating1">Other Information</div>
                      <div></div>
                      
                    </div>
                    <div>
                      <div class=" ">
                        <div
                          class="center__content__stack return__button border-4 cursor-pointer hover__transition tooltip tooltip-top tooltip-primary hover:scale-110"
                          data-tip="Return"
                          @click="router.push('/')"
                        >
                          <ion-icon size="large" name="return-up-back"> </ion-icon>
                        </div>
                      </div>
                    </div>         

                  </div>
                    <!-- Scrolling text section -->
                    <div class="">    
                        <section v-if="aboutSection" class="star-wars">
                          <div class="crawl">
                              <div class="title">
                                <p>Angus Gaukroger</p>
                                <h1>Full-Stack Software Engineer</h1>
                              </div>
                              <p>Junior Software Engineer with a keen interest in building a career in web development.</p>

                              <p>Highly motivated individual searching for an opportunity to learn new technologies, improve programming skills and grow as a developer within a software team.</p>
                              <p>Experienced in a variety of programming languages in an industrial and academic environment, as well as for personal projects.</p>
                          </div>                      
                        </section>
                        <section v-if="experienceSection"  class="star-wars">
                          <div class="crawl">
                            <div class="title">
                                <h1>Software Developer Experience</h1>
                                <h2>Junior Software Engineer – Loop Technology Ltd </h2>
                                <h3>09/2021 – Present</h3>
                            </div>
                            <p>• Building ASP.net Core MVC based server application with file handling (Remote Uploads/Downloads) and user accounts. Trusted to work for long periods of time unsupervised and make key design decisions. (C# (Razor), Javascript (JQuery, Three.js), Bootstrap CSS, HTML)</p>
                            <p>• Worked on projects interpreting TCP/UDP signals using Ethernet (C#) and a research and development project exploring the functionality of EtherCAT motor controllers (C/C++/Python)</p>
                            <p>• Created WPF based user interface plugins (C#) for KUKA pendants while following MVVM framework.</p>
                            <p>• Gained experience working with Senior Software Engineers while reporting directly to Software Manager.</p>
                            <div class="title">
                                <h2>Software Engineer Summer Intern – Loop Technology Ltd</h2>
                                <h3>07/2019 – 09/2019</h3>
                            </div>
                            <p>• Used KUKA Programming Language to configure robot to perform tasks in 3D space.</p>
                            <p>• Responsible for development of stepper motor control system.</p>
                            <p>• Worked alone as well as with other software engineers on each project.</p>
                          </div>
                        </section>
                        <section v-if="educationSection" class="star-wars">
                          <div class="crawl">
                            <div class="title">
                                <h1>Education</h1>
                                <h2>Electronic Engineering BEng (Hons) - University of Portsmouth – 2:1 Overall</h2>
                                <h2>A-Levels in Electronics, Maths and Physics</h2>
                                <h2>12 GCSE’s grades A-C including Maths and English Language</h2> 
                            </div>
                          </div>
                        </section>
                        <section v-if="oExperienceSection" class="star-wars">
                          <div class="crawl">
                            <div class="title">
                                <h1>Other Experience</h1>
                                <h2>UPRacing Electric Formula Student Team</h2>
                                <h3>10/2018 – 07/2020</h3>
                            </div>
                            <p>• Powertrain section head in second year on the team.</p>
                            <p>• Responsible for design and documentation of entire electric powertrain system.</p>
                            <p>• Trained and recruited new members.</p>
                            <p>• Formula Student Class 2 Winner at Silverstone 2019 competition.</p>
                            <div class="title">
                                <h2>Student Ambassador- University of Portsmouth</h2>
                                <h3>11/2018 – 06/2021</h3>
                            </div>
                            <p>• Assisted the university on open days in showing round potential students and their families.</p>
                            <p>• Required good verbal communication skills and teamwork to ensure days ran smoothly.</p>
                            <div class="title">
                                <h2>Customer Service Assistant – Mole Country Stores, Dorchester</h2>
                                <h3>11/2016 – 09/2018, 06/2020 – 09/2020</h3>
                            </div>
                            <p>• Part time job, responsible for individual departments of the store as well as checkouts.</p>
                            <p>• Returned during the COVID-19 pandemic to assist around the store.</p>
                          </div>
                        </section>
                        <section v-if="information" class="star-wars">
                          <div class="crawl">
                            <div class="title">
                                <h1>Additional Information</h1>
                                <h2>Full clean UK driving licence</h2>
                                <h2>Natively fluent in English and conversationally fluent in Spanish.</h2>
                            </div>
                            <div class="title">
                                <h1>Hobbies</h1>
                                <h2>Going to the gym.</h2>
                                <h2>Football.</h2>
                                <h2>Music – Bassist and Guitarist.</h2>
                                <h2>Practicing Spanish.</h2>
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

const router = useRouter();
let ready = ref(false);
let defaultView = ref(true);
let aboutSection = ref(false);
let experienceSection = ref(false);
let oExperienceSection = ref(false);
let educationSection = ref(false);
let information = ref(false);

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

.star-wars {
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  font-size: 400%;
  font-weight: 600;
 
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
}

.crawl {
  position: relative;
  top: 99999px;
  transform-origin: 50% 100%;
  animation: crawl 60s linear;
}
.crawl > .title {
  font-size: 120%;
  text-align: center;
}

.crawl > .title h1 {
  margin: 0 0 5%;
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