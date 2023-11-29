<template>
    <article class="modulo text-gray-100 rounded-lg shadow-md">
        <header class="px-3 py-1">
            <h3 class="uppercase font-bold text-5xl">{{ modulo.mac }}</h3>
            <article class="flex uppercase">
                <p>area: {{ modulo.area }}</p>
                <p class="mx-2">-</p>
                <p>{{ modulo.mina }}</p>
            </article>
        </header>
        <footer class="footer modulo__footer">
            <article class=" flex items-center px-3 py-2">
                <i class="fa-solid fa-tower-cell text-sm mr-1"></i>
                <p class="text-lg">sensores: {{ numeroSensores }}</p>
            </article>
            <article>

            </article>
        </footer>
    </article>
</template>

<script setup>
import { toRefs } from 'vue'
import { computed } from 'vue'

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

const numeroSensores = computed(() => modulo.value.sensores.length)
</script>

<style scoped>
.modulo{
    background-color: #363540;
}
.modulo__footer{
    background-color: #2142A6;
}
.footer{

}
</style>