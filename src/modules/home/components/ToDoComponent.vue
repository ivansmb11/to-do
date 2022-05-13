<script setup lang="ts">

import { ref } from 'vue';
import 'animate.css';

const props = defineProps({
	id:						String,
	title:       	String,
	description: 	String,
	date:       	String
});

const emit = defineEmits([
	'onCheckToDo',
	'onUpdateToDo'
]);

const updatedToDo = ref({
	_id: 					props.id,
	title: 				props.title,
	date: 				props.date && props.date.split('T')[0],
	description: 	props.description
});

const checkedToDos = ref([] as string[]);

const onCheckToDo = () => {
	emit( 'onCheckToDo', checkedToDos.value );
}

const onUpdateToDo = () => {
	emit( 'onUpdateToDo', updatedToDo.value );
}

</script>

<template>
<div class="card bg rounded-3 animate__animated animate__fadeIn">
	<div class="card-body">
		<div class="row">
			<div class="col-md-10">
				<h5 class="card-title text-start mb-3">
					<input
						v-model="updatedToDo.title"
						type="text"
						class="text-light no-border bg"
						@blur="onUpdateToDo"
					>
				</h5>
				<h6 class="card-subtitle mb-2 text-start">
					<input
						v-model="updatedToDo.date"
						type="date"
						class="text-muted no-border bg"
						@blur="onUpdateToDo"
					>
				</h6>
				<p class="card-text text-muted text-start">
					<input
						v-model="updatedToDo.description"
						type="text"
						class="text-muted no-border bg"
						@blur="onUpdateToDo" 
						style="width: 100%;"
					>
				</p>
			</div>
			<div class="col-md-2 d-flex align-items-center justify-content-center">
				<input
					class="form-check-input"
					type="checkbox"
					v-model="checkedToDos"
					:id="id"
					:value="id"
					@change="onCheckToDo"
				>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped>
.bg {
	background: #2c2c2c;
}
.no-border,
.no-border:focus,
.no-border:hover {
	border: 0;
	box-shadow: none; /* You may want to include this as bootstrap applies these styles too */
	outline:0px !important;
	-webkit-appearance:none;
	box-shadow: none !important;
}
</style>
