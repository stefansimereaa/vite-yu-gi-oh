<script>
import { store } from '../data/store';

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div v-if="store.isLoading" class="layover white-background">
        <figure>
            <span class="loading-text">Loading...</span>
            <img class="loader" src="../assets/loading.gif" alt="PokeLoader" />
        </figure>
    </div>
</template>

<style scoped>
.layover {
    background-color: rgba(0, 0, 0, 1);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.white-background {
    background-color: white;
}

.loader {
    width: 200px;
    height: 200px;
}

.loading-text {
    font-size: 30px;
    margin-right: 30px;
}
</style>
