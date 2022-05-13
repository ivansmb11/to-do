<script setup lang="ts">

import { ref } from 'vue';
import 'animate.css';
import { formatDate } from '../../../helpers/formatDate';

defineProps({
	id:					 		String,
	title:       		String,
	description: 		String,
	date:        		String
});

const emit = defineEmits([ 'onCheckToDo' ]);

const checkedToDos = ref([] as string[]);

const onCheckToDo = () => {
	emit( 'onCheckToDo', checkedToDos.value );
}

</script>

<template>
<div class="card bg rounded-3 animate__animated animate__fadeIn">
	<div class="card-body">
		<div class="row">
			<div class="col-md-10">
				<h5 class="card-title text-start mb-3 text-light">{{ title }}</h5>
				<h6 class="card-subtitle mb-2 text-muted text-start">{{ formatDate(date || '') }}</h6>
				<p class="card-text text-muted text-start">{{ description }}</p>
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
</style>
