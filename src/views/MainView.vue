<script setup lang="ts">
import HouseFilter from "@/components/HouseFilter.vue";
import HouseTable from "@/components/HouseTable.vue";
import { api } from "@/api";
import { ref, type Ref } from "vue";
import { ElLoading } from "element-plus";

const tableData = ref([]);
const reactiveQuery = ref({});
const loading = ref(false);
const throttle = createThrottle(500);

getHouses();

async function getHouses(query?: Query) {
    loading.value = true;

    const loadIndicator = ElLoading.service({
        text: "Loading",
        background: "rgba(0, 0, 0, 0.0)",
    });

    try {
        const params = query || {};
        const response = await api.get("/houses", { params });
        tableData.value = response.data?.data || [];
        console.log(response.data?.data); // для наглядности
    } catch (error) {
        console.error(error);
    }

    loadIndicator.close();
    loading.value = false;
}

/**
 * Ограничение на количество запросов в секунду
 * чтобы не перегружать сервер
 */
function getHousesWithThrottle(query: Query) {
    reactiveQuery.value = query;
    throttle(getHouses, reactiveQuery);
}

/**
 * Реализовал в виде замыкания, чтобы
 * потенциально можно было создать
 * несколько экземпляров и использовать
 * для разных запросов. В случае
 * переиспользования вынес бы в папку utils
 */
function createThrottle(interval: number) {
    let readyToChange = true;

    function throttle(callback: Function, ref: Ref) {
        if (!readyToChange) return;

        const oldValue = ref.value;
        callback(ref.value);
        readyToChange = false;

        setTimeout(() => {
            readyToChange = true;

            if (ref.value !== oldValue) {
                throttle(callback, ref);
            }
        }, interval);
    }

    return throttle;
}
</script>

<template>
    <div>
        <div class="wrapper">
            <HouseFilter @query="getHousesWithThrottle" />
            <div class="data">
                <h1>Find your dream home!</h1>
                <template v-if="!loading">
                    <HouseTable v-if="tableData && tableData.length" :data="tableData" />
                    <p v-else>Unfortunately nothing was found. Please change your search parameters and try again ;)</p>
                </template>
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
