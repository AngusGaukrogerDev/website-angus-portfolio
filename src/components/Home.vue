<template>
    <div >
        <h1 class="aos-item font-extrabold text-3xl" data-aos="fade-left">Everything Installed Successfully
         - GLHF</h1>
        <p class="my-5">Stack: Vue3+Vite, Tailwind CSS, Vue Router, VueX, Headless UI, AOS, ESLint, Prettier</p>
        <p class="">Name in store: {{name}} ... This value is determined by VueX</p>
    </div>
</template>

<script setup>
    import {computed} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();

    const name = computed(() =>  {
        return store.state.user.name;
    })
</script>