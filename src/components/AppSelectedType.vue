<script>
export default {
    data() {
        return {
            selectedOption: '',
        };
    },
    props: {
        options: Array,
        defaultOption: {
            type: String,
            default: '',
        },
    },
    emits: ['changed-option'],
};
</script>

<template>
    <!-- Select for type of pokemons -->
    <select v-model="selectedOption" @change="$emit('changed-option', selectedOption)">
        <option value="">{{ defaultOption }}</option>
        <option v-for="option in options" :key="option" :class="option.toLowerCase()">
            {{ option }}
        </option>
    </select>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

select {
    padding: 14px;
    cursor: pointer;
}
</style>
