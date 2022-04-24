<script setup lang="ts">

import Swal from 'sweetalert2';

</script>

<template>
	<div class="row d-flex justify-content-center vh-100">
		<div class="col-md-7">
			<form>
				<div>
					<h2>Inicia Sesión _</h2>
				</div>
				<div class="form-group py-2">
					<label class="form-label">Usuario</label>
					<input type="text" class="form-control" placeholder="Escribe tu nombre de usuario">
				</div>
				<div class="form-group py-2">
					<label class="form-label">Contraseña</label>
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
				</div>
				<div class="form-group py-2">
					<button type="submit" class="btn btn-dark btn-large btn-block">Iniciar Sesión</button>
				</div>
				<p class="small fw-bold mt-4 pt-1 mb-0 py-2">Aún no tienes cuenta?
					<router-link :to="{ name: 'sign-up' }">
						<a href="#!" class="link-danger">Registrate</a>
					</router-link>
				</p>
			</form>
		</div>
	</div>
</template>

<style lang="scss">
form {
	  margin-top: 50%;
}
</style>
