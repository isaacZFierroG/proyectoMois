<template>
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
import { NModal } from 'naive-ui'
</script>