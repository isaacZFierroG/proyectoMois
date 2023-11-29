<template>
    <section class="px-3">
        <header class="second-color flex justify-between items-center mb-3 p-3">
            <article class="flex items-center">
                <h1 class="uppercase text-gray-100 font-bold text-2xl mr-3">
                    modulos
                </h1>
                <i class="fa-solid fa-box-open text-gray-100 text-2xl"></i>
            </article>
            <NButton type="info" @click="mostrarModalModulo">crear</NButton>
        </header>
        <section class="second-color p-3">
            <Modulos :datos="modulos"/>
        </section>
    </section>
    <ModalCrear/>
</template>

<script setup>
import { onMounted } from 'vue'
import { NButton } from 'naive-ui'
import useModulos from '../composables/useModulos'


const {
    Modulos,
    ModalCrear,
    modulos,
    obtenerModulos,
    mostrarModalModulo
} = useModulos();


onMounted(() => {
    obtenerModulos();
});
</script>

