<template>
    <LoginForm/>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'


const LoginForm = defineAsyncComponent(() => import('../components/forms/LoginForm.vue'))
</script>