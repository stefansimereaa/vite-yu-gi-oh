<script>
export default {
	data() {
		return {
			searchWord: '',
		};
	},
	props: {
		classes: String,
		placeholder: {
			type: String,
			default: 'Search..',
		},
	},
	emits: ['search'],
};
</script>

<template>
	<!-- Search bar Pokemons Names -->
	<form @submit.prevent="$emit('search', searchWord)" :class="classes">
		<input class="w-100" type="search" v-model="searchWord" :placeholder="placeholder" />
	</form>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

input {
	padding: 13px;
	cursor: pointer;
}
</style>
