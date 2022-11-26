<template>
    <div class="page__subgrid4 floating">
        <div class="center__children"></div>
        <div class="center__children border-4">
            <ion-icon name="logo-github" size="large"></ion-icon>
        </div>
        <div class="center__children border-4">            
            <ion-icon name="logo-twitter" size="large"></ion-icon>
        </div>
        <div class="center__children "></div>
        <div class="center__children border-4">            
            <ion-icon name="logo-linkedin" size="large"></ion-icon>
        </div>
        <div class="center__children border-4">            
            <ion-icon name="mail" size="large"></ion-icon>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page__subgrid4{
    grid-row: 3 / span 2;
    grid-column: 1 / span 1;

    grid-template-columns: 50% auto auto;
    grid-template-rows: auto auto ; 
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
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}
</style>