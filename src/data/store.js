import { reactive } from "vue";

export const store = reactive({
  pokemons: [],
  isLoading: false,
  pages: { prev: null, next: null },
  totalDocs: 0,
});
