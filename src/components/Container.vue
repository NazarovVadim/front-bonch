<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'my-container'
    }
</script>

<style scoped>
    .container{
        max-width: 1200px;
        padding: 160px 0 30px 0;
        display: flex;
        margin: auto;
    }
</style>