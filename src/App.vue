<script>
import axios from 'axios';
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue';
import AppArrowsPokedex from './components/AppArrowsPokedex.vue';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'

const fetchPokemonsTypes = () => {
  const url = endpoint + '/types1';
  axios
    .get(url)
    .then(res => {
      store.pokemons.types = res.data;
    })
    .catch(e => {
      console.error(e);
    });
};

export default {
  data() {
    return {
      type: '',
      searchWord: '',
    };
  },

  methods: {
    // Change page function for click
    changePage(page) {
      this.fetchPokemons(page);
    },
    // Change type pokemons with selected
    changePokemonTypeFilter(newSelectedType) {
      this.type = newSelectedType;
      this.fetchPokemons();
    },

    // Change pokemons list with searched words
    changeSearchWord(word) {
      this.searchWord = word;
      this.fetchPokemons();
    },

    // Function for API call
    fetchPokemons(page = '') {
      store.isLoading = true;


      let url = endpoint + '?';
      if (this.type) url += `eq[type1]=${this.type}&`;
      if (this.searchWord) url += `q[name]=${this.searchWord}&`;
      if (page) url += `page=${page}`;

      axios
        .get(url)
        .then(res => {
          store.pokemons.list = res.data.docs;
          store.pokemons.pages.prev = res.data.prevPage;
          store.pokemons.pages.next = res.data.nextPage;
          store.pokemons.pages.current = res.data.page;
        })
        .catch(e => {
          console.error(e);
        })
        .then(() => {
          store.isLoading = false;
        });
    },
  },

  components: { AppArrowsPokedex, AppMain, AppHeader, AppLoader },

  mounted() {
    this.fetchPokemons();
    fetchPokemonsTypes();
  },
};
</script >

<template>
  <div class="container-background">
    <!-- Component Button Prev -->
    <AppArrowsPokedex direction="prev" @change-page="changePage" />
    <!-- Component App Header -->
    <AppHeader @selected-type="changePokemonTypeFilter" @search="changeSearchWord" />
    <!-- Component App Main -->
    <AppMain />
    <!-- Component App Loader -->
    <AppLoader />
    <!-- Component Button Next -->
    <AppArrowsPokedex direction="next" @change-page="changePage" />
  </div>
</template>

<style lang="scss" scoped>
@import '../src/assets/scss/style.scss';
</style>



