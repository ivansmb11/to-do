<script setup lang="ts">

import { Ref, ref } from 'vue';
import { useToDo } from '../hooks/useTodo';
import { ToDo } from '../../../models/toDo';
import NavbarComponent from '../../shared/components/NavbarComponent.vue';

const { getPending } = useToDo();

const toDos: Ref<ToDo[]> = ref([]);

const getToDos = async () => {
    toDos.value.push( await getPending() );
}

getToDos();

</script>

<template>
<div>
    <NavbarComponent />
</div>
</template>
