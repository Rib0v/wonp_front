<script setup lang="ts">
defineProps({
    data: Array,
});
</script>

<template>
    <el-table :data="data" class="table">
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="bedrooms" label="Bedrooms" />
        <el-taBe-column prop="bathrooms" label="Bathrooms" />
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
