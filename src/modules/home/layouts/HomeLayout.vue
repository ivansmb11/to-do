<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../../auth/hooks/useAuth';
import { useToDo } from '../hooks/useTodo';
import { ToDo } from '../../../models/toDo';
import ToDoComponent from '../components/ToDoComponent.vue';
import NewToDoModalComponent from '../components/NewToDoModalComponent.vue';

const router = useRouter();

const { getPending } 	= useToDo();
const { logout } 			= useAuth();

const toDos = ref({
	total: 0,
	toDos: [] as ToDo[]
});

const getToDos = async () => {
	toDos.value = await getPending();
}

const onLogout = () => {
	router.push({ name: 'log-in' });
	logout();
}

const onNewToDo = ( toDo: ToDo ) => {
	console.log( toDo );
}

getToDos();

</script>

<template>
<div class="container bg vh-100">
	<div class="row vh-100 ms-5">
		<div class="col-10">
			<div class="text-start my-5">
				<h1 class="">to-do: _</h1>
			</div>
			<div
				class="mb-3 "
				v-if="toDos.total > 0"
				v-for="(toDo, index) in toDos.toDos"
				:key="index"
			>
				<ToDoComponent
					:title="toDo.title"
					:description="toDo.description"
					:date="toDo.date"
				/>
			</div>
			<div v-else class="text-start">
				<h4 class="text-muted">
					no entries
				</h4>
			</div>
		</div>
		<div class="col-2 position-relative">
			<div class="position-absolute top-0 end-0 m-5 text-danger" style="font-size: 2rem;">
				<i
					@click="onLogout"
					class="fas fa-sign-out-alt fa-xl"
					style="cursor: pointer;">
				</i>
			</div>
			<div class="position-absolute bottom-0 end-0 m-4">
				<button
					class="btn btn-circle btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#newToDo">
					<i class="fas fa-plus"></i>
				</button>
			</div>
		</div>
	</div>
	<NewToDoModalComponent @onNewToDo="onNewToDo" />
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
.btn-circle {
  display: block;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
}
</style>
