<template>
    <container class="container">
        <slot></slot>
    </container>
</template>

<script>
    export default {
        name: 'my-container'
    }
</script>

<style scoped>
    .container{
        max-width: 1200px;
        height: 90vh;
        padding: 0 160px 0 30px;
        display: flex;
    }
</style>