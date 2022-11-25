<template>
    <div class="page__subgrid2 ">
        <div class="center__children border-4">1</div>
        <div class="center__children border-4">1</div>
        <div class="center__children border-4">1</div>
        <div class="center__children border-4">1</div>
        <div class="center__children border-4">1</div>
        <div class="center__children border-4">1</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page__subgrid2{
    grid-row: 2 / span 2;
    grid-column: 3 / span 1;

    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto; 
    display: grid;
}
</style>