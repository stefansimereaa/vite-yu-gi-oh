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
            <!-- Search name Pokemons -->
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Cerca il tuo pokemon">
            </div>
            <!-- Select for type Pokemons -->
            <select class="form-select" v-model="selectedType">
                <option value="">Tutti i tipi</option>
                <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
            </select>
        </div>
    </header>
</template>

<style scoped>
.logo {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 100px;
}

.search-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.input-group {
    width: 500px;
    margin-right: 20px;
}

.form-select {
    width: 500px;
}
</style>