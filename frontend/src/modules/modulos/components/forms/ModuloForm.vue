<template>
    <NModal v-model:show="moduloForm" :style="estilosModuloModal">
        <NCard>
            <header class="flex items-center">
                <h2 class="uppercase font-bold mr-3">crear modulo</h2>
                <i class="fa-solid fa-box-open text-gray-100 text-2xl"></i>
            </header>
            <hr class="my-3">
            <section class="mb-3">
                <article class="mb-2">
                    <p>mac</p>
                    <NInput v-model:value="modulo.mac"/>
                </article>
                <article class="mb-2">
                    <p>mina</p>
                    <NInput v-model:value="modulo.mina"/>
                </article>
                <article class="mb-2">
                    <p>area</p>
                    <NInput v-model:value="modulo.area"/>
                </article>
                <section v-if="macIngresada">
                    <p class="mb-2">sensores</p>
                    <article class="flex justify-between items-center">
                        <NButton @click="disminuirSensores">-</NButton>
                        <p>{{ contadorSensores }}</p>
                        <NButton @click="aumentarSensores">+</NButton>
                    </article>
                </section>
            </section>
            <NButton 
                v-if="datosLlenos && editaModulo"
                class="w-full" 
                @click="crearModuloC">
                crear
            </NButton>
            <NButton v-else class="w-full">

            </NButton>
        </NCard>
    </NModal>
</template>

<script setup>
import { ref, computed, watch, toRefs } from 'vue'
import { NModal, NCard, NInput, NButton } from 'naive-ui'
import { useNotification } from "naive-ui";
import useModulos from '../../composables/useModulos';


const { 
    moduloForm,
    datosModulo,
    estilosModuloModal,
    crearModulo,
    obtenerModulos,
} = useModulos();
const notification = useNotification();

//editar sensor
const { mac:macSensor } = toRefs(datosModulo.value);
const editaModulo = ref(false);

const agregarDatosModulo = ({ mac, mina, area, sensores }) => {
    editaModulo.value = true;
    modulo.value.mac = mac;
    modulo.value.mina = mina;
    modulo.value.area = area;
    modulo.value.sensores = sensores;
    contadorSensores.value = sensores.length;
}
watch(macSensor, newValue => {
    if(!newValue) return;
    console.log('asignando los datos correspondientes del modulo')
    console.log(datosModulo.value);
    agregarDatosModulo(datosModulo.value);
})

// crear sensor
const modulo = ref({
    mac: '',
    mina: '',
    area: '',
    sensores: []
})
const datosLlenos = computed(() => {
    if(modulo.value.mac && modulo.value.mina && modulo.value.area){
        return true;
    }

    return false;
})
const refTimeOut = ref(null);
const { mac } = toRefs(modulo.value);

const reiniciarValores = () => {
    modulo.value.sensores = [];

    for(let clave in modulo.value){
        if(clave !== 'sensores'){
            modulo.value[clave] = null;
        }
    }
}
const crearModuloC = async() => {
    try{
        const res = await crearModulo(modulo.value);
        reiniciarValores();
        obtenerModulos();
        notification.success({
            keepAliveOnHover: true,
            duration: 5000,
            content: "Modulo creado con exito",
            meta: "El modulo se ha creado de forma exitosa",
        });
    }catch(error){
        notification.error({
            keepAliveOnHover: true,
            duration: 5000,
            content: "Ocurrio un error",
            meta: "El modulo no pudo crearse debido a un error",
        });
    }
}

watch(mac, newValue => {
    if(newValue === ''){
        console.log('la mac esta vacia')
        refTimeOut.value = setTimeout(() => {
            console.log('se van a eliminar sensores')
            eliminarSensores();
        }, 3000)
    }

    if(newValue !== ''){
        clearTimeout(refTimeOut.value);
        editarClaveSensores(newValue);
    }
})

// agregar sensores
const macIngresada = computed(() => modulo.value.mac.length > 0);
const contadorSensores = ref(0);
const aumentarSensores = () => {
    contadorSensores.value++;
    modulo.value.sensores.push({
        clave: `${modulo.value.mac}-${contadorSensores.value}`
    })
}
const disminuirSensores = () => {
    if(contadorSensores.value === 0) return;
    
    contadorSensores.value--;
    modulo.value.sensores.splice(contadorSensores.value, 1);
}
const eliminarSensores = () => {
    contadorSensores.value = 0;
    modulo.value.sensores = []
}
const editarClaveSensores = (claveMac) => {
    modulo.value.sensores = modulo.value.sensores.map((sensor, index) => ({
        clave: `${claveMac}-${index + 1}`
    }))
}
</script>