<script setup lang="ts">
	
import { ref, watch } from 'vue';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useAuth } from '../hooks/useAuth';

const { createUser } = useAuth();

const userForm = ref({
	name: 		'',
	lastName: '',
	username: '',
	password: ''
});

const password 	= ref('');
const password2 = ref('');

let errorPassword 	= ref(false);
let successPassword = ref(false);

watch([password, password2], ([password, password2]) => {
	if (password === '' && password2 === '') {
		errorPassword.value = false;
	}
	if (password2 !== '') {
		errorPassword.value 	= !(password === password2);
		successPassword.value = !errorPassword.value;
	}
});

const onSubmit = async() => {
	if ( successPassword.value ) {

		userForm.value['password'] = password.value;

		if( userForm.value.password.length < 6 ) {
			Swal.fire( 'Error', 'La contraseña contener 6 caracteres mínimo', 'error' );
			return;
		}

		const { ok, msg } = await createUser( userForm.value );

		ok
			? Swal.fire( 'Registro correcto', msg, 'success' )
			: Swal.fire( 'Error', msg, 'error' );

	}
}

</script>

<template>
<div class="center">
	<form @submit.prevent="onSubmit" style="width: 60%;">
		<h2>Registro _</h2>
		<div class="form-group my-3">
			<label class="form-label">Nombre</label>
			<input v-model="userForm.name" type="text" class="form-control" placeholder="Escribe tu nombre" required>
		</div>
		<div class="form-group my-3">
			<label class="form-label">Apellido</label>
			<input v-model="userForm.lastName" type="text" class="form-control" placeholder="Escribe tu apellido" required>
		</div>
		<div class="form-group my-3">
			<label class="form-label">Usuario</label>
			<input v-model="userForm.username" type="text" class="form-control" placeholder="Escribe tu nombre de usuario" required>
		</div>
		<div class="form-group my-3">
			<label class="form-label">Contraseña</label>
			<input
				v-model="password"
				type="password"
				class="form-control"
				id="password"
				placeholder="Escribe una contraseña"
				:class="{ error: errorPassword, success: successPassword }"
				required>
		</div>
		<div class="form-group my-3">
			<label class="form-label">Confirmar contraseña</label>
			<input
				v-model="password2"
				type="password"
				class="form-control"
				id="password2"
				placeholder="Confirma tu contraseña"
				:class="{ error: errorPassword, success: successPassword }"
				required>
		</div>
		<div class="form-group mt-4">
			<button :disabled="errorPassword" type="submit" class="btn btn-dark btn-large btn-block">Registrar</button>
		</div>
		<p class="small fw-bold mt-4 pt-1 mb-0 py-2">Ya tienes una cuenta?
			<router-link :to="{ name: 'log-in' }">
				<a href="#!" class="link-danger">Inicia Sesión</a>
			</router-link>
		</p>
	</form>
</div>
</template>

<style scoped>
.error {
  border: solid red;
}
.success {
  border: solid green;
}
</style>
