<script>
import axios from 'axios';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
import { store } from './data/store.js';
import AppMain from './components/AppMain.vue';
export default {
  components: { AppMain },

  created() {
    axios.get(endpoint).then(res => {
      const { prevPage, nextPage, totalDocs } = res.data;
      store.pokemons = res.data.docs;
      this.totalDocs = totalDocs;
    })
  }
}
</script >

<template>
  <div class="container">
    <!-- Main -->
    <AppMain />
  </div>
</template>
<style lang="scss" scoped>
@import '../src/assets/scss/style.scss';
</style>
