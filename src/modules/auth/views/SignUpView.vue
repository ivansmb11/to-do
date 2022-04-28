<script setup lang="ts">
	
</script>

<template>
<div class="center">
	<form style="width: 60%;">
		<h2>Registro _</h2>
		<div class="form-group my-2">
			<label class="form-label">Nombre</label>
			<input type="text" class="form-control" placeholder="Escribe tu nombre">
		</div>
		<div class="form-group my-2">
			<label class="form-label">Usuario</label>
			<input type="text" class="form-control" placeholder="Escribe tu nombre de usuario">
		</div>
		<div class="form-group my-2">
			<label class="form-label">Contraseña</label>
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		</div>
		<div class="form-group my-2">
			<label class="form-label">Confirma tu contraseña</label>
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		</div>
		<div class="form-group my-2">
			<button type="submit" class="btn btn-dark btn-large btn-block">Registrar</button>
		</div>
		<p class="small fw-bold mt-4 pt-1 mb-0 py-2">Ya tienes una cuenta?
			<router-link :to="{ name: 'log-in' }">
				<a href="#!" class="link-danger">Inicia Sesión</a>
			</router-link>
		</p>
	</form>
</div>
</template>


<style lang="scss">

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  margin-top: 20%;
}

</style>
