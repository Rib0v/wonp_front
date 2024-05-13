<script setup lang="ts">
import HouseFilter from "@/components/HouseFilter.vue";
import HouseTable from "@/components/HouseTable.vue";

const tableData = [
    {
        name: "Name1",
        price: 100500,
        bedrooms: 3,
        bathrooms: 3,
        storeys: 3,
        garages: 3,
    },
    {
        name: "Name2",
        price: 100500,
        bedrooms: 3,
        bathrooms: 3,
        storeys: 3,
        garages: 3,
    },
    {
        name: "Name3",
        price: 100500,
        bedrooms: 3,
        bathrooms: 3,
        storeys: 3,
        garages: 3,
    },
];
</script>

<template>
    <div>
        <div class="wrapper">
            <HouseFilter />
            <div class="data">
                <h1>Find your dream home!</h1>
                <HouseTable v-if="tableData.length" :data="tableData" />
                <p v-else>Unfortunately nothing was found. Please change your search parameters and try again ;)</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: 15rem 1fr;
    gap: 2rem;
}
</style>
