<script setup lang="ts">
import NavbarComponent from "../../shared/components/NavbarComponent.vue";
import { useToDo } from "../hooks/useTodo";
import { ref } from 'vue';

const { getPending } = useToDo();
const todo = ref([]);
const getToDos = async () => {
    todo.value = await getPending();
}
console.log(todo.value);


</script>

<template>
<div>
    <NavbarComponent />

</div>
</template>
