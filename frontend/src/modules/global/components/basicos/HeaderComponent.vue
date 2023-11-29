<template>
    <RouterLink 
        v-for="{ titulo, ruta } of links" 
        :key="titulo"
        :to="{ name: ruta }"/>
</template>

<script setup>
const props = defineProps({
    links: {
        type: Object,
        required: true
    }
})
</script>
