<template>
    <!-- <section class="px-3">
        <header class="second-color flex justify-between items-center mb-3 p-3">
            <article class="flex items-center">
                <h1 class="uppercase text-gray-100 font-bold text-2xl mr-3">
                    modulos
                </h1>
                <i class="fa-solid fa-box-open text-gray-100 text-2xl"></i>
            </article>
            <NButton type="info" @click="mostrarModuloForm">crear</NButton>
        </header>
        <section class="second-color p-3">
            <Modulos :datos="modulos"/>
        </section>
    </section> -->

    <VistaBase :boton="boton">
        <template #titulo>
            <span class="mr-3">modulos</span>
            <i class="fa-solid fa-box-open"></i>
        </template>
        <template #contenido>
            <Modulos :datos="modulos"/>
        </template>
    </VistaBase>

    <ModuloForm/>
</template>

<script setup>
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'
import { onMounted } from 'vue'
import { NButton } from 'naive-ui'
import useModulos from '../composables/useModulos'


const {
    Modulos,
    ModuloForm,
    modulos,
    obtenerModulos,
    mostrarModuloForm,
} = useModulos();


// configuracion vista
const VistaBase = defineAsyncComponent(
    () => import('../../global/views/VistaBase.vue')
)

const boton = ref({
    tipo: 'success',
    titulo: 'crear',
    callback: mostrarModuloForm
});

onMounted(() => {
    obtenerModulos();
});
</script>

