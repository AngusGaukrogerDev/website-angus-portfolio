<template>
    <div class=" page__subgrid border-4">
            <div class="center__children child1__subgrid1"> Hello</div>
            <div class="center__children">2</div>
            <div class="center__children">3</div>
            <div class="center__children">4</div>
            <div class="center__children">5</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page__subgrid{
    grid-row: 1 / span 3;
    grid-column: 1 / span 1;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto; 
    display: grid;
}



.child1__subgrid1{
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
    
}
</style>