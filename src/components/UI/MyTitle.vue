<template>
    <h1 class="h1">
        <slot></slot>
    </h1>

</template>

<script>
    export default {
        name: 'my-title'
    }
</script>

<style>
    .h1{
        font-weight: 500;
        font-size: 36px;
        
    }

</style>
