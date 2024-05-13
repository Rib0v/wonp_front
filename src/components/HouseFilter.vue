<script setup lang="ts">
import { ref, watch, type Ref } from "vue";

const name = ref("");
const minPrice = ref("");
const maxPrice = ref("");
const bedrooms = ref("");
const bathrooms = ref("");
const storeys = ref("");
const garages = ref("");

makeInputsNumeric([minPrice, maxPrice, bedrooms, bathrooms, storeys, garages]);

function makeInputsNumeric(inputs: Ref[]): void {
    for (const input of inputs) {
        watch(input, () => {
            input.value = input.value.replace(/\D/g, "");
        });
    }
}
</script>

<template>
    <div class="filters">
        <h2 class="title">Filters</h2>
        <h3>Search by name</h3>
        <ElInput v-model="name" class="input" />
        <h3>Min price</h3>
        <ElInput v-model="minPrice" class="input" />
        <h3>Max price</h3>
        <ElInput v-model="maxPrice" class="input" />
        <h3>Bedrooms</h3>
        <ElInput v-model="bedrooms" class="input" />
        <h3>Bathrooms</h3>
        <ElInput v-model="bathrooms" class="input" />
        <h3>Storeys</h3>
        <ElInput v-model="storeys" class="input" />
        <h3>Garages</h3>
        <ElInput v-model="garages" class="input" />
    </div>
</template>

<style scoped>
.filters {
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: -3px 4px 8px 4px rgba(34, 60, 80, 0.06);
}

.title {
    margin-top: 0;
}

.input {
    margin-bottom: 0.5rem;
}
</style>
