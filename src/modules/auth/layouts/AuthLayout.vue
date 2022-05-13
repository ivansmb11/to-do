<script setup lang="ts">
const APP_NAME = import.meta.env.VITE_APP_NAME;
</script>

<template>
	<div class="container-fluid row p-0 m-0 vh-100">
		<div class="col-xl-7 col-lg-7 col-md-6 col-sm-12 auth-bg d-flex align-items-center justify-content-center">
			<h1 class="line anim-typewriter">{{ APP_NAME }}</h1>
		</div>
		<div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 d-flex align-items-center justify-content-center bg-white text-start border">
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
	font-size: 6rem;
}

.line {
	margin: 0 auto;
	border-right: 2px solid rgba(255, 255, 255, 0.75);
	font-size: 75px;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
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
</style>
