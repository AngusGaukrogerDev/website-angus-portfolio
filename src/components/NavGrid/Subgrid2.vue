<template>
    <div class="page__subgrid2 floating">
        <div class="center__children child1__subgrid2 border-4">
            <ion-icon size="large" name="document-text"></ion-icon>
        </div>
        <div class="center__children border-4">1</div>
        <div class="center__children border-4">1</div>
        <div class="center__children  border-4">1</div>
        <div class="center__children border-4">1</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page__subgrid2{
    grid-row: 1 / span 2;
    grid-column: 3 / span 1;

    grid-template-columns: auto auto;
    grid-template-rows: auto auto ; 
    display: grid;
}
.child1__subgrid2{
    grid-row: 1 / span 2;
    grid-column: 1 / span 1;
}
.floating { 
    animation-name: floating;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}
 
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(15px, 15px); }
    100%   { transform: translate(0, -0px); }   
}
</style>