<template>
    <article class="w-1/5 p-3 bg-red-700">
        <header>
            <h2 class="text-center">inicio de sesion</h2>
        </header>
        <form>
            <article class="mb-3">
                <p class="mb-2">correo</p>
                <NInput v-model:value="usuario.correo"/>
            </article>
            <article>
                <p class="mb-2">password</p>
                <NInput v-model:value="usuario.password" type="password"/>
            </article>
        </form>
        <footer class="flex justify-end pt-3">
            <NButton @click="loguearUsuario" type="info">inciar sesion</NButton>
        </footer>
    </article>
</template>

<script setup>
import { NInput, NButton } from 'naive-ui'
import useAuth from '../../composables/useAuth'

const { usuario, loguearUsuario } = useAuth();
</script>