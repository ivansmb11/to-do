<script setup lang="ts">

import { Ref, ref } from 'vue';
import { useToDo } from '../hooks/useTodo';
import { ToDo } from '../../../models/toDo';
import NavbarComponent from '../../shared/components/NavbarComponent.vue';
import ToDoComponent from '../components/ToDoComponent.vue';

const { getPending } = useToDo();

const toDos = ref({
    total: 0,
    toDos: [] as ToDo[]
});

const getToDos = async () => {
    toDos.value = await getPending();
}

getToDos();

</script>

<template>
    <NavbarComponent />
    <div class="container bg justify-content-center vh-100">
        <div class="d-flex text-start">
            <h1 class="py-5">to-do: _</h1>
        </div>
        <div class="py-1" v-for="(toDo, index) in toDos.toDos" :key="index">
            <ToDoComponent :title="toDo.title" :description="toDo.description" :date="toDo.date"/>
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
