<template>
    <article class="modulo text-gray-100 rounded-lg shadow-md">
        <header @click="mostrarDetallesModulo" class="px-3 py-1 hover:bg-white/5 hover:cursor-pointer hover:border-r-4 border-x-teal-600">
            <h3 class="uppercase font-bold text-5xl">{{ modulo.mac }}</h3>
            <article class="flex uppercase">
                <p>area: {{ modulo.area }}</p>
                <p class="mx-2">-</p>
                <p>{{ modulo.mina }}</p>
            </article>
        </header>
        <footer class="footer modulo__footer flex">
            <article class="basis-2/4 flex items-center px-3 py-2">
                <i class="fa-solid fa-tower-cell text-sm mr-1"></i>
                <p class="text-lg">sensores: {{ numeroSensores }}</p>
            </article>
            <section class="basis-2/4 flex justify-around items-center">
                <article @click="editarModulo(modulo)" class="px-3 py-2 text-center hover:bg-white/50 hover:cursor-pointer">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <p>editar</p>
                </article>
                <article class="px-3 py-2 text-center hover:bg-white/50 hover:cursor-pointer">
                    <i class="fa-solid fa-trash"></i>
                    <p>eliminar</p>
                </article>
            </section>
        </footer>
    </article>
</template>

<script setup>
import { toRefs } from 'vue'
import { computed } from 'vue'
import useModulos from '../../composables/useModulos';


const { editarModulo } = useModulos();

const props = defineProps({
    modulo: {
        type: Object,
        default: () => ({
            mac: 'mac-123',
            mina: 'hermosillo',
            area: 'a',
            sensores: []
        })
    }
})
const { modulo } = toRefs(props);

const numeroSensores = computed(() => modulo.value.sensores.length);

//logica editar modulo
const mostrarDetallesModulo = () => {
    console.log('mostrando los detalles del modulo');
}
</script>

<style scoped>
.modulo{
    background-color: #363540;
}
.modulo__footer{
    background-color: #2142A6;
}
.modulo__footer__boton{
    background-color: #1b3277;
}
.footer{

}
</style>