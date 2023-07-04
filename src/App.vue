<script>
import axios from 'axios';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
import { store } from './data/store.js';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import AppArrowsPokedex from './components/AppArrowsPokedex.vue';
export const fetchPokemons = (page = '') => {
  store.isLoading = true;

  const url = page ? endpoint + `?page=${page}` : endpoint;

  axios
    .get(url)
    .then(async res => {
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
};

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
  methods: {
    changePage(page) {
      fetchPokemons(page);
    },
  },

  components: { AppArrowsPokedex, AppMain, AppHeader, AppLoader },

  created() {
    fetchPokemons();
    fetchPokemonsTypes();
  },
};
</script >

<template>
  <div class="container-background">
    <!-- Component Button Prev -->
    <AppArrowsPokedex direction="prev" @change-page="changePage" />
    <!-- Component App Header -->
    <AppHeader />
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



