<script setup lang="ts">

import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useAuth } from '../../auth/hooks/useAuth';
import { useToDo } from '../hooks/useTodo';
import { ToDo } from '../../../models/toDo';
import ToDoComponent from '../components/ToDoComponent.vue';
import NewToDoModalComponent from '../components/NewToDoModalComponent.vue';
import LoadingComponent from '../../shared/components/LoadingComponent.vue';

const router = useRouter();

const {
	getPending,
	createToDo,
	completeToDo,
	updateToDo
} = useToDo();

const { logout } = useAuth();

const initialState = {
	total: 0,
	toDos: [] as ToDo[]
}

const isLoading = ref( false );

const toDos = ref( initialState );

const refreshToDos = () => {
	toDos.value = initialState;
	getToDos();
}

const getToDos = async () => {
	isLoading.value = true;
	toDos.value = await getPending();
	isLoading.value = false;
}

const onNewToDo = async( toDoToCreate: ToDo ) => {
	const { ok, msg } = await createToDo( toDoToCreate );
	if ( !ok ) return Swal.fire('Error', msg, 'error');
	refreshToDos();
}

const onCheckToDo = ( checkedToDos: string[] ) => {
	checkedToDos.forEach( async toDo => {
		const { ok, msg } = await completeToDo( toDo );
		if ( !ok ) return Swal.fire('Error', msg, 'error');
	});
	refreshToDos();
}

const onUpdateToDo = async( toDoUpdated: ToDo ) => {
	const { ok, msg } = await updateToDo( toDoUpdated );
	if ( !ok ) return Swal.fire('Error', msg, 'error');
	refreshToDos();
}

const onLogout = () => {
	router.push({ name: 'log-in' });
	logout();
}

getToDos();

</script>

<template>
<div class="scrollable">
	<div class="row vh-100 ms-5">
		<div class="col-10">
			<div class="text-start py-5 bg sticky-top">
				<h1 class="">to-do: _</h1>
			</div>
			<div class="d-flex justify-content-center align-items-center">
				<LoadingComponent v-if="isLoading" />
			</div>
			<div
				class="mb-3 "
				v-if="toDos.total > 0"
				v-for="(toDo, index) in toDos.toDos"
				:key="index"
			>
				<ToDoComponent
					:id="toDo._id"
					:title="toDo.title"
					:description="toDo.description"
					:date="toDo.date"
					@onCheckToDo="onCheckToDo"
					@onUpdateToDo="onUpdateToDo"
				/>
			</div>
			<div v-if="!isLoading&&toDos.total === 0" class="text-start">
				<h4 class="text-muted">
					no entries
				</h4>
			</div>
		</div>
		<div class="col-2 vh-100 position-relative">
			<div class="position-absolute top-0 end-0 text-danger" style="font-size: 2rem; margin-top: 4rem; margin-right: 6rem;">
				<i
					@click="onLogout"
					class="fas fa-sign-out-alt fa-xl position-fixed"
					style="cursor: pointer;">
				</i>
			</div>
			<div class="position-absolute bottom-0 end-0" style="margin: 6rem;">
				<button
					class="btn btn-circle btn-primary position-fixed"
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
.scrollable {
	overflow-y: scroll;
}
</style>
