<script>
import AppSelectedType from './AppSelectedType.vue';
import AppSearchBar from './AppSearchBar.vue';
import { store } from '../data/store';

export default {
    data() {
        return store;
    },
    components: { AppSelectedType, AppSearchBar },
    emits: ['selected-type-filter', 'search'],
};
</script>

<template>
    <header class="container text-center my-4">
        <img class="logo" src="../assets/logo.png" alt="logo" />
        <div class="search-buttons">
            <!-- Search name Pokemons -->
            <AppSearchBar classes="flex-grow-1 mx-5" placeholder="Cerca un pokemon..." @search="$emit('search', $event)" />
            <!-- Search Type Pokemons -->
            <AppSelectedType :options="pokemons.types" default-option="Tutti i tipi"
                @selected-new-option="$emit('selected-type-filter', $event)" />
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
