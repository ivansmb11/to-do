<script setup lang="ts">

import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useAuth } from '../../auth/hooks/useAuth';
import { useToDo } from '../hooks/useTodo';
import { ToDo } from '../../../models/toDo';
import ToDoComponent from '../components/ToDoComponent.vue';
import NewToDoModalComponent from '../components/NewToDoModalComponent.vue';

const router = useRouter();

const { getPending, createToDo, completeToDo } = useToDo();
const { logout } = useAuth();

const toDos = ref({
	total: 0,
	toDos: [] as ToDo[]
});

const getToDos = async () => {
	toDos.value = await getPending();
}

const onNewToDo = async( toDo: ToDo ) => {
	const { ok, msg } = await createToDo( toDo );
	if ( !ok ) return Swal.fire('Error', msg, 'error');
	getToDos();
}

const onCheckToDo = ( checkedToDos: string[] ) => {
	checkedToDos.forEach( async toDo => {
		const { ok, msg } = await completeToDo( toDo );
		if ( !ok ) return Swal.fire('Error', msg, 'error');
		getToDos();
	});
}

const onUpdateToDo = async( toDo: ToDo ) => {
	console.log(toDo);
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
			<div v-else class="text-start">
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
