<script>
export default {
    props: {
        options: Array,
        defaultOption: {
            type: String,
            default: '',
        },
    },
    emits: ['selected-new-option'],
};
</script>

<template>
    <select @change="$emit('selected-new-option')">
        <option>{{ defaultOption }}</option>
        <option v-for="option in options" :key="option" :class="option.toLowerCase()">
            {{ option }}
        </option>
    </select>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;
</style>
