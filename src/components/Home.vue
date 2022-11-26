<template>
    <div class="">
        <div class="w-screen  h-screen  page__grid ">
            <div class="">
                <!-- Placeholder -->
            </div>
            <SubGrid1 />   
            <Subgrid2 />
            <Subgrid4 />
            <Subgrid3 />
            <div class="">
                <!-- Placeholder -->
            </div>

            
        </div>
    </div>
       
</template>

<script setup>
    import SubGrid1 from './NavGrid/Subgrid1.vue'
    import Subgrid2 from './NavGrid/Subgrid2.vue'
    import Subgrid3 from './NavGrid/Subgrid3.vue'
    import Subgrid4 from './NavGrid/Subgrid4.vue'
    
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
    grid-column-gap: 2%;
    grid-row-gap: 2%;
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