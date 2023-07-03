<script>
import axios from 'axios';
import Loader from './AppLoader.vue';
import { store } from '../data/store';
export default {
    props: ['axios'],
    data() {
        return {
            store,
            totalDocs: store.totalDocs,
            isLoading: true
        }
    },
    components: {
        Loader
    },
    methods: {
        nextPage() {
            if (this.store.nextPage) {
                this.isLoading = true;
                axios.get(this.store.next).then(res => {
                    const { prevPage, nextPage, totalDocs } = res.data;
                    this.store.pokemons = res.data.docs;
                    this.store.totalDocs = totalDocs;
                    this.store.pages.prev = prevPage;
                    this.store.pages.next = nextPage;
                    this.isLoading = false;
                });

            }
        },
        prevPage() {
            if (this.store.prevPage) {
                this.isLoading = true;
                axios.get(this.store.pages.prev).then(res => {
                    const { prevPage, nextPage, totalDocs } = res.data;
                    this.store.pokemons = res.data.docs;
                    this.store.totalDocs = totalDocs;
                    this.store.pages.prev = prevPage;
                    this.store.pages.next = nextPage;
                    this.isLoading = false;
                });

            }
        }
    }
}
</script>

<template>
    <!-- Container header mass buttons -->
    <div class="container-header">
        <button class="btn btn-primary me-3" @click="prevPage()" :disabled="!store.pages.prev">Prev Page</button>
        <h4>Pokemon scoperti {{ store.pokemons.length }} di {{ totalDocs }}</h4>
        <button class="btn btn-primary ms-3" @click="nextPage()" :disabled="!store.pages.next">Next Page</button>

    </div>
    <Loader v-if="isLoading" />
    <!-- Pokedex -->
    <div class="container-pokedex">
        <div class="pokemon-list">
            <div v-for="pokemon in store.pokemons" :key="pokemon._id" class="card" :class="pokemon.type1.toLowerCase()">
                <img :src="pokemon.imageUrl" :alt="pokemon.name" />
                <span>{{ pokemon.number }}</span>
                <h4>{{ pokemon.name }}</h4>
                <h5>{{ pokemon.type1 }}</h5>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import 'bootstrap/dist/css/bootstrap.css';

.container-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.container-pokedex {
    background-color: #dedede;
    padding: 20px;
    border-radius: 10px;
}

.pokemon-list {
    background-color: #40464b;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: auto;
}

.card {
    margin: 10px 0;
    flex-basis: calc(20% - 20px);
    height: 250px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card img {
    border-radius: 50px;
    max-width: 100px;
    margin-top: 20px;
}


.grass {
    background-color: #defde0;
}

.fire {
    background-color: #fddfdf;
}

.water {
    background-color: #def3fd;
}
</style>