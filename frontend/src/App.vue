<template>
  <NNotificationProvider>
    <main class="main h-screen">
      <header class="header flex justify-between items-start p-3 mb-5 shadow-md">
        <img :src="imagenLogo" alt="">
        <Header :links="links"/>
      </header>
      <section class="w-11/12 mx-auto">
        <router-view></router-view>
      </section>
      <footer></footer>
    </main>
  </NNotificationProvider>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { defineAsyncComponent } from 'vue'
import { NNotificationProvider } from 'naive-ui'
import useAuth from './modules/auth/composables/useAuth'


const Header = defineAsyncComponent(
  () => import('./modules/global/components/basicos/HeaderComponent.vue')
)

const { 
  verificarAutenticacion 
} = useAuth();

const imgenLogo = ref('./assets/img/Promev.png');
const links = ref([
  {
    titulo: 'modulos',
    ruta: 'modulos-listado'
  }
])

onMounted(() => {
  verificarAutenticacion();
})
</script>

<style scoped>
.main{
  background-color: #2142A6;
}
.header{
  background-color: #325CD9;
}

</style>