<script>
import axios from 'axios';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
import { store } from './data/store.js';
import AppMain from './components/AppMain.vue';
export default {
  components: { AppMain },

  created() {
    axios.get(endpoint).then(res => {
      const { prev, next, totalDocs } = res.data;
      store.pokemons = res.data.docs;
      store.pages.prev = prev;
      store.pages.next = next;
      store.totalDocs = totalDocs;
    })
  }
}
</script >

<template>
  <div class="container">
    <!-- Main -->
    <AppMain :axios="axios" />
  </div>
</template>
<style lang="scss" scoped>
@import '../src/assets/scss/style.scss';
</style>
