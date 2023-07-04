<script>
import { store } from '../data/store';
import { fetchPokemons } from '../App.vue';

export default {
    data() {
        return {
            store,
        };
    },

    props: {
        direction: String,
    },

    computed: {
        page() {
            return store.pokemons.pages[this.direction];
        },
    },

    methods: {
        fetchPage() {
            fetchPokemons(this.page);
        },
    },
};
</script>

<template>
    <div v-if="page" @click="fetchPage" :class="`arrows-pokedex ${direction}`">
        <div class="button-pikachu">
            <span class="text-btn">next</span>
            <img class="pikachu" src="../assets/Pikachu.png" alt="Pikachu" />
            <span>prev</span>
        </div>
        <span v-if="direction === 'next'" class="">Next</span>
        <span v-if="direction === 'prev'" class="">Prev</span>
    </div>
</template>


<style lang="scss" scoped>
.arrows-pokedex {
    position: fixed;
    top: 50%;
    width: 0;
    height: 0;
    translate: 0 -50%;
    cursor: pointer;
    transition: scale 150ms;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;

    &:hover {
        scale: 1.5;
    }
}

.button-pikachu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.next {
    border-left: 90px solid transparent;
    right: 15rem;
}

.prev {
    border-right: 90px solid transparent;
    left: 15rem;
}

.pikachu {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>