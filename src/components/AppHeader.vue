<script>
export default {
    data() {
        return {
            selectedType: '',
        };
    },
    props: {
        types: [],
    },
    watch: {
        selectedType: {
            immediate: true,
            handler(newType) {
                this.fetchPokemonsByType(newType);
            },
        },
    },
    methods: {
        fetchPokemonsByType(type) {
        },
    },
}
</script>

<template>
    <header class="container text-center my-4">
        <img class="logo" src="../assets/logo.png" alt="logo" />
        <div class="search-buttons">
            <select class="form-select form-select-sm" v-model="selectedType">
                <option value="">Tutti i tipi</option>
                <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
            </select>
        </div>
    </header>
</template>

<style scoped>
.logo {
    margin-top: 30px;
    margin-bottom: 20px;
    height: 130px;
}
</style>