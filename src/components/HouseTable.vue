<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    data: Array<House>,
});

/**
 * Такой ерундой пришлось заниматься
 * из-за использования готового компонента
 * el-table. Если бы вывод данных происходил
 * через v-for, то отформатировать цену можно
 * было бы по месту. И это было бы правильнее)
 */
const formattedData = computed(() => {
    if (props.data) {
        return props.data.map((item) => {
            item.price = `${item.price.toLocaleString("ru-RU")} $`;
            return item;
        });
    }

    return [];
});
</script>

<template>
    <el-table :data="formattedData" class="table">
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="bedrooms" label="Bedrooms" />
        <el-table-column prop="bathrooms" label="Bathrooms" />
        <el-table-column prop="storeys" label="Storeys" />
        <el-table-column prop="garages" label="Garages" />
        <el-table-column prop="price" label="Price" />
    </el-table>
</template>

<style scoped>
.table {
    width: 100%;
}
</style>
