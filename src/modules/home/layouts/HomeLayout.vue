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
<div>
    <NavbarComponent />
</div>
</template>
