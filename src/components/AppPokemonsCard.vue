<script>
export default {
    props: {
        id: Number,
        name: String,
        img: String,
        type: String,
    },
};
</script>

<template>
    <!-- Pokemons card -->
    <div :class="`pokemon-card ${type}`">
        <figure>
            <img class="img-fluid" :src="img" :alt="name" />
        </figure>
        <div># {{ id }}</div>
        <div>
            <strong>{{ name }}</strong>
        </div>
        <div>
            <em>{{ type }}</em>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

.pokemon-card {
    background-color: white;
    text-align: center;
    border-radius: 20px;
    padding: 0.5rem 1rem;

    // Pokemons img
    figure {
        background-color: white;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        overflow: hidden;
        margin-bottom: 2rem;
    }

    @each $type,
    $color in $types {
        &.#{$type} {
            background-color: $color;
        }
    }
}
</style>
