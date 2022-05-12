<script setup lang="ts">

import { ref } from 'vue';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'vue-router';

const { loginUser } = useAuth();

const userForm = ref({
	username: '',
	password: ''
});

const router = useRouter();

const onSubmit = async() => {
	if ( userForm.value.password.length < 6 ) {
		Swal.fire('Error', 'incorrect username or password', 'error');
	} else {
		const { ok, msg } = await loginUser( userForm.value );
		if ( !ok ) Swal.fire('Error', msg, 'error');
		else router.push({ name: 'home' });
	}
}

</script>

<template>
<div class="center">
	<form @submit.prevent="onSubmit" style="width:60%;">
		<h2>log in _</h2>
		<div class="form-group my-3">
			<label class="form-label">username</label>
			<input
				v-model="userForm.username"
				type="text"
				class="form-control"
				placeholder="type your username"
				required>
		</div>
		<div class="form-group my-3">
			<label class="form-label">password</label>
			<input
				v-model="userForm.password"
				type="password"
				class="form-control"
				id="password"
				placeholder="type your password"
				required>
		</div>
		<div class="form-group my-3">
			<button type="submit" class="btn btn-dark btn-large btn-block">log in</button>
		</div>
		<p class="small fw-bold mt-4 pt-1 mb-0 my-3">not registered?
			<router-link :to="{ name: 'sign-up' }">
				<a href="#!" class="link-danger">sign up</a>
			</router-link>
		</p>
	</form>
</div>
</template>
