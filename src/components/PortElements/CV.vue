<template class="CV overflow-visible">
    <div id="FlipCard" class="flip-card bg-white dark:bg-black">
        <div id="CardInner" class="flip-card-inner">
        <div
            id="CardFront"
            class="flip-card-front w-screen bg-white dark:bg-black h-screen flex justify-center items-center"
        >
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

        <div
            id="CardBack"
            class="flip-card-back w-screen h-screen bg-white dark:bg-black flex column justify-center items-center "
        >
            <div class=" bg-white dark:bg-black  px-32 py-20">
                <div class=""></div>

                    <section class="star-wars">
                    <div class="crawl">
                        <div class="title">
                        <p>Angus Gaukroger</p>
                        <h1>Full-Stack Software Engineer</h1>
                        </div>
                        <p>Junior Software Engineer with a keen interest in building a career in web development.</p>

                        <p>Highly motivated individual searching for an opportunity to learn new technologies, improve programming skills and grow as a developer within a software team.</p>
                        <p>Experienced in a variety of programming languages in an industrial and academic environment, as well as for personal projects.</p>
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
                </div>
            </div>
        </div>
  </div>
    
</template>

<script setup>


</script>

<style lang="scss" scoped>
.CV{
    overflow: visible;
}

.star-wars {
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  
  font-size: 250%;
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
    top: 75vh;
    transform: rotateX(20deg)  translateZ(0);
  }
  100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}
</style>