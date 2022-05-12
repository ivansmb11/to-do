<script setup lang="ts">

defineProps({
	title:       String,
	description: String,
	date:        String,
});

</script>

<template>
<div class="card bg rounded-3">
	<div class="card-body">
		<div class="row">
			<div class="col-md-10">
				<h5 class="card-title text-start text-light">{{ title }}</h5>
				<h6 class="card-subtitle mb-2 text-muted text-start">{{ date }}</h6>
				<p class="card-text text-muted text-start">{{ description }}</p>
			</div>
			<div class="col-md-2 d-flex align-items-center justify-content-center">
				<input class="form-check-input" type="checkbox" value="">
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
