<script>
export default {
    data() {
        return {
            isLoading: true
        };
    },
    created() {
        // Simulazione di un ritardo per i dati di caricamento
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }
};
</script>

<template>
    <div class="loader-container" v-if="isLoading">
        <h1>Loading...</h1>
        <div class="loader"></div>
    </div>
</template>
  
  
<style scoped>
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-left: 50px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
  