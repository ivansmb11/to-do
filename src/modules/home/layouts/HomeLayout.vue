<script setup lang="ts">

import { Ref, ref } from 'vue';
import { useToDo } from '../hooks/useTodo';
import { ToDo } from '../../../models/toDo';
import NavbarComponent from '../../shared/components/NavbarComponent.vue';

const { getPending } = useToDo();

const toDos = ref({});

const getToDos = async () => {
    toDos.value = await getPending();
    console.log(toDos.value);
}

getToDos();

</script>

<template>
    <NavbarComponent />
    <div class="container bg justify-content-center vh-100">
        <div class="d-flex text-start">
            <h1 class="py-5">to-do: _</h1>
        </div>
    </div>
</template>

<style scoped>

.bg {
    background: #2c2c2c;
    width: 60%;
}

h1 {
    font-size: 30px;
    font-weight: 900;
    color: #fff;
}

</style>
