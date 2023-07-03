<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="container-header">
        <button class="btn btn-primary me-3">Prev Page</button>
        <h4>Pokemon scoperti (n.visti in pagina) di (n.totali)</h4>
        <button class="btn btn-primary ms-3">Next Page</button>
    </div>
    <div class="container-pokedex">
        <div class="pokemon-list">
            <div class="card">
                <img src="" alt="immagine">
                <span>numero</span>
                <h4>nome</h4>
                <h5>tipo</h5>
            </div>
            <div class="card">
                <img src="" alt="immagine">
                <span>numero</span>
                <h4>nome</h4>
                <h5>tipo</h5>
            </div>
            <div class="card">
                <img src="" alt="immagine">
                <span>numero</span>
                <h4>nome</h4>
                <h5>tipo</h5>
            </div>
            <div class="card">
                <img src="" alt="immagine">
                <span>numero</span>
                <h4>nome</h4>
                <h5>tipo</h5>
            </div>
            <div class="card">
                <img src="" alt="immagine">
                <span>numero</span>
                <h4>nome</h4>
                <h5>tipo</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'bootstrap/dist/css/bootstrap.css';

.container-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.container-pokedex {
    background-color: #dedede;
    padding: 20px;
    border-radius: 10px;
}

.pokemon-list {
    background-color: #40464b;
    padding: 10px;
    display: flex;
}

.card {
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    text-align: center;
    border-radius: 10px;
}

.card img {
    border-radius: 50px 50px;
}
</style>