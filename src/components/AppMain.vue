<script>
import AppPokemonsCard from './AppPokemonsCard.vue';
import { store } from '../data/store';
export default {
    computed: {
        pokemons() {
            return store.pokemons.list;
        },
    },

    components: { AppPokemonsCard },
};
</script>

<template>
    <div class="container container-pokedex">
        <div class="pokemon-list">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 gy-5">
                <div class="col" v-for="pokemon in pokemons">
                    <AppPokemonsCard :key="pokemon.id" :id="pokemon.number" :img="pokemon.imageUrl" :name="pokemon.name"
                        :type="pokemon.type1.toLowerCase()" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'bootstrap/dist/css/bootstrap.css';

.container-pokedex {
    background-color: #dedede;
    padding: 20px;
    border-radius: 10px;
}

.pokemon-list {
    background-color: #40464b;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: auto;
    align-items: center;
}
</style>
