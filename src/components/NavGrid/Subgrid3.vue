<template>
    <div v-if="!Check" class="child3__subgrid1 center__children floating border-4 bg-white dark:bg-black">
        <a class="scrolling__text">Hey! Welcome to my personal portfolio.</a>
    </div>
    <div v-if="Check" class="child3__subgrid1 center__children floating border-4 bg-white dark:bg-black">
        <form id="contact-form" @submit.prevent="sendEmail()" class="center_div">
            <h1 class="">Get in touch with me:</h1>
            <div class="two__column">

                    <label class="" for="name">Name: </label>
                    <input class="border-2 m-2" type="text" name="name" id="name" required="" v-model="contactForm.name">

                    <label class="" for="email">Email: </label>
                    <input class="border-2 m-2"  type="email" name="email" id="email" required="" v-model="contactForm.email">
               
                    <label class="label" for="email">Message:</label>
                    <textarea class=" border-2 m-2" name="textarea" id="textarea" required="" v-model="contactForm.message"></textarea>

            </div>
            
            <div class="border-4 my-4 p-2 hover:cursor-pointer hover:scale-105">
                <button class="hover:cursor-pointer" type="submit"  value="Send Message">Send Message</button>
            </div>
        </form>
        
    </div>
</template>

<script setup>
import {ref, } from 'vue'
import axios from 'axios';
let contact = ref(true);
let contactForm = {
    name: "",
    email: "",
    message: "",
    subject: 'Personal Portfolio Web Form',
};


let props = defineProps({
    Check: Boolean,
});


function sendEmail() {
    axios.post('https://mail.brth.uk:1234/api/v1/form/brth-cd', contactForm);
}
</script>

<style lang="scss" scoped>
.child3__subgrid1{
    grid-row: 2 / span 2;
    grid-column: 2 / span 1;
}

.center__div{
    display: flex;
    direction: column;
    justify-content: center;
    align-items: center;

}

.form__item{
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
}


.two__column{
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    justify-items: center;
    align-items: center;
}
</style>