<template>
    <div class=" w-screen  h-screen page__grid  ">
        <SubGrid1 />
        <div class="center__children ">ayy</div>
        <div class="center__children ">ayy</div>
        <div class=" center__children">ayy</div>
        <Subgrid2 />
        <div class=" center__children">ayy</div>
    </div>
       
</template>

<script setup>
    import SubGrid1 from './NavGrid/Subgrid1.vue'
    import Subgrid2 from './NavGrid/Subgrid2.vue'
    
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
}


</style>
<style>
.center__children{
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    padding: 5% 5% 5% 5%;
    
}
</style>