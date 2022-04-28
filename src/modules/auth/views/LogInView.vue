<script setup lang="ts">


</script>

<template>
	<form style="width:65%;">
		<div>
			<h2>Inicia Sesión _</h2>
		</div>
		<div class="form-group my-3">
			<label class="form-label">Usuario</label>
			<input type="text" class="form-control" placeholder="Escribe tu nombre de usuario">
		</div>
		<div class="form-group my-3">
			<label class="form-label">Contraseña</label>
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
</template>

<style lang="scss">

</style>
