<template>
    <h1>Info del modulo</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useModulos from "../composables/useModulos";


const { params } = useRoute();
const { infoModulo, obtenerModulo } = useModulos();
const { id: idModulo } = params;

onMounted(() => {
    console.log(params);
    console.log(idModulo);
    obtenerModulo(idModulo);
})
</script>