import { reactive } from "vue";

export const store = reactive({
  isLoading: false,
  pokemons: {
    list: [],
    types: [],
    pages: {
      prev: null,
      next: null,
      currentPage: 0,
    },
  },
});
