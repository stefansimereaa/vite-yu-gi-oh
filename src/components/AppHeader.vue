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
            // Effettua la chiamata API per ottenere i Pokémon filtrati per tipo
            // Utilizza il parametro 'type' nella chiamata API per filtrare i risultati per tipo
            // Aggiorna store.pokemons.list con i Pokémon filtrati
        },
    },
}
</script>

<template>
    <header class="container text-center my-4">
        <img class="logo" src="../assets/logo.png" alt="logo" />
        <select v-model="selectedType">
            <option value="">Tutti i tipi</option>
            <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
        </select>
    </header>
</template>

<style scoped>
.logo {
    margin-top: 30px;
    height: 130px;
}
</style>