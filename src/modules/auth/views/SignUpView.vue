<script setup lang="ts">
	
</script>

<template>
	<div class="row d-flex justify-content-center vh-100 p-3">
		<div class="col-md-7 mt-5">
			<form>
				<div>
					<h2>Registro _</h2>
				</div>
				<div class="form-group py-2">
					<label class="form-label">Nombre Completo</label>
					<input type="text" class="form-control" placeholder="Escribe tu nombre completo">
				</div>
				<div class="form-group py-2">
					<label class="form-label">Usuario</label>
					<input type="text" class="form-control" placeholder="Escribe tu nombre de usuario">
				</div>
				<div class="form-group py-2">
					<label class="form-label">Correo Electrónico</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
					<small id="emailHelp" class="form-text text-muted">No compartiremos tu correo con nadie. 😉</small>
				</div>
				<div class="form-group py-2">
					<label class="form-label">Contraseña</label>
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
				</div>
				<div class="form-group py-2">
					<button type="submit" class="btn btn-dark btn-large btn-block">Registrar</button>
				</div>
				<p class="small fw-bold mt-4 pt-1 mb-0 py-2">Ya tienes una cuenta?
					<router-link :to="{ name: 'log-in' }">
						<a href="#!" class="link-danger">Inicia Sesión</a>
					</router-link>
				</p>
			</form>
		</div>
	</div>
</template>
