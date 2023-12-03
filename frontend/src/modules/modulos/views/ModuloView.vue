<template>
    <section class="px-3">
        <header class="second-color flex justify-between items-center mb-3 p-3">
            <article>
                <article class="flex items-center text-3xl">
                    <h2 class="uppercase text-gray-100 font-bold mr-3">
                        {{ moduloMac }}
                    </h2>
                    <i class="fa-solid fa-box-open text-gray-100"></i>
                </article>
                <article class="flex items-center uppercase text-gray-100">
                    <p class="mr-1">{{ moduloMina }} -</p>
                    <p>{{ moduloArea }}</p>
                </article>
            </article>
            <article class="flex items-center">
                <NButton type="info" class="mr-3">
                    <span class="uppercase font-bold">editar</span>
                </NButton>
                <NButton type="error">
                    <span class="uppercase font-bold">eliminar</span>
                </NButton>
            </article>
        </header>
        <section class="second-color p-3">
            <header>
                <NGrid :x-gap="12" :y-gap="12" :cols="3">
                    <NGi :span="2">
                        <h3 class=" text-gray-100 uppercase font-bold">info sensores</h3>
                        <hr class="my-3">
                    </NGi>
                    <NGi>   
                        <h3 class=" text-gray-100 uppercase font-bold">sensores</h3>
                        <hr class="my-3">
                    </NGi>
                </NGrid>        
            </header>
            <NGrid :x-gap="12" :y-gap="12" :cols="3">
                <NGi :span="2">
                    <template v-if="dataset.length > 0">
                        <apexchart type="line" width="850" :options="opciones" :series="dataset"></apexchart>
                    </template>
                    <template v-else>
                        <article class="flex justify-center items-center font-bold text-gray-100 bg-slate-400 p-3 shadow-sm">
                            <p class="mr-1 uppercase">sin datos</p>
                            <i class="fa-solid fa-ban"></i>
                        </article>
                    </template>
                    <!-- <pre>{{ dataset }}</pre> -->
                </NGi>
                <NGi>
                    <NGrid :x-gap="12" :y-gap="12" :cols="2">
                        <template v-if="datosRecientes.length > 0">
                            <NGi v-for="{ clave, valor, estado } in datosRecientes" :key="clave">
                                <article class="p-3 rounded-md text-gray-100 shadow-md" :class="{
                                    'bg-green-500': estado,
                                    'bg-red-600': !estado
                                }">
                                    <header class="flex justify-between items-center text-xl">
                                        <p class="uppercase font-bold">{{ clave }}:</p>
                                        <p class="font-bold">{{ valor }} %</p>
                                    </header>
                                    <hr class="my-2">
                                    <section>
                                        <p class="uppercase">
                                            <span class="mr-1">
                                                <i class="fa-solid fa-wifi"></i>
                                            </span>
                                            {{ estado ? 'activo' : 'inactivo' }}
                                        </p>
                                    </section>
                                </article>
                            </NGi>
                        </template>
                        <template v-else>
                            <NGi span="2">
                                <article class="flex justify-center items-center font-bold text-gray-100 bg-slate-400 p-3 shadow-sm">
                                    <p class="mr-1 uppercase">sin sensores</p>
                                    <i class="fa-solid fa-ban"></i>
                                </article>
                            </NGi>
                        </template>
                    </NGrid>
                </NGi>
            </NGrid>
        </section>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { NGrid, NGi, NButton, NPagination } from 'naive-ui'
import useModulos from "../composables/useModulos";


const { params } = useRoute();
const { 
    obtenerModulo, 
    obtenerDatosModulo,
    moduloMac,
    moduloArea,
    moduloMina,
    datosRecientes,
    dataset,
} = useModulos();

//obtener datos cada tiempo
const TIEMPO_CONSULTA = 5000;
const refIntervalo = ref(null);

const opciones = computed(() => ({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        type: 'category'
    }
}))

onMounted(async() => {
    const { idModulo } = params;
    
    await obtenerModulo(idModulo);
    await obtenerDatosModulo({
        modulo: moduloMac.value
    })

    if(datosRecientes.value.length === 0) return;

    refIntervalo.value = setInterval(() => {
        obtenerDatosModulo();
    }, TIEMPO_CONSULTA);
})

onUnmounted(() => {
    console.log('saliendo de la vista');
    clearInterval(refIntervalo.value);
})
</script>