<script setup lang="ts">

import { ref } from 'vue';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useAuth } from '../hooks/useAuth';

const { loginUser } = useAuth();

const userForm = ref({
	username: '',
	password: ''
});

const onSubmit = async() => {
	if ( userForm.value.password.length < 6 ) {
		Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
	} else {
		const { ok, msg } = await loginUser( userForm.value );
		if ( !ok ) Swal.fire('Error', msg, 'error');
		else Swal.fire('Bienvenido', msg, 'success');
	}
}

</script>

<template>
<div class="center">
	<form @submit.prevent="onSubmit" style="width:60%;">
		<h2>Inicia Sesión _</h2>
		<div class="form-group my-3">
			<label class="form-label">Usuario</label>
			<input v-model="userForm.username" type="text" class="form-control" placeholder="Escribe tu nombre de usuario">
		</div>
		<div class="form-group my-3">
			<label class="form-label">Contraseña</label>
			<input v-model="userForm.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		</div>
		<div class="form-group my-3">
			<button type="submit" class="btn btn-dark btn-large btn-block">Iniciar Sesión</button>
		</div>
		<p class="small fw-bold mt-4 pt-1 mb-0 my-3">Aún no tienes cuenta?
			<router-link :to="{ name: 'sign-up' }">
				<a href="#!" class="link-danger">Registrate</a>
			</router-link>
		</p>
	</form>
</div>
</template>
