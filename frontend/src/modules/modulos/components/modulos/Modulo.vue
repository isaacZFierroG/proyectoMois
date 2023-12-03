<template>
    <article class="modulo text-gray-100 rounded-lg shadow-md">
        <header @click="mostrarDetallesModulo(modulo.id)" class="px-3 py-1 hover:bg-white/5 hover:cursor-pointer hover:border-r-4 border-x-teal-600">
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
                <article @click="mostrarModalEliminar" class="px-3 py-2 text-center hover:bg-white/50 hover:cursor-pointer">
                    <i class="fa-solid fa-trash"></i>
                    <p>eliminar</p>
                </article>
            </section>
        </footer>
    </article>
    <NModal 
        v-model:show="modalEliminar"
        :mask-closable="false"
        preset="dialog"
        :title="`Eliminar modulo ${modulo.mac}`"
        content="¿Realmente desea eliminar el modulo?"
        positive-text="eliminar"
        negative-text="cancelar"
        @negative-click="ocultarModalEliminar"/>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { NModal } from 'naive-ui'
import useModulos from '../../composables/useModulos';


const { editarModulo } = useModulos();
const router = useRouter();

const props = defineProps({
    modulo: {
        type: Object,
        default: () => ({
            id: null,
            mac: '',
            mina: '',
            area: '',
            sensores: []
        })
    }
})
const { modulo } = toRefs(props);

const numeroSensores = computed(() => modulo.value.sensores.length);

// elimiar modulo
const modalEliminar = ref(false);

const mostrarModalEliminar = () => modalEliminar.value = true;
const ocultarModalEliminar = () => modalEliminar.value = false;

//logica editar modulo
const mostrarDetallesModulo = (idModulo) => {
    router.push({ name: 'modulos-info', params: { idModulo } })
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