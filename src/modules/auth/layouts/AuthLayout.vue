<script setup lang="ts">
	import NavbarComponent from '../../../modules/shared/components/NavbarComponent.vue';
	const bgImg = { backgroundImage: '../../../assets/img/authBG.png' };
</script>

<template>
	<NavbarComponent />
	<div class="container-fluid row p-0 m-0 vh-100">
		<div class="col-7 auth-bg">
			<div class="my-auto">
				<h1 class="line anim-typewriter">TO-DO: _</h1>
			</div>
		</div>
		<div class="col-5 d-flex justify-content-center bg-white text-start border">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
.auth-bg {
	background-image: url('../../../assets/img/authBG.png');
	background-size: cover;
}

h1 {
	color: #fff;
	font-weight: 900;
	margin-top: 35%;
	font-size: 6rem;
}

.line {
	position: relative;
	top: 50%;
	margin: 0 auto;
	border-right: 2px solid rgba(255, 255, 255, 0.75);
	font-size:75px;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	transform: translateY(400%);
}

.anim-typewriter {
	animation: typewriter 4s steps(40) 1s 1 normal both,
	blinkTextCursor 800ms steps(40) infinite normal;
}

@keyframes typewriter {
	from { width: 0; }
	to { width: 4.8em; }
}

@keyframes blinkTextCursor {
	from { border-right-color: rgba(255, 255, 255, 0.75);}
	to { border-right-color: transparent;}
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  margin-top: 20%;
}

</style>
