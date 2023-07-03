<script>
import axios from 'axios';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {};
    components: {
      AppMain;
    }
  },
  components: { AppMain }
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
