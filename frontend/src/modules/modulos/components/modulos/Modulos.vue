<template>
    <NGrid :x-gap="ancho" :y-gap="alto" :cols="columnas">
        <NGi v-for="dato in datos" :key="dato">
            <Modulo :modulo="dato"/>
        </NGi>
    </NGrid>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { NGrid, NGi } from 'naive-ui'


const Modulo = defineAsyncComponent(
    () => import('./Modulo.vue')
)

const props = defineProps({
    alto: {
        type: Number,
        default: () => 12
    },
    ancho: {
        type: Number,
        default: () => 12
    },
    columnas: {
        type: Number,
        default: () => 4
    },
    datos: {
        type: Array,
        default: () => []
    }
})
</script>