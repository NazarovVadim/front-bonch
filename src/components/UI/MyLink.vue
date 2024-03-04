<template>
    <a href="#" @click.stop>
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'my-link'
    }
</script>

<style>
    a{
        margin-right: 30px;
        color: white;
        text-decoration: none;
        transition: all .2s ease;
    }
    a:hover{
        color: #FE461C;

    }
</style>


