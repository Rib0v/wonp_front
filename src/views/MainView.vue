<script setup lang="ts">
import HouseFilter from "@/components/HouseFilter.vue";
import HouseTable from "@/components/HouseTable.vue";
import { api } from "@/api";
import { ref } from "vue";

const tableData = ref([]);

getHouses();

async function getHouses(query?: Query) {
    const params = query || {};
    try {
        const response = await api.get("/houses", { params });
        tableData.value = response.data?.data || [];
        console.log(response.data?.data);
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <div>
        <div class="wrapper">
            <HouseFilter @query="getHouses" />
            <div class="data">
                <h1>Find your dream home!</h1>
                <HouseTable v-if="tableData && tableData.length" :data="tableData" />
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
