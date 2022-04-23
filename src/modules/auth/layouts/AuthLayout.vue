<script setup lang="ts">
	import NavbarComponent from '../../../modules/shared/components/NavbarComponent.vue';
	
	const bgImg = { backgroundImage: '../../../assets/img/authBG.png' };

</script>

<template>
	<NavbarComponent />
	<div class="container-fluid row row-cols-2 p-0 m-0">
		<div class="col-7 auth-bg" :style="bgImg">
			<p>TO-DO:</p>
		</div>
		<div class="col-5 bg-white text-start">
			<router-view/>
		</div>
	</div>
</template>

<style scoped>
.auth-bg {
	background-image: url('../../../assets/img/authBG.png') no-repeat center center fixed;
}
</style>
