<template>
    <section class="px-3">
        <header class="second-color p-3 mb-3 shadow-md">
            <header class="flex justify-between items-center">
                <article class="flex items-center">
                    <h1 class="uppercase text-gray-100 font-bold text-2xl">
                        <slot name="titulo"></slot>
                    </h1>
                </article>
                <NButton v-if="boton" :type="boton?.tipo" @click="boton?.callback">
                    {{ boton?.titulo ?? '' }}
                </NButton>
            </header>
        </header>
        <section class="second-color p-3 shadow-md">
            <slot name="contenido"></slot>
        </section>
    </section>    
</template>

<script setup>
import { NButton, NCollapse, NCollapseItem } from 'naive-ui'

const props = defineProps({
    boton: {
        type: Object,
        default: () => null
    }
})
</script>