<template>
	<div class="main">
		<HeaderComponent />
		<transition
			name="slide"
			mode="out-in">

			<router-view />
		</transition>
	</div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
export default {
	components: {
		HeaderComponent
	}
}
</script>

<style>
body, * {
    font-family: Roboto, sans-serif;
    margin: 0;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0px); }
}
@keyframes slide-out {
	from { transform: translateY(0px); }
	to { transform: translateY(40px); }
}
.slide-enter-active {
	animation: slide-in 1s ease;
	transition: opacity 1s;
}
.slide-leave-active {
	width: 100%;
	animation: slide-out 1s ease;
	transition: opacity 1s;
}
.slide-enter, .slide-leave-to  {
	opacity: 0;
}
.slide-move {
	transition: transform 1s;
}
</style>

